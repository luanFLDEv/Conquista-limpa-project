import { MaterialCard } from './MaterialCard'
import { GUIA_RECICLAGEM_MOCK } from '../../../mocks/guiaReciclagem.mock'

export function GuiaReciclagem() {
	return (
		<section id="guia" className="py-24 bg-[#0a140a]">
			<div className="container mx-auto px-6">
				<h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16" style={{ fontFamily: 'Syne, sans-serif' }}>
					Guia de <span className="text-[#22c55e]">Reciclagem</span>
				</h2>

				<div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
					{GUIA_RECICLAGEM_MOCK.map((material) => (
						<MaterialCard key={material.id} material={material} />
					))}
				</div>
			</div>
		</section>
	)
}
