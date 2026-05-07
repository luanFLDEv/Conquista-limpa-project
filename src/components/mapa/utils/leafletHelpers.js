/**
 * Cria o HTML para o ícone do marcador Leaflet
 * @param {Object} cfg - Configuração do pino (cor, emoji)
 * @returns {string} String HTML
 */
export function createMarkerIconHtml(cfg) {
	return `
		<div style="
			width:36px;height:36px;
			background:${cfg.color};
			border-radius:50% 50% 50% 0;
			transform:rotate(-45deg);
			border:3px solid white;
			box-shadow:0 2px 8px rgba(0,0,0,0.25);
			display:flex;align-items:center;justify-content:center;
			cursor:pointer;
		">
			<span style="transform:rotate(45deg);font-size:14px;">${cfg.emoji}</span>
		</div>`
}
