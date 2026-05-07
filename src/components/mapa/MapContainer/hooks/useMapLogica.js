import { useState, useMemo } from 'react'
import { MARKERS_MOCK } from '../../../../mocks/mapa.mock'
import { useFiltros } from '../../FilterPanel/hooks/useFiltros'
import { PIN_CONFIG } from '../../utils/markerConfig'

export function useMapLogica() {
	const [markersData] = useState(MARKERS_MOCK)
	const { filtrosAtivos, toggleFiltro } = useFiltros()
	const [selectedPin, setSelectedPin] = useState(null)

	// Filtra os markers com base no estado dos filtros
	const markersFiltrados = useMemo(() => {
		return markersData.filter(m => filtrosAtivos[m.tipo])
	}, [markersData, filtrosAtivos])

	// Calcula estatísticas para a StatsBar
	const stats = useMemo(() => {
		const counts = {}
		Object.keys(PIN_CONFIG).forEach(tipo => {
			counts[tipo] = markersData.filter(m => m.tipo === tipo).length
		})
		return counts
	}, [markersData])

	return {
		markers: markersFiltrados,
		filtrosAtivos,
		toggleFiltro,
		stats,
		selectedPin,
		setSelectedPin
	}
}
