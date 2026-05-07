export const DESIGN_COLORS = {
	primary: {
		recycle: '#22c55e', // rgb(34, 197, 94)
		descarte: '#3b82f6', // rgb(59, 130, 246)
		esgoto: '#f59e0b', // rgb(245, 158, 11)
		denuncia: '#ef4444', // rgb(239, 68, 68)
		ong: '#a020f0' // rgb(160, 32, 240)
	},
	background: {
		dark: '#050a05',
		darkSecondary: '#0a140a',
		overlay: 'rgba(10, 20, 10, 0.92)',
		overlayFooter: 'rgba(5, 10, 5, 0.98)'
	},
	text: {
		primary: 'rgb(232, 245, 232)',
		secondary: 'rgba(134, 239, 172, 0.6)'
	},
	border: {
		subtle: 'rgba(34, 197, 94, 0.15)',
		moderate: 'rgba(34, 197, 94, 0.3)'
	}
}

/**
 * Retorna a cor primária correspondente ao tipo de marcador/evento.
 * @param {string} tipo - Tipo (recycle, descarte, esgoto, denuncia, ong, mutirão, palestra, coleta)
 * @returns {string} Código de cor hex
 */
export function getTipoColor(tipo) {
	const map = {
		recycle: DESIGN_COLORS.primary.recycle,
		descarte: DESIGN_COLORS.primary.descarte,
		esgoto: DESIGN_COLORS.primary.esgoto,
		denuncia: DESIGN_COLORS.primary.denuncia,
		ong: DESIGN_COLORS.primary.ong,
		// Mapeamento para os tipos de agenda se baseando nas cores dos mocks
		'mutirão': DESIGN_COLORS.primary.recycle,
		palestra: DESIGN_COLORS.primary.descarte,
		coleta: DESIGN_COLORS.primary.esgoto
	}
	return map[tipo] || DESIGN_COLORS.primary.descarte
}
