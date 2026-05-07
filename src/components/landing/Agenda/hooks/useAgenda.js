import { useState, useMemo } from 'react'
import { AGENDA_EVENTOS_MOCK } from '../../../../mocks/agenda.mock'

export function useAgenda() {
	const [eventos] = useState(AGENDA_EVENTOS_MOCK)
	const [filtro, setFiltro] = useState('')

	const eventosFiltrados = useMemo(() => {
		return eventos.filter(e => !filtro || e.tipo === filtro)
	}, [eventos, filtro])

	return { eventos: eventosFiltrados, filtro, setFiltro, todos: eventos }
}
