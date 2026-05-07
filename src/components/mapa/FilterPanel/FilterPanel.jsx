import { FilterButton } from './FilterButton'
import { PIN_CONFIG } from '../utils/markerConfig'
import { useState } from 'react'

export function FilterPanel({ filtrosAtivos, toggleFiltro, stats }) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			{/* MOBILE TOGGLE */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="md:hidden absolute top-4 left-4 z-[50] bg-gradient-to-br from-[#22c55e] to-[#16a34a] text-white px-4 py-2 rounded-xl font-bold shadow-lg flex items-center gap-2 border-none cursor-pointer"
			>
				Filtros {isOpen ? '▲' : '▼'}
			</button>

			{/* PANEL */}
			<div
				className={`absolute top-[60px] md:top-4 left-4 z-[50] bg-[rgba(10,20,10,0.92)] backdrop-blur-md border border-[rgba(34,197,94,0.2)] rounded-xl p-3 flex flex-col gap-1 min-w-[180px] shadow-xl transition-all md:flex ${isOpen ? 'flex' : 'hidden'}`}
			>
				<div className="text-xs font-bold text-[rgba(134,239,172,0.6)] uppercase tracking-wider mb-2 px-2">
					Filtrar Mapa
				</div>
				{Object.entries(PIN_CONFIG).map(([tipo, config]) => (
					<FilterButton
						key={tipo}
						tipo={tipo}
						config={config}
						ativo={filtrosAtivos[tipo]}
						onClick={toggleFiltro}
						count={stats[tipo]}
					/>
				))}
			</div>
		</>
	)
}
