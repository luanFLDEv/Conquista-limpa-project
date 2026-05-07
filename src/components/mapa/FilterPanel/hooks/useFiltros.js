import { useState } from 'react'
import { PIN_CONFIG } from '../../utils/markerConfig'

export function useFiltros() {
	// Inicializa todos os tipos de filtro como ativos (true)
	const initialFilters = Object.keys(PIN_CONFIG).reduce((acc, key) => {
		acc[key] = true
		return acc
	}, {})

	const [filtrosAtivos, setFiltrosAtivos] = useState(initialFilters)

	const toggleFiltro = (tipo) => {
		setFiltrosAtivos(prev => ({
			...prev,
			[tipo]: !prev[tipo]
		}))
	}

	return { filtrosAtivos, toggleFiltro }
}
