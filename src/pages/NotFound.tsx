import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50">
			<div className="text-center">
				<h1 className="text-6xl font-bold text-dance-rose mb-4">404</h1>
				<h2 className="text-2xl font-semibold text-gray-800 mb-4">
					¡Ups! Esta página no existe
				</h2>
				<p className="text-gray-600 mb-8">
					La página que buscas no se encuentra. ¿Quieres volver a la página principal?
				</p>
				<Button asChild>
					<Link to="/">Volver al inicio</Link>
				</Button>
			</div>
		</div>
	);
};

export default NotFound; 