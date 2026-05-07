import { DESIGN_COLORS } from '../../../utils/colors'

export const MAP_CONFIG = {
	center: [-14.865, -40.844],
	zoom: 14,
	tileLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
	attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}

export const PIN_CONFIG = {
	recycle: {
		color: DESIGN_COLORS.primary.recycle,
		bg: '#dcfce7',
		text: '#15803d',
		label: 'Reciclagem',
		emoji: '♻️'
	},
	descarte: {
		color: DESIGN_COLORS.primary.descarte,
		bg: '#dbeafe',
		text: '#1d4ed8',
		label: 'Descarte',
		emoji: '🗑️'
	},
	esgoto: {
		color: DESIGN_COLORS.primary.esgoto,
		bg: '#fef3c7',
		text: '#b45309',
		label: 'Esgoto',
		emoji: '⚠️'
	},
	denuncia: {
		color: DESIGN_COLORS.primary.denuncia,
		bg: '#fee2e2',
		text: '#b91c1c',
		label: 'Denúncia',
		emoji: '📍'
	},
	ong: {
		color: DESIGN_COLORS.primary.ong,
		bg: '#f3e8ff',
		text: '#7e22ce',
		label: 'ONGs',
		emoji: '🫂'
	}
}

export const STATUS_STYLE = {
	verificado: { bg: '#dcfce7', color: '#15803d', dot: '#22c55e' },
	'em análise': { bg: '#fef3c7', color: '#b45309', dot: '#f59e0b' },
	triagem: { bg: '#fee2e2', color: '#b91c1c', dot: '#ef4444' }
}
