import { StatItem } from './StatItem'

export function StatsBar({ stats }) {
	const entries = Object.entries(stats)

	return (
		<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-[50] bg-[rgba(10,20,10,0.92)] backdrop-blur-md border border-[rgba(34,197,94,0.15)] rounded-full px-2 py-1 shadow-lg flex items-center whitespace-nowrap overflow-x-auto max-w-[90vw] md:max-w-none">
			{entries.map(([tipo, count], index) => (
				<StatItem
					key={tipo}
					tipo={tipo}
					count={count}
					isLast={index === entries.length - 1}
				/>
			))}
		</div>
	)
}
