import { createClient } from '@supabase/supabase-js';

// Obtener variables de entorno
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Verificar que las credenciales existen
if (!supabaseUrl || supabaseUrl.includes('tu-proyecto') || !supabaseAnonKey || supabaseAnonKey.includes('tu-clave')) {
  console.error('⚠️ Credenciales de Supabase no válidas. Revisa tu archivo .env.local');
}

// Crear cliente de Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Funciones de autenticación
export const signInWithEmail = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    return { data, error };
  } catch (err: any) {
    // Mejorar mensaje de error para problemas de conexión
    if (err.message?.includes('fetch') || err instanceof TypeError) {
      console.error('Error de conexión a Supabase:', err);
      return { 
        data: null, 
        error: new Error('No se pudo conectar al servidor. Verifica tu conexión a internet y que la URL de Supabase sea correcta.') 
      };
    }
    throw err;
  }
};

export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    return { error };
  } catch (err: any) {
    console.error('Error al cerrar sesión:', err);
    return { error: new Error('Error al cerrar sesión: ' + err.message) };
  }
};

export const getCurrentUser = async () => {
  try {
    const { data, error } = await supabase.auth.getUser();
    return { user: data.user, error };
  } catch (err: any) {
    console.error('Error al obtener usuario actual:', err);
    return { user: null, error: err };
  }
};

export const isAdmin = async () => {
  const { user, error } = await getCurrentUser();
  
  if (error || !user) {
    return false;
  }

  try {
    // Verificar si el usuario es administrador
    const { data, error: adminError } = await supabase
      .from('administrators')
      .select('id, role')
      .eq('user_id', user.id)
      .single();

    if (adminError) {
      console.error('Error al verificar estado de administrador:', adminError);
      
      // Si hay un error de recursión infinita u otro error de política,
      // intentar una verificación alternativa usando el ID directamente
      if (adminError.message?.includes('recursion') || 
          adminError.message?.includes('policy')) {
        console.log('Intentando verificación alternativa...');
        return user.id === '276d9c85-edff-47d9-83e4-0f37d5781387';
      }
      
      return false;
    }

    return !!data;
  } catch (err) {
    console.error('Error inesperado al verificar administrador:', err);
    return false;
  }
}; 