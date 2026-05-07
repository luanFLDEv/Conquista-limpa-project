import { Card } from '../../common'

/**
 * Card individual de material reciclável
 */
export function MaterialCard({ material }) {
	const { nome, icone, cor, hexColor, exemplos, naoReciclar } = material

	return (
		<Card className={`border-${cor}-500/30`} style={{ borderColor: `${hexColor}4D` }}>
			<div className="text-4xl mb-4">{icone}</div>
			<h3 className="text-xl font-bold mb-4" style={{ color: hexColor }}>
				{nome}
			</h3>

			<div className="space-y-4">
				<div>
					<h4 className="text-[10px] uppercase tracking-widest text-[rgba(134,239,172,0.4)] font-bold mb-2">
						Pode reciclar
					</h4>
					<ul className="text-sm text-[rgba(232,245,232,0.8)] list-none p-0 space-y-1">
						{exemplos.map((item, idx) => (
							<li key={idx} className="flex items-center gap-2">
								<span className="w-1 h-1 rounded-full bg-green-500"></span>
								{item}
							</li>
						))}
					</ul>
				</div>
				<div>
					<h4 className="text-[10px] uppercase tracking-widest text-[rgba(239,68,68,0.4)] font-bold mb-2">
						Não deve
					</h4>
					<ul className="text-sm text-[rgba(239,68,68,0.6)] list-none p-0 space-y-1">
						{naoReciclar.map((item, idx) => (
							<li key={idx} className="flex items-center gap-2">
								<span className="w-1 h-1 rounded-full bg-red-500"></span>
								{item}
							</li>
						))}
					</ul>
				</div>
			</div>
		</Card>
	)
}
