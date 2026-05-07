import { getTipoColor } from '../../../utils/colors'

/**
 * Card individual de evento
 */
export function EventCard({ evento }) {
	const { titulo, tipo, data, local, descricao } = evento
	const color = getTipoColor(tipo)

	const dia = String(data.getDate()).padStart(2, '0')
	const mes = data.toLocaleString('pt-BR', { month: 'short' }).toUpperCase().replace('.', '')

	return (
		<div className="bg-[rgba(10,20,10,0.7)] border border-[rgba(34,197,94,0.15)] rounded-2xl overflow-hidden flex flex-col md:flex-row transition-all hover:border-[rgba(34,197,94,0.3)]">
			{/* DATA COL */}
			<div className="bg-[rgba(34,197,94,0.05)] p-6 md:w-32 flex md:flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-[rgba(34,197,94,0.15)]">
				<span className="text-3xl font-extrabold text-[#22c55e] block leading-none">{dia}</span>
				<span className="text-sm font-bold text-[rgba(134,239,172,0.6)] ml-2 md:ml-0 md:mt-1">{mes}</span>
			</div>

			{/* CONTENT COL */}
			<div className="p-6 flex-grow">
				<div className="flex flex-wrap items-center gap-3 mb-3">
					<span
						className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md"
						style={{ backgroundColor: `${color}20`, color: color }}
					>
						{tipo}
					</span>
					<span className="text-xs text-[rgba(134,239,172,0.5)] flex items-center gap-1">
						📍 {local}
					</span>
				</div>
				<h3 className="text-xl font-bold mb-2 text-[#f0fdf4]">{titulo}</h3>
				<p className="text-sm text-[rgba(134,239,172,0.7)] mb-4">{descricao}</p>
				<button className="bg-transparent border-none text-[#22c55e] font-bold text-sm cursor-pointer hover:underline p-0">
					Saiba mais →
				</button>
			</div>
		</div>
	)
}
