import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
	Users, 
	MapPin, 
	Calendar, 
	Star, 
	MessageCircle, 
	Heart, 
	Zap, 
	Shield,
	ArrowRight,
	CheckCircle,
	Play,
	TrendingUp,
	ShieldCheck,
	Clock,
	Smile,
	ChevronDown
} from 'lucide-react';
import FloatingChat from '@/components/FloatingChat';

const Index = () => {
	const [activeTab, setActiveTab] = useState('estudiantes');
	const [cuposDisponibles, setCuposDisponibles] = useState(47);

	const handleBetaClick = () => {
		// Enviar mensaje de WhatsApp para instructores
		const message = encodeURIComponent('Hola, quiero unirme a OnlyDance beta. Soy un instructor.');
		window.open(`https://wa.me/18437761052?text=${message}`, '_blank');
	};



	const experiences = [
		{
			id: 1,
			title: "Mi primera noche de baile",
			description: "Ideal para principiantes",
			icon: "💃",
			badge: "Principiantes",
			price: "$100.000-140.000",
			duration: "3 horas"
		},
		{
			id: 2,
			title: "Ruta de salsa",
			description: "Dos bares, playlist y guía incluida",
			icon: "🎵",
			badge: "Popular",
			price: "$160.000-200.000",
			duration: "4 horas"
		},
		{
			id: 3,
			title: "Noche de bachata",
			description: "Experiencia guiada por estilo",
			icon: "💕",
			badge: "Romántico",
			price: "$120.000-160.000",
			duration: "3 horas"
		},
		{
			id: 4,
			title: "Grupo de viajeros",
			description: "Conoce gente nueva bailando",
			icon: "🌍",
			badge: "Social",
			price: "$140.000-180.000",
			duration: "4 horas"
		},
		{
			id: 5,
			title: "Celebraciones especiales",
			description: "Cumpleaños, aniversarios, etc.",
			icon: "🎉",
			badge: "Eventos",
			price: "$200.000-320.000",
			duration: "5 horas"
		}
	];

	const testimonials = [
		{
			id: 1,
			name: "Laura",
			role: "Estudiante y viajera en Medellín",
			content: "Siempre quise salir a practicar pero me daba pena ir sola. Con OnlyDance tuve mi primera noche de salsa real, y no me sentí fuera de lugar ni un segundo.",
			rating: 5,
			avatar: "L"
		},
		{
			id: 2,
			name: "David",
			role: "Instructor de bachata",
			content: "Como instructor, antes solo tenía clases. Ahora también tengo experiencias, y mis alumnos se motivan más al bailar fuera del salón.",
			rating: 5,
			avatar: "D"
		},
		{
			id: 3,
			name: "María",
			role: "Viajera de Barcelona",
			content: "Llegué a Medellín sin conocer a nadie. Gracias a OnlyDance no solo aprendí salsa, sino que hice amigos para toda la vida.",
			rating: 5,
			avatar: "M"
		}
	];

	const faqs = [
		{
			question: "¿Por qué debería crear experiencias además de dar clases?",
			answer: "Las experiencias te permiten diversificar tus ingresos y ganar más dinero. Mientras una clase tradicional cuesta $60.000-100.000, una experiencia puede costar $100.000-320.000. Además, tus alumnos practican en ambientes reales, mejorando su confianza y retención."
		},
		{
			question: "¿Cómo funciona el modelo de taxidancer en OnlyDance?",
			answer: "Funciona como los taxidancers tradicionales, pero sistematizado. Tú creas experiencias (rutas de baile, noches temáticas, etc.), los estudiantes reservan a través de la app, y tú los acompañas a bailar en lugares reales. La plataforma maneja los pagos, reservas y marketing."
		},
		{
			question: "¿Qué herramientas me proporciona la plataforma?",
			answer: "Sistema completo de gestión: agenda integrada, gestión de reservas, sistema de reviews y calificaciones, panel de control para crear experiencias, configuración de precios y horarios, y analytics de tu negocio. Todo desde una sola aplicación."
		},
		{
			question: "¿Cómo me ayuda OnlyDance a sistematizar mi negocio?",
			answer: "Automatiza procesos que antes hacías manualmente: agenda de clases y experiencias, confirmaciones de reservas, cobros, marketing de tus servicios, y gestión de clientes. Esto te permite enfocarte en lo que mejor sabes hacer: enseñar y bailar."
		},
		{
			question: "¿Qué beneficios obtengo al tener reviews en la plataforma?",
			answer: "Los reviews aumentan la confianza de nuevos estudiantes en ti. Cada experiencia exitosa genera calificaciones y comentarios que se muestran en tu perfil, atrayendo más alumnos y permitiéndote cobrar precios premium por tu reputación."
		},
		{
			question: "¿Cómo me capacitan para crear experiencias exitosas?",
			answer: "Recibes entrenamiento personalizado sobre cómo diseñar experiencias atractivas, gestionar grupos, crear rutas de baile efectivas, y maximizar tus ganancias. También te conectamos con otros instructores exitosos para compartir mejores prácticas."
		}
	];

	return (
		<div className="min-h-screen flex flex-col">
					{/* Hero Section */}
		<section className="relative py-12 md:py-20 hero-pattern overflow-hidden">
			{/* Background decoration */}
			<div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-white"></div>
			<div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
			<div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
			
			<div className="container px-4 md:px-6 mx-auto relative z-10">
				<div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Columna de contenido */}
					<div className="text-center md:text-left">
						{/* Logo OnlyDance al inicio */}
						<div className="mb-8">
							<div className="flex items-center justify-center md:justify-start gap-3 mb-4">
								<img src="/onlydance.png" alt="OnlyDance Logo" className="w-12 h-12 md:w-14 md:h-14" />
								<h3 className="text-2xl md:text-3xl font-bold text-foreground">OnlyDance</h3>
							</div>
							<p className="text-lg text-muted-foreground font-medium">Donde el aprendizaje se convierte en experiencia real</p>
						</div>
						
						<Badge variant="secondary" className="w-fit mx-auto md:mx-0 mb-6 bg-primary/10 text-primary border-0 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
							✨ Estamos en beta - Solo {cuposDisponibles} cupos disponibles
						</Badge>
						
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-foreground mb-6">
							Aprende a bailar y{" "}
							<span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
								sal a vivirlo
							</span>
						</h1>
						
						<p className="text-xl text-muted-foreground max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed">
							La primera plataforma donde no solo tomas clases... sino que sales a bailar con tu instructor en experiencias reales, sociales y seguras.
						</p>
						
						<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
							<Button 
								onClick={handleBetaClick}
								className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-xl flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
							>
								Soy instructor - Unirme a la beta
								<ArrowRight className="w-5 h-5" />
							</Button>
						</div>
						
						{/* Trust indicators */}
						<div className="flex items-center justify-center md:justify-start gap-6 text-sm text-muted-foreground">
							<div className="flex items-center gap-2">
								<ShieldCheck className="w-4 h-4 text-green-500" />
								<span>Experiencias seguras</span>
							</div>
							<div className="flex items-center gap-2">
								<Users className="w-4 h-4 text-blue-500" />
								<span>+Instructores experimentados</span>
							</div>
						</div>
					</div>
					
					{/* Columna de imagen */}
					<div className="flex justify-center md:justify-end">
						<div className="relative max-w-lg w-full p-8">
							<img 
								src="/experiencia_onlydance.png" 
								alt="Experiencia OnlyDance - La ruta de salsa" 
								className="w-full h-auto rounded-2xl"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>





			{/* Qué es OnlyDance Section */}
			<section className="py-16 bg-background">
				<div className="container px-4 md:px-6 mx-auto">
					<div className="max-w-5xl mx-auto text-center">
						<h2 className="text-headline-large md:text-display-small font-semibold mb-6">
							¿Qué es <span className="text-primary">OnlyDance</span>?
						</h2>
						<p className="text-body-large text-muted-foreground mb-8 max-w-3xl mx-auto">
							OnlyDance conecta instructores de baile con personas que quieren aprender y salir a practicar de verdad, en ambientes reales como bares, discotecas y encuentros sociales. No más clases que terminan en casa sin usar lo aprendido. Con OnlyDance, aprendes y lo vives.
						</p>
						<div className="onlydance-gradient-light p-6 rounded-xl border-l-4 border-primary max-w-4xl mx-auto">
							<p className="text-title-large font-semibold text-foreground">
								"No solo aprendes a bailar... sales a bailar con quien te enseñó"
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Para instructores Section */}
			<section className="py-16 bg-muted/30">
				<div className="container px-4 md:px-6 mx-auto">
					<div className="max-w-5xl mx-auto text-center">
						<h2 className="text-headline-large md:text-display-small font-semibold mb-6">
							¿Eres instructor de baile en Medellín?
						</h2>
						<p className="text-body-large text-muted-foreground mb-8">
							Únete a OnlyDance y conviértete en parte de la primera plataforma que conecta instructores con estudiantes para experiencias reales de baile.
						</p>
						
						<Card className="max-w-2xl mx-auto onlydance-shadow">
							<CardHeader className="text-center">
								<CardTitle className="flex items-center justify-center gap-2 text-title-large">
									<Star className="w-6 h-6 text-primary" />
									Beneficios para instructores
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="flex items-start gap-3">
									<CheckCircle className="w-5 h-5 text-tertiary mt-0.5" />
									<span className="text-body-medium">Genera ingresos extra ofreciendo experiencias sociales</span>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle className="w-5 h-5 text-tertiary mt-0.5" />
									<span className="text-body-medium">Organiza salidas con tus estudiantes directamente desde la app</span>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle className="w-5 h-5 text-tertiary mt-0.5" />
									<span className="text-body-medium">Crea comunidad, conecta con nuevos alumnos y construye tu marca personal</span>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle className="w-5 h-5 text-tertiary mt-0.5" />
									<span className="text-body-medium">Horarios flexibles y control total sobre tus experiencias</span>
								</div>
							</CardContent>
						</Card>
						
						<div className="mt-8">
							<Button 
								onClick={handleBetaClick}
								className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-base rounded-lg flex items-center gap-2 shadow-sm mx-auto"
							>
								Unirme como instructor
								<ArrowRight className="w-4 h-4" />
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Experiencias sociales Section */}
			<section className="py-16 bg-background">
				<div className="container px-4 md:px-6 mx-auto">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-headline-large md:text-display-small font-semibold text-center mb-4">
							Experiencias sociales disponibles
						</h2>
						<p className="text-center text-body-large text-muted-foreground mb-12 max-w-3xl mx-auto">
							Inspirado en el concepto de taxi dancer y experiencias reales como las Airbnb Experiences y los bar crawls para viajeros, OnlyDance nace en Medellín para convertir el baile en una experiencia social completa.
						</p>
						
						<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{experiences.map((experience) => (
								<Card key={experience.id} className="hover:onlydance-shadow-lg transition-shadow onlydance-shadow">
									<CardHeader>
										<div className="flex items-center justify-between">
											<span className="text-3xl">{experience.icon}</span>
											<Badge variant="outline" className="border-primary/20 text-primary">{experience.badge}</Badge>
										</div>
										<CardTitle className="text-title-medium">{experience.title}</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="text-body-medium text-muted-foreground mb-4">{experience.description}</p>
										<div className="flex items-center justify-between text-body-small">
											<div className="flex items-center gap-1">
												<Clock className="w-4 h-4 text-muted-foreground" />
												<span className="text-muted-foreground">{experience.duration}</span>
											</div>
											<div className="font-semibold text-primary">{experience.price}</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* ¿Por qué elegir OnlyDance? Section */}
			<section className="py-16 bg-muted/30">
				<div className="container px-4 md:px-6 mx-auto">
					<div className="max-w-5xl mx-auto text-center">
						<h2 className="text-headline-large md:text-display-small font-semibold mb-6">
							¿Por qué elegir OnlyDance?
						</h2>
						<p className="text-body-large text-muted-foreground mb-12">
							La primera plataforma que combina aprendizaje con experiencias reales
						</p>
						
						<div className="grid md:grid-cols-2 gap-8 mb-8">
							<Card className="border-2 border-border onlydance-shadow">
								<CardHeader className="text-center">
									<CardTitle className="text-title-large">Clases tradicionales</CardTitle>
									<div className="text-display-small font-bold text-muted-foreground">$60.000-100.000</div>
									<div className="text-body-small text-muted-foreground">por clase</div>
								</CardHeader>
								<CardContent className="space-y-3">
									<div className="flex items-center gap-2 text-body-small">
										<CheckCircle className="w-4 h-4 text-tertiary" />
										<span>Aprendizaje básico</span>
									</div>
									<div className="flex items-center gap-2 text-body-small">
										<CheckCircle className="w-4 h-4 text-tertiary" />
										<span>Horarios fijos</span>
									</div>
									<div className="flex items-center gap-2 text-body-small text-muted-foreground">
										<CheckCircle className="w-4 h-4 text-muted-foreground" />
										<span>Sin práctica real</span>
									</div>
									<div className="flex items-center gap-2 text-body-small text-muted-foreground">
										<CheckCircle className="w-4 h-4 text-muted-foreground" />
										<span>Sin conexión social</span>
									</div>
								</CardContent>
							</Card>

							<Card className="border-2 border-primary relative onlydance-shadow">
								<div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
									<Badge className="bg-primary text-white">Recomendado</Badge>
								</div>
								<CardHeader className="text-center">
									<CardTitle className="text-title-large">OnlyDance</CardTitle>
									<div className="text-display-small font-bold text-primary">$100.000-320.000</div>
									<div className="text-body-small text-muted-foreground">por experiencia</div>
								</CardHeader>
								<CardContent className="space-y-3">
									<div className="flex items-center gap-2 text-body-small">
										<CheckCircle className="w-4 h-4 text-tertiary" />
										<span>Aprendizaje + práctica real</span>
									</div>
									<div className="flex items-center gap-2 text-body-small">
										<CheckCircle className="w-4 h-4 text-tertiary" />
										<span>Horarios flexibles</span>
									</div>
									<div className="flex items-center gap-2 text-body-small">
										<CheckCircle className="w-4 h-4 text-tertiary" />
										<span>Experiencia social completa</span>
									</div>
									<div className="flex items-center gap-2 text-body-small">
										<CheckCircle className="w-4 h-4 text-tertiary" />
										<span>Instructor personal</span>
									</div>
								</CardContent>
							</Card>
						</div>
						
						<div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
							<h3 className="text-title-large font-semibold text-primary mb-3">
								🚀 Únete a la primera generación
							</h3>
							<p className="text-body-medium text-muted-foreground mb-4">
								Como instructor beta, tendrás acceso exclusivo a nuevas funcionalidades y podrás dar forma al futuro de OnlyDance.
							</p>
							<Button 
								onClick={handleBetaClick}
								className="bg-primary hover:bg-primary/90 text-white px-6 py-2 text-sm rounded-lg"
							>
								Ser instructor beta
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Programa Beta para Instructores Section */}
			<section className="py-16 bg-muted/30">
				<div className="container px-4 md:px-6 mx-auto">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-headline-large md:text-display-small font-semibold text-center mb-4">
							Programa Beta para Instructores
						</h2>
						<p className="text-center text-body-large text-muted-foreground mb-12 max-w-3xl mx-auto">
							Únete a nuestra plataforma en etapa beta y expande tu negocio más allá de las clases tradicionales
						</p>
						
						<div className="grid md:grid-cols-3 gap-6 mb-12">
							<Card className="text-center hover:onlydance-shadow-lg transition-shadow onlydance-shadow">
								<CardHeader>
									<div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
										1
									</div>
									<CardTitle className="text-title-medium">Capacitación Incluida</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-body-medium text-muted-foreground">Recibe entrenamiento personalizado sobre cómo crear y gestionar experiencias de baile exitosas</p>
								</CardContent>
							</Card>
							
							<Card className="text-center hover:onlydance-shadow-lg transition-shadow onlydance-shadow">
								<CardHeader>
									<div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
										2
									</div>
									<CardTitle className="text-title-medium">Panel de Control Completo</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-body-medium text-muted-foreground">Crea experiencias, gestiona reservas, configura horarios y administra tu negocio desde una sola plataforma</p>
								</CardContent>
							</Card>
							
							<Card className="text-center hover:onlydance-shadow-lg transition-shadow onlydance-shadow">
								<CardHeader>
									<div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
										3
									</div>
									<CardTitle className="text-title-medium">Expande tu Alcance</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-body-medium text-muted-foreground">Llega a más estudiantes y diversifica tus ingresos con experiencias únicas de baile</p>
								</CardContent>
							</Card>
						</div>
						
						<div className="text-center">
							<Button 
								onClick={handleBetaClick}
								className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-base rounded-lg flex items-center gap-2 shadow-sm mx-auto"
							>
								Únete al Programa Beta
								<ArrowRight className="w-4 h-4" />
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Próximas experiencias Section */}
			<section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
				<div className="container px-4 md:px-6 mx-auto">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-headline-large md:text-display-small font-semibold text-center mb-4">
							Próximas experiencias
						</h2>
						<p className="text-center text-body-large text-muted-foreground mb-12 max-w-3xl mx-auto">
							No te pierdas estas experiencias increíbles que están por venir
						</p>
						
						<div className="grid md:grid-cols-3 gap-6">
							{/* Experiencia 1 */}
							<div className="group cursor-pointer">
								<div className="relative overflow-hidden rounded-xl mb-3">
									<img 
										src="/experiencia01.png" 
										alt="Noche de Salsa en Provenza" 
										className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
									/>
									<div className="absolute top-3 left-3">
										<Badge className="bg-white text-foreground border-0 shadow-sm">
											<Users className="w-3 h-3 mr-1" />
											Salida grupal
										</Badge>
									</div>
									<div className="absolute top-3 right-3">
										<Badge className="bg-white text-foreground border-0 shadow-sm">
											<Clock className="w-3 h-3 mr-1" />
											8:00 PM
										</Badge>
									</div>
								</div>
								<div className="space-y-2">
									<h3 className="text-title-medium font-semibold text-foreground">Noche de Salsa en Provenza</h3>
									<p className="text-body-small text-muted-foreground">Salsa • Bachata</p>
									<div className="flex items-center gap-1 text-body-small text-muted-foreground">
										<MapPin className="w-3 h-3" />
										<span>Zona Rosa, Medellín</span>
									</div>
									<div className="flex items-center gap-1 text-body-small text-muted-foreground">
										<Calendar className="w-3 h-3" />
										<span>Viernes 15 Dic</span>
									</div>
									<div className="flex items-center justify-between pt-2">
										<span className="font-semibold text-primary">$180.000</span>
										<span className="text-body-small text-muted-foreground">8 cupos disponibles</span>
									</div>
								</div>
							</div>

							{/* Experiencia 2 */}
							<div className="group cursor-pointer">
								<div className="relative overflow-hidden rounded-xl mb-3">
									<img 
										src="/experiencia02.jpg" 
										alt="Bachata Romántica" 
										className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
									/>
									<div className="absolute top-3 left-3">
										<Badge className="bg-white text-foreground border-0 shadow-sm">
											<Heart className="w-3 h-3 mr-1" />
											Romántico
										</Badge>
									</div>
									<div className="absolute top-3 right-3">
										<Badge className="bg-white text-foreground border-0 shadow-sm">
											<Clock className="w-3 h-3 mr-1" />
											9:00 PM
										</Badge>
									</div>
								</div>
								<div className="space-y-2">
									<h3 className="text-title-medium font-semibold text-foreground">Bachata Romántica</h3>
									<p className="text-body-small text-muted-foreground">Bachata • Sensual</p>
									<div className="flex items-center gap-1 text-body-small text-muted-foreground">
										<MapPin className="w-3 h-3" />
										<span>Poblado, Medellín</span>
									</div>
									<div className="flex items-center gap-1 text-body-small text-muted-foreground">
										<Calendar className="w-3 h-3" />
										<span>Sábado 16 Dic</span>
									</div>
									<div className="flex items-center justify-between pt-2">
										<span className="font-semibold text-primary">$140.000</span>
										<span className="text-body-small text-muted-foreground">12 cupos disponibles</span>
									</div>
								</div>
							</div>

							{/* Experiencia 3 */}
							<div className="group cursor-pointer">
								<div className="relative overflow-hidden rounded-xl mb-3">
									<img 
										src="/experiencia03.png" 
										alt="Grupo de Viajeros" 
										className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
									/>
									<div className="absolute top-3 left-3">
										<Badge className="bg-white text-foreground border-0 shadow-sm">
											<Users className="w-3 h-3 mr-1" />
											Social
										</Badge>
									</div>
									<div className="absolute top-3 right-3">
										<Badge className="bg-white text-foreground border-0 shadow-sm">
											<Clock className="w-3 h-3 mr-1" />
											7:30 PM
										</Badge>
									</div>
								</div>
								<div className="space-y-2">
									<h3 className="text-title-medium font-semibold text-foreground">Grupo de Viajeros</h3>
									<p className="text-body-small text-muted-foreground">Salsa • Social</p>
									<div className="flex items-center gap-1 text-body-small text-muted-foreground">
										<MapPin className="w-3 h-3" />
										<span>Centro, Medellín</span>
									</div>
									<div className="flex items-center gap-1 text-body-small text-muted-foreground">
										<Calendar className="w-3 h-3" />
										<span>Domingo 17 Dic</span>
									</div>
									<div className="flex items-center justify-between pt-2">
										<span className="font-semibold text-primary">$160.000</span>
										<span className="text-body-small text-muted-foreground">15 cupos disponibles</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonios Section */}
			<section className="py-16 bg-muted/30">
				<div className="container px-4 md:px-6 mx-auto">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-headline-large md:text-display-small font-semibold text-center mb-4">
							Lo que dicen de la experiencia
						</h2>
						<p className="text-center text-body-large text-muted-foreground mb-12 max-w-3xl mx-auto">
							Descubre cómo OnlyDance está transformando la forma de aprender y vivir el baile
						</p>
						
						<div className="grid md:grid-cols-3 gap-6">
							{testimonials.map((testimonial) => (
								<Card key={testimonial.id} className="relative hover:onlydance-shadow-lg transition-shadow onlydance-shadow">
									<CardContent className="p-6">
										<div className="flex items-center gap-1 mb-4">
											{[...Array(testimonial.rating)].map((_, i) => (
												<Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
											))}
										</div>
										<blockquote className="text-body-medium text-foreground mb-6 leading-relaxed">
											"{testimonial.content}"
										</blockquote>
										<div className="flex items-center gap-3">
											<div className="relative">
												<img 
													src={`/testimonials/${testimonial.name.toLowerCase()}.png`}
													alt={testimonial.name}
													className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
													onError={(e) => {
														// Fallback a avatar con iniciales si la imagen no carga
														const target = e.target as HTMLImageElement;
														target.style.display = 'none';
														const fallback = target.nextSibling as HTMLElement;
														if (fallback) fallback.style.display = 'flex';
													}}
												/>
												<div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm hidden">
													{testimonial.avatar}
												</div>
											</div>
											<div className="flex-1">
												<div className="flex items-center gap-2 mb-1">
													<p className="font-semibold text-foreground">{testimonial.name}</p>
													<Badge className="bg-green-500 text-white border-0 text-xs">
														<CheckCircle className="w-3 h-3 mr-1" />
														Verificado
													</Badge>
												</div>
												<p className="text-body-small text-muted-foreground">{testimonial.role}</p>
											</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* FAQs Section */}
			<section className="py-16 bg-background">
				<div className="container px-4 md:px-6 mx-auto">
					<div className="max-w-5xl mx-auto text-center">
						<h2 className="text-headline-large md:text-display-small font-semibold mb-4">
							Preguntas frecuentes para instructores
						</h2>
						<p className="text-body-large text-muted-foreground mb-12 max-w-3xl mx-auto">
							Resolvemos las dudas más comunes sobre cómo OnlyDance puede transformar tu negocio
						</p>
						<div className="space-y-4">
							{faqs.map((faq, index) => (
								<Card key={index} className="hover:onlydance-shadow-lg transition-shadow onlydance-shadow">
									<CardHeader className="pb-0">
										<CardTitle className="text-title-medium flex items-center justify-between cursor-pointer group" 
													onClick={() => {
														const content = document.getElementById(`faq-${index}`);
														const icon = document.getElementById(`faq-icon-${index}`);
														if (content && icon) {
															if (content.style.display === 'none') {
																content.style.display = 'block';
																icon.style.transform = 'rotate(180deg)';
															} else {
																content.style.display = 'none';
																icon.style.transform = 'rotate(0deg)';
															}
														}
													}}>
											<span className="text-foreground group-hover:text-primary transition-colors">
												{faq.question}
											</span>
											<ChevronDown 
												id={`faq-icon-${index}`}
												className="w-5 h-5 text-muted-foreground transition-transform duration-200" 
											/>
										</CardTitle>
									</CardHeader>
									<CardContent>
										<div 
											id={`faq-${index}`}
											className="text-body-medium text-muted-foreground leading-relaxed pt-2"
											style={{ display: index === 0 ? 'block' : 'none' }}
										>
											{faq.answer}
										</div>
									</CardContent>
								</Card>
							))}
						</div>
						
						<div className="mt-12 text-center">
							<p className="text-body-medium text-muted-foreground mb-4">
								¿Tienes más preguntas sobre cómo unirte a OnlyDance?
							</p>
							<Button 
								onClick={handleBetaClick}
								variant="outline"
								className="border-primary text-primary hover:bg-primary hover:text-white"
							>
								<MessageCircle className="w-4 h-4 mr-2" />
								Hablar con el equipo
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-16 onlydance-gradient text-white">
				<div className="container px-4 md:px-6 mx-auto text-center">
					<h2 className="text-headline-large md:text-display-small font-semibold mb-4">
						¿Eres instructor de baile en Medellín?
					</h2>
					<p className="text-body-large mb-6 opacity-90">
						Únete a la primera generación de instructores OnlyDance
					</p>
											<div className="max-w-3xl mx-auto mb-8">
							<div className="grid md:grid-cols-3 gap-4 text-sm">
							<div className="flex items-center gap-2">
								<CheckCircle className="w-4 h-4 text-green-300" />
								<span>Capacitación incluida</span>
							</div>
							<div className="flex items-center gap-2">
								<CheckCircle className="w-4 h-4 text-green-300" />
								<span>Sistema de gestión completo</span>
							</div>
							<div className="flex items-center gap-2">
								<CheckCircle className="w-4 h-4 text-green-300" />
								<span>Ingresos extra garantizados</span>
							</div>
						</div>
					</div>
					<Button 
						onClick={handleBetaClick}
						variant="secondary"
						size="lg"
						className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg rounded-xl shadow-lg"
					>
						<Zap className="w-5 h-5 mr-2" />
						Unirme al programa beta
					</Button>
					<p className="text-sm opacity-75 mt-4">
						Solo {cuposDisponibles} cupos disponibles para instructores
					</p>
				</div>
			</section>

			{/* Footer */}
			<footer className="py-8 bg-foreground text-background">
				<div className="container px-4 md:px-6 mx-auto text-center">
					<div className="flex items-center justify-center mb-4">
						<img src="/onlydance.png" alt="OnlyDance Logo" className="w-8 h-8 mr-3" />
						<h3 className="text-headline-small font-semibold">OnlyDance</h3>
					</div>
					<p className="text-body-medium text-muted-foreground mb-4">
						Donde el aprendizaje se convierte en experiencia real.
					</p>
					<div className="flex items-center justify-center gap-2 text-body-small text-muted-foreground">
						<MapPin className="w-4 h-4" />
						<span>Medellín, Colombia</span>
						<span>•</span>
						<span>Cupos beta limitados</span>
					</div>
				</div>
			</footer>
			
			{/* Floating Chat */}
			<FloatingChat />
		</div>
	);
};

export default Index; 