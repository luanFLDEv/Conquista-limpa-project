import { PIN_CONFIG } from './mapa/utils/markerConfig'

export default function PinPopup({ selectedPin, onClose }) {
	const cfg = PIN_CONFIG[selectedPin.tipo]

	return (
		<div
			className="absolute bottom-24 left-1/2 -translate-x-1/2 z-50 w-[280px] rounded-2xl overflow-hidden"
			style={{
				background: 'rgba(10,20,10,0.96)',
				border: `1px solid ${cfg?.color || '#fff'}44`,
				boxShadow: `0 4px 24px ${cfg?.color || '#fff'}22`
			}}
		>
			<button
				onClick={onClose}
				className="absolute top-2 right-3 bg-transparent border-none text-[rgba(134,239,172,0.5)] text-lg cursor-pointer z-10"
			>
				×
			</button>

			{selectedPin.imagem && (
				<img
					src={selectedPin.imagem}
					alt={selectedPin.titulo}
					className="w-full h-[140px] object-cover"
				/>
			)}

			<div className="p-4">
				<div className="flex items-center gap-2 mb-2">
					<span className="text-sm font-bold text-[#f0fdf4]">
						{selectedPin.titulo}
					</span>
					{cfg && (
						<span
							className="text-[10px] px-2 py-0.5 rounded-full"
							style={{ background: cfg.bg, color: cfg.text }}
						>
							{cfg.label}
						</span>
					)}
				</div>
				<p className="text-xs text-[rgba(134,239,172,0.75)] leading-relaxed">
					{selectedPin.descricao}
				</p>
			</div>
		</div>
	)
}
