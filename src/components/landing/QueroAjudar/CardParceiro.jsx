import { Card } from '../../common'
import { WHATSAPP_NUMBER } from '../../../utils/constants'

export function CardParceiro() {
	return (
		<Card className="flex flex-col h-full">
			<div className="text-3xl mb-4">🏢</div>
			<h3 className="text-2xl font-bold mb-4 text-[#f0fdf4]">Ser Parceiro</h3>
			<p className="text-sm text-[rgba(134,239,172,0.7)] mb-8">
				Instituições, ONGs e empresas que desejam apoiar tecnicamente ou com recursos para as ações de limpeza.
			</p>

			<div className="mt-auto space-y-4">
				<div className="p-4 bg-[rgba(34,197,94,0.05)] border border-dashed border-[rgba(34,197,94,0.3)] rounded-xl">
					<h4 className="text-xs font-bold text-[#22c55e] uppercase mb-2">Benefícios da parceria:</h4>
					<ul className="text-xs text-[rgba(134,239,172,0.6)] space-y-2">
						<li>• Visibilidade no mapa e landing page</li>
						<li>• Relatórios de impacto ambiental</li>
						<li>• Conexão direta com a comunidade</li>
					</ul>
				</div>
				<a
					href={`https://wa.me/${WHATSAPP_NUMBER}`}
					target="_blank"
					rel="noreferrer"
					className="block w-full text-center bg-transparent border border-[#22c55e] text-[#22c55e] font-extrabold py-3 rounded-lg hover:bg-[rgba(34,197,94,0.05)] transition-all no-underline"
				>
					Falar no WhatsApp
				</a>
			</div>
		</Card>
	)
}
