import { Link } from 'react-router-dom'
import { Button } from '../../common'

export function Hero() {
	return (
		<section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#050a05] py-20">
			{/* Textura/Gradiente de fundo */}
			<div className="absolute inset-0 z-0">
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#22c55e] opacity-[0.07] blur-[120px] rounded-full"></div>
			</div>

			<div className="container mx-auto px-6 relative z-10 text-center">
				<h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight max-w-4xl mx-auto" style={{ fontFamily: 'Syne, sans-serif' }}>
					Vitória da Conquista mais <span className="text-[#22c55e]">limpa</span>, começa com você
				</h1>
				<p className="text-[rgba(134,239,172,0.6)] text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium">
					Uma iniciativa estudantil de extensão para mapeamento colaborativo de descarte correto, reciclagem e monitoramento ambiental.
				</p>

				<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
					<Link to="/mapa" className="w-full sm:w-auto no-underline">
						<Button variant="primary" size="lg" className="w-full sm:w-auto">
							Ver o Mapa
						</Button>
					</Link>
					<Button
						variant="secondary"
						size="lg"
						className="w-full sm:w-auto"
						onClick={() => {
							const element = document.getElementById('guia')
							if (element) {
								element.scrollIntoView({ behavior: 'smooth' })
							}
						}}
					>
						Saiba mais
					</Button>
				</div>
			</div>
		</section>
	)
}
