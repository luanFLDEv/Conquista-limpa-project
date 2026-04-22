import { useState } from 'react'
import { PIN_CONFIG } from '../data/pins'

export default function FilterPanel({ filterActive, toggleFilter, counts }) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			{/* BOTÃO (fica sempre visível no mobile) */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="absolute top-4 left-4 z-50 bg-green-600 text-white px-3 py-2 rounded-lg md:hidden"
			>
				Filtros {isOpen ? ' ▲ ' : ' ▼ '}
			</button>

			{/* PAINEL */}
			<div
				className={`
				absolute top-16 left-4 z-50
				bg-[rgba(10,20,10,0.92)] backdrop-blur-md
				border border-green-500/20 rounded-xl p-3 flex flex-col gap-2 min-w-[170px]
				${isOpen ? 'flex' : 'hidden'} md:flex
				`}
			>
				<div className="text-[10px] font-bold text-green-200/60 tracking-wider mb-1">
					FILTRAR PONTOS
				</div>

				{Object.entries(PIN_CONFIG).map(([type, cfg]) => (
					<button
						key={type}
						onClick={() => toggleFilter(type)}
						className={`
						flex items-center gap-2 px-2 py-1 rounded-lg transition
						${
							filterActive[type]
								? 'bg-green-500/10 border border-green-500/30 opacity-100'
								: 'opacity-40'
						}
						`}
					>
						<div
							className="w-[10px] h-[10px] rounded-[50%_50%_50%_0] rotate-[-45deg]"
							style={{ background: cfg.color }}
						/>

						<span className="text-xs text-white flex-1 text-left">
							{cfg.label}
						</span>

						<span
							className="text-[11px] font-semibold rounded-full px-2"
							style={{
								color: cfg.color,
								background: `${cfg.color}22`
							}}
						>
							{counts[type]}
						</span>
					</button>
				))}
			</div>
		</>
	)
}
