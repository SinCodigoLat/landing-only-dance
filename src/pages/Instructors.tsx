import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
	ArrowRight,
	CheckCircle,
	ShieldCheck,
	Users,
	TrendingUp,
	Star,
	Megaphone,
	Shield,
	Zap,
	Clock,
	MapPin,
	Banknote,
	Calendar,
	Edit3,
	Music
} from 'lucide-react';
import FloatingChat from '@/components/FloatingChat';

const Instructors = () => {
	const [cuposDisponibles] = useState(5);

	const handleBetaClick = () => {
		const message = encodeURIComponent('Hola, quiero unirme a OnlyDance beta. Soy instructor y quiero reservar un cupo.');
		window.open(`https://wa.me/18437761052?text=${message}`, '_blank');
	};

	return (
		<div className="min-h-screen flex flex-col">
			{/* Hero */}
			<section className="relative py-12 md:py-20 hero-pattern overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-white"></div>
				<div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
				<div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

				<div className="container px-4 md:px-6 mx-auto relative z-10">
					<div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
						<div className="text-center md:text-left">
							<div className="mb-8">
								<div className="flex items-center justify-center md:justify-start gap-3 mb-4">
									<img src="/onlydance.png" alt="OnlyDance Logo" className="w-12 h-12 md:w-14 md:h-14" />
									<h3 className="text-2xl md:text-3xl font-bold text-foreground">OnlyDance</h3>
								</div>
								<p className="text-lg text-muted-foreground font-medium">La app para instructores que convierte tus clases en experiencias bien pagadas</p>
							</div>

							<Badge className="w-fit mx-auto md:mx-0 mb-6 bg-gradient-to-r from-red-500 to-amber-500 text-white border-0 px-4 py-2 rounded-full text-sm font-medium shadow-sm animate-pulse">
								🔥 Lanzamiento Medellín — Solo {cuposDisponibles} cupos
							</Badge>

							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-foreground mb-8">
								Convierte tus clases en experiencias mejor pagadas
							</h1>

							<p className="text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 mb-6 leading-relaxed">
								Diseña experiencias: enseña 1 hora y sal a practicar con tu estudiante. Más valor para ellos, mejores ingresos para ti.
							</p>

							{/* Bloque premium de beneficios rápidos */}
							<div className="onlydance-gradient-light border-l-4 border-primary rounded-xl p-4 md:p-5 max-w-2xl mx-auto md:mx-0 mb-8">
								<div className="grid sm:grid-cols-3 gap-4 text-left">
									<div className="flex items-center gap-2">
										<Banknote className="w-5 h-5 text-primary" />
										<div>
											<p className="text-sm text-muted-foreground">Pago por experiencia</p>
											<p className="font-semibold text-foreground">50K COP</p>
										</div>
									</div>
									<div className="flex items-center gap-2">
										<Clock className="w-5 h-5 text-primary" />
										<div>
											<p className="text-sm text-muted-foreground">Duración</p>
											<p className="font-semibold text-foreground">1–4 horas</p>
										</div>
									</div>
									<div className="flex items-center gap-2">
										<MapPin className="w-5 h-5 text-primary" />
										<div>
											<p className="text-sm text-muted-foreground">Medellín</p>
											<p className="font-semibold text-foreground">Clientes listos</p>
										</div>
									</div>
								</div>
							</div>

							<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
								<Button 
									onClick={handleBetaClick}
									className="bg-primary hover:bg-primary/90 text-white px-10 py-5 text-xl rounded-2xl flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold"
								>
									Reservar mi cupo
									<ArrowRight className="w-5 h-5" />
								</Button>
							</div>

							<p className="text-sm text-muted-foreground mb-2">Cupos casi llenos — Garantiza tu lugar hoy.</p>

							<div className="flex items-center justify-center md:justify-start gap-6 text-sm text-muted-foreground">
								<div className="flex items-center gap-2">
									<ShieldCheck className="w-4 h-4 text-green-500" />
									<span>Pagos garantizados</span>
								</div>
								<div className="flex items-center gap-2">
									<Users className="w-4 h-4 text-blue-500" />
									<span>Clientes listos para reservar</span>
								</div>
							</div>
						</div>

						<div className="flex justify-center md:justify-end">
							<div className="relative w-full md:max-w-lg p-0 md:p-8 -mx-4 sm:mx-0">
								<img 
									src="/Group 10.png" 
									alt="OnlyDance para instructores - ejemplo de experiencia y ganancias" 
									className="w-full h-[280px] sm:h-[360px] md:h-auto object-cover rounded-none sm:rounded-xl md:rounded-2xl"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Cómo funciona */}
			<section className="py-12 bg-background">
				<div className="container px-4 md:px-6 mx-auto">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-title-large md:text-headline-large font-semibold text-center mb-6">Cómo funciona</h2>
						<div className="grid md:grid-cols-3 gap-6">
							<Card className="text-center onlydance-shadow">
								<CardHeader>
									<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
										<Edit3 className="w-5 h-5 text-primary" />
									</div>
									<CardTitle className="text-title-small">Crea tu experiencia</CardTitle>
								</CardHeader>
								<CardContent className="text-body-medium text-muted-foreground">Diseña rutas, precios y horarios desde la app.</CardContent>
							</Card>
							<Card className="text-center onlydance-shadow">
								<CardHeader>
									<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
										<Calendar className="w-5 h-5 text-primary" />
									</div>
									<CardTitle className="text-title-small">Recibe reservas</CardTitle>
								</CardHeader>
								<CardContent className="text-body-medium text-muted-foreground">Clientes listos y confirmados, pagos garantizados.</CardContent>
							</Card>
							<Card className="text-center onlydance-shadow">
								<CardHeader>
									<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
										<Music className="w-5 h-5 text-primary" />
									</div>
									<CardTitle className="text-title-small">Enseña y sal a bailar</CardTitle>
								</CardHeader>
								<CardContent className="text-body-medium text-muted-foreground">Acompaña a tu estudiante a practicar en lugares reales.</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* 4 disparadores */}
			<section className="py-16 bg-muted/30">
				<div className="container px-4 md:px-6 mx-auto">
					<div className="max-w-5xl mx-auto text-center mb-10">
						<h2 className="text-headline-large md:text-display-small font-semibold mb-3">Hecho para instructores</h2>
						<p className="text-body-large text-muted-foreground">Cuatro razones para entrar hoy</p>
					</div>
					<div className="grid md:grid-cols-2 gap-6">
						<Card className="onlydance-shadow">
							<CardHeader>
								<CardTitle className="flex items-center gap-2"><TrendingUp className="w-5 h-5 text-primary" /> Más ingresos con el mismo tiempo</CardTitle>
							</CardHeader>
							<CardContent className="text-muted-foreground">Una experiencia se cobra entre 2 y 3 veces más que una clase suelta.</CardContent>
						</Card>
						<Card className="onlydance-shadow">
							<CardHeader>
								<CardTitle className="flex items-center gap-2"><Users className="w-5 h-5 text-primary" /> Clientes listos y confirmados</CardTitle>
							</CardHeader>
							<CardContent className="text-muted-foreground">Nosotros traemos la demanda. Tú solo enseñas y bailas.</CardContent>
						</Card>
						<Card className="onlydance-shadow">
							<CardHeader>
								<CardTitle className="flex items-center gap-2"><Megaphone className="w-5 h-5 text-primary" /> Apoyo real en marketing</CardTitle>
							</CardHeader>
							<CardContent className="text-muted-foreground">Perfil pro (fotos + video), promoción en redes y material listo para publicar.</CardContent>
						</Card>
						<Card className="onlydance-shadow">
							<CardHeader>
								<CardTitle className="flex items-center gap-2"><Star className="w-5 h-5 text-primary" /> Escasez + prioridad</CardTitle>
							</CardHeader>
							<CardContent className="text-muted-foreground">Solo 5 instructores en el arranque, prioridad en visibilidad y reservas.</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Oferta irresistible */}
			<section className="py-16 bg-background">
				<div className="container px-4 md:px-6 mx-auto">
					<div className="max-w-5xl mx-auto text-center mb-10">
						<h2 className="text-headline-large md:text-display-small font-semibold mb-3">Tu oferta al entrar hoy</h2>
						<p className="text-body-large text-muted-foreground">Todo lo que necesitas para empezar a facturar experiencias</p>
					</div>
					<div className="grid md:grid-cols-2 gap-6">
						<Card className="onlydance-shadow">
							<CardHeader>
								<CardTitle className="flex items-center gap-2"><TrendingUp className="w-5 h-5 text-primary" /> Beneficio principal</CardTitle>
							</CardHeader>
							<CardContent className="space-y-2 text-muted-foreground">
								<div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-tertiary mt-0.5" /><span>Más ingresos por hora (2x-3x)</span></div>
								<div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-tertiary mt-0.5" /><span>Acceso inmediato a clientes listos para reservar</span></div>
							</CardContent>
						</Card>

						<Card className="onlydance-shadow">
							<CardHeader>
								<CardTitle className="flex items-center gap-2"><Megaphone className="w-5 h-5 text-primary" /> Incentivo inicial</CardTitle>
							</CardHeader>
							<CardContent className="space-y-2 text-muted-foreground">
								<div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-tertiary mt-0.5" /><span>Perfil profesional GRATIS (fotos + video)</span></div>
								<div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-tertiary mt-0.5" /><span>Asesoría en pricing y propuesta</span></div>
								<div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-tertiary mt-0.5" /><span>Cero comisión en tus primeras reservas</span></div>
							</CardContent>
						</Card>

						<Card className="onlydance-shadow">
							<CardHeader>
								<CardTitle className="flex items-center gap-2"><Megaphone className="w-5 h-5 text-primary" /> Apoyo en marketing</CardTitle>
							</CardHeader>
							<CardContent className="space-y-2 text-muted-foreground">
								<div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-tertiary mt-0.5" /><span>Promoción en redes (Instagram, TikTok)</span></div>
								<div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-tertiary mt-0.5" /><span>Material de contenido para tus propias redes</span></div>
								<div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-tertiary mt-0.5" /><span>Opción de "Experiencia Destacada"</span></div>
							</CardContent>
						</Card>

						<Card className="onlydance-shadow">
							<CardHeader>
								<CardTitle className="flex items-center gap-2"><Shield className="w-5 h-5 text-primary" /> Seguridad y confianza</CardTitle>
							</CardHeader>
							<CardContent className="space-y-2 text-muted-foreground">
								<div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-tertiary mt-0.5" /><span>Pagos garantizados y sin riesgo de no-cobro</span></div>
								<div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-tertiary mt-0.5" /><span>Política de cancelación que protege tu tiempo</span></div>
								<div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-tertiary mt-0.5" /><span>Contacto previo con el cliente antes del evento</span></div>
							</CardContent>
						</Card>
					</div>

					<div className="mt-10 text-center bg-primary/5 border border-primary/20 rounded-lg p-6">
						<h3 className="text-title-large font-semibold text-primary mb-3">Acceso exclusivo</h3>
						<p className="text-body-medium text-muted-foreground mb-4">Solo 5 instructores Medellín en el arranque. Prioridad en el algoritmo de búsqueda y visibilidad.</p>
						<Button onClick={handleBetaClick} className="bg-primary hover:bg-primary/90 text-white px-6 py-2 text-sm rounded-lg">
							Quiero uno de esos lugares
						</Button>
					</div>
				</div>
			</section>

			{/* CTA final */}
			<section className="py-16 onlydance-gradient text-white">
				<div className="container px-4 md:px-6 mx-auto text-center">
					<h2 className="text-headline-large md:text-display-small font-semibold mb-4">Entras ahora y te garantizamos</h2>
					<div className="max-w-3xl mx-auto mb-8">
						<div className="grid md:grid-cols-3 gap-4 text-sm">
							<div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-300" /><span>Visibilidad y prioridad</span></div>
							<div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-300" /><span>Perfil pro sin costo</span></div>
							<div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-300" /><span>Clientes confirmados</span></div>
						</div>
					</div>
					<Button 
						onClick={handleBetaClick}
						variant="secondary"
						size="lg"
						className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg rounded-xl shadow-lg"
					>
						<Zap className="w-5 h-5 mr-2" />
						Reservar mi cupo ahora
					</Button>
					<p className="text-sm opacity-75 mt-4">Cupos súper limitados: quedan {cuposDisponibles}</p>
				</div>
			</section>

			<footer className="py-8 bg-foreground text-background">
				<div className="container px-4 md:px-6 mx-auto text-center">
					<div className="flex items-center justify-center mb-4">
						<img src="/onlydance.png" alt="OnlyDance Logo" className="w-8 h-8 mr-3" />
						<h3 className="text-headline-small font-semibold">OnlyDance</h3>
					</div>
					<p className="text-body-medium text-muted-foreground mb-4">Donde el aprendizaje se convierte en experiencia real.</p>
					<div className="flex items-center justify-center gap-2 text-body-small text-muted-foreground">
						<span>Medellín, Colombia</span>
						<span>•</span>
						<span>Cupos beta limitados</span>
					</div>
				</div>
			</footer>

			<FloatingChat />
		</div>
	);
};

export default Instructors;


