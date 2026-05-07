import { PIN_CONFIG } from '../utils/markerConfig'

export function StatItem({ tipo, count, isLast }) {
	const config = PIN_CONFIG[tipo]
	if (!config) return null

	return (
		<div className={`flex items-center gap-1.5 px-4 py-1 ${!isLast ? 'border-r border-[rgba(34,197,94,0.15)]' : ''}`}>
			<span
				className="w-2 h-2 rounded-full"
				style={{ backgroundColor: config.color }}
			/>
			<span className="text-[11px] text-[#e8f5e8] font-medium hidden sm:inline">{config.label}:</span>
			<span className="text-xs font-bold" style={{ color: config.color }}>{count}</span>
		</div>
	)
}
