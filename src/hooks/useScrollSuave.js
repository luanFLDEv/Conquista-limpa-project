import { useCallback } from 'react'

/**
 * Hook para adicionar comportamento de scroll suave a links âncora
 * @returns {function} Função de callback para o evento onClick de links âncora
 */
export function useScrollSuave() {
	const scrollSuave = useCallback((e, id) => {
		e.preventDefault()
		const target = document.getElementById(id)
		if (target) {
			target.scrollIntoView({ behavior: 'smooth' })
		}
	}, [])

	return scrollSuave
}
