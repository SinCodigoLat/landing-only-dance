import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import Instructors from "./pages/Instructors";
import NotFound from "./pages/NotFound";

// Componente principal de la aplicación
const AppContent = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<main className="flex-grow">
				<Routes>
					<Route path="/" element={<Navigate to="/instructores" replace />} />
					<Route path="/instructores" element={<Instructors />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
		</div>
	);
};

// Componente App con providers
const App = () => {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			<TooltipProvider>
				<BrowserRouter future={{
					v7_startTransition: true,
					v7_relativeSplatPath: true
				}}>
					<AppContent />
				</BrowserRouter>
				<Toaster />
				<Sonner />
			</TooltipProvider>
		</QueryClientProvider>
	);
};

export default App; 