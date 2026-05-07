import { PIN_CONFIG } from '../utils/markerConfig'
import { Badge } from '../../common'

export function FilterButton({ tipo, config, ativo, onClick, count }) {
	return (
		<button
			onClick={() => onClick(tipo)}
			className={`flex items-center justify-between w-full p-2 rounded-lg transition-all cursor-pointer border ${ativo ? 'bg-[rgba(34,197,94,0.1)] border-[rgba(34,197,94,0.3)]' : 'bg-transparent border-transparent opacity-50 hover:opacity-100 hover:bg-[rgba(34,197,94,0.05)]'}`}
		>
			<div className="flex items-center gap-2">
				<div
					className="w-[10px] h-[10px] rounded-[50%_50%_50%_0] transform -rotate-45"
					style={{ backgroundColor: config.color }}
				/>
				<span className="text-xs text-[#e8f5e8] font-medium">{config.label}</span>
			</div>
			{count !== undefined && (
				<Badge colorHex={config.color}>{count}</Badge>
			)}
		</button>
	)
}
