import { FormularioVoluntario } from './FormularioVoluntario'
import { CardParceiro } from './CardParceiro'

export function QueroAjudar() {
	return (
		<section id="ajude" className="relative py-24 bg-[#050a05] overflow-hidden">
			{/* Gradiente sutil */}
			<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#22c55e] opacity-[0.05] blur-[120px] rounded-full translate-x-1/2 translate-y-1/2"></div>

			<div className="container mx-auto px-6 relative z-10">
				<div className="max-w-3xl mx-auto text-center mb-16">
					<h2 className="text-3xl md:text-5xl font-extrabold mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
						Quero <span className="text-[#22c55e]">Ajudar</span>
					</h2>
					<p className="text-[rgba(134,239,172,0.6)] text-lg">
						O Conquista Limpa é um projeto de extensão universitária em constante crescimento.
						Sua participação é fundamental para transformarmos Vitória da Conquista.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8">
					<FormularioVoluntario />
					<CardParceiro />
				</div>
			</div>
		</section>
	)
}
