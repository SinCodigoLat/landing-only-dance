import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { getCurrentUser, signInWithEmail, signOut, isAdmin } from './supabase';
import { User } from '@supabase/supabase-js';

// Definir el tipo para el contexto
type AuthContextType = {
  user: User | null;
  loading: boolean;
  error: string | null;
  admin: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

// Crear el contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook personalizado para usar el contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};

// Props para el proveedor
type AuthProviderProps = {
  children: ReactNode;
};

// Componente proveedor
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [admin, setAdmin] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Cargar usuario al iniciar
  useEffect(() => {
    const loadUser = async () => {
      try {
        const { user: currentUser, error: userError } = await getCurrentUser();
        
        // Si el error es AuthSessionMissingError, es normal cuando no hay sesión
        // No lo consideramos un error para la UI, simplemente no hay usuario
        if (userError) {
          if (userError.message?.includes('Auth session missing')) {
            console.log('No hay sesión activa, usuario no autenticado');
            setUser(null);
            setAdmin(false);
          } else {
            // Otros errores sí son relevantes
            console.error('Error al cargar el usuario:', userError);
            setError('No se pudo cargar la información del usuario');
          }
        } else {
          // Si no hay error, asignamos el usuario
          setUser(currentUser || null);
          
          if (currentUser) {
            try {
              const adminStatus = await isAdmin();
              setAdmin(adminStatus);
            } catch (adminErr) {
              console.error('Error al verificar estado de administrador:', adminErr);
              setAdmin(false);
            }
          }
        }
      } catch (err) {
        console.error('Error inesperado al cargar el usuario:', err);
        // No mostramos mensajes de error por "session missing" al usuario
        if (!String(err).includes('Auth session missing')) {
          setError('No se pudo cargar la información del usuario');
        }
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  // Función de inicio de sesión
  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const { data, error: loginError } = await signInWithEmail(email, password);
      
      if (loginError) {
        throw loginError;
      }

      setUser(data?.user || null);
      
      if (data?.user) {
        try {
          const adminStatus = await isAdmin();
          setAdmin(adminStatus);
        } catch (adminErr) {
          console.error('Error al verificar estado de administrador:', adminErr);
          setAdmin(false);
        }
      }
    } catch (err: any) {
      console.error('Error al iniciar sesión:', err);
      
      // Mejorar los mensajes de error para el usuario
      if (err.message?.includes('Invalid login credentials')) {
        setError('Credenciales inválidas. Verifica tu correo y contraseña.');
      } else if (err.message?.includes('Email not confirmed')) {
        setError('Tu correo electrónico no ha sido confirmado.');
      } else {
        setError(err.message || 'Error al iniciar sesión');
      }
      
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Función de cierre de sesión
  const logout = async () => {
    setLoading(true);
    
    try {
      const { error: logoutError } = await signOut();
      
      if (logoutError) {
        throw logoutError;
      }
      
      setUser(null);
      setAdmin(false);
    } catch (err: any) {
      console.error('Error al cerrar sesión:', err);
      // No mostramos error en la interfaz ya que intentamos cerrar sesión de todos modos
      // setError(err.message || 'Error al cerrar sesión');
    } finally {
      // Siempre limpiamos el estado del usuario al cerrar sesión
      // incluso si hubo un error
      setUser(null);
      setAdmin(false);
      setLoading(false);
    }
  };

  const value = {
    user,
    loading,
    error,
    admin,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}; 