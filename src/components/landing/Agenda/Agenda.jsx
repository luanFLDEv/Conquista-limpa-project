import { EventCard } from './EventCard'
import { useAgenda } from './hooks/useAgenda'
import { Button } from '../../common'
import { TIPOS_EVENTO } from '../../../mocks/agenda.mock'

export function Agenda() {
	const { eventos, filtro, setFiltro } = useAgenda()

	return (
		<section id="agenda" className="py-24 bg-[#050a05]">
			<div className="container mx-auto px-6">
				<h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16" style={{ fontFamily: 'Syne, sans-serif' }}>
					Agenda de <span className="text-[#22c55e]">Eventos</span>
				</h2>

				<div className="max-w-4xl mx-auto mb-8 flex flex-wrap justify-center gap-2">
					<Button
						variant={filtro === '' ? 'primary' : 'secondary'}
						size="sm"
						onClick={() => setFiltro('')}
					>
						Todos
					</Button>
					{TIPOS_EVENTO.map(tipo => (
						<Button
							key={tipo}
							variant={filtro === tipo ? 'primary' : 'secondary'}
							size="sm"
							onClick={() => setFiltro(filtro === tipo ? '' : tipo)}
						>
							{tipo.charAt(0).toUpperCase() + tipo.slice(1)}
						</Button>
					))}
				</div>

				<div className="max-w-4xl mx-auto space-y-6">
					{eventos.length > 0 ? (
						eventos.map((evento) => (
							<EventCard key={evento.id} evento={evento} />
						))
					) : (
						<div className="text-center text-[rgba(134,239,172,0.6)] py-8">
							Nenhum evento encontrado para esta categoria.
						</div>
					)}
				</div>
			</div>
		</section>
	)
}
