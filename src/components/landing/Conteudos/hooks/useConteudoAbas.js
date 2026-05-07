import { useState } from 'react'

export function useConteudoAbas() {
	const abas = [
		{ id: 'videos', label: 'Vídeos', icone: '📹' },
		{ id: 'artigos', label: 'Artigos', icone: '📚' },
		{ id: 'cartilhas', label: 'Cartilhas', icone: '📖' }
	]
	const [abaAtiva, setAbaAtiva] = useState(abas[0].id)

	return { abas, abaAtiva, setAbaAtiva }
}
