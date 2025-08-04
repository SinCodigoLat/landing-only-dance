import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, X, Send } from 'lucide-react';

const FloatingChat = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [message, setMessage] = useState('');

	const handleSendMessage = () => {
		if (message.trim()) {
			const whatsappMessage = encodeURIComponent(message);
			window.open(`https://wa.me/18437761052?text=${whatsappMessage}`, '_blank');
			setMessage('');
			setIsOpen(false);
		}
	};

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			handleSendMessage();
		}
	};

	return (
		<div className="fixed bottom-4 right-4 z-50">
			{isOpen ? (
				<Card className="w-80 shadow-2xl">
					<CardHeader className="pb-3">
						<div className="flex items-center justify-between">
							<CardTitle className="text-lg flex items-center gap-2">
								<MessageCircle className="w-5 h-5 text-primary" />
								OnlyDance Chat
							</CardTitle>
							<Button
								variant="ghost"
								size="sm"
								onClick={() => setIsOpen(false)}
								className="h-8 w-8 p-0"
							>
								<X className="w-4 h-4" />
							</Button>
						</div>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="bg-gray-50 p-3 rounded-lg">
							<p className="text-sm text-gray-600">
								¡Hola! ¿Tienes alguna pregunta sobre OnlyDance? Estoy aquí para ayudarte.
							</p>
						</div>
						<div className="flex gap-2">
							<input
								type="text"
								placeholder="Escribe tu mensaje..."
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								onKeyPress={handleKeyPress}
								className="flex-1 px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
							/>
							<Button
								onClick={handleSendMessage}
								size="sm"
								className="bg-primary hover:bg-primary-600"
							>
								<Send className="w-4 h-4" />
							</Button>
						</div>
					</CardContent>
				</Card>
			) : (
				<Button
					onClick={() => {
						const defaultMessage = encodeURIComponent('Hola, quiero unirme a OnlyDance beta. Soy un instructor.');
						window.open(`https://wa.me/18437761052?text=${defaultMessage}`, '_blank');
					}}
					className="w-14 h-14 rounded-full onlydance-gradient hover:bg-primary-600 shadow-lg"
				>
					<MessageCircle className="w-6 h-6 text-white" />
				</Button>
			)}
		</div>
	);
};

export default FloatingChat; 