import { useRef, useState, useEffect } from 'react'
import { useMapLogica } from './hooks/useMapLogica'
import { useMarkers } from './hooks/useMarkers'
import { MAP_CONFIG } from '../utils/markerConfig'
import { FilterPanel } from '../FilterPanel/FilterPanel'
import { StatsBar } from '../StatsBar/StatsBar'
import { BotaoDenuncia } from '../BotaoDenuncia/BotaoDenuncia'
import PinPopup from '../../PinPopup'

export function MapContainer() {
	const mapContainerRef = useRef(null)
	const leafletMapRef = useRef(null)
	const [mapReady, setMapReady] = useState(false)

	const {
		markers,
		filtrosAtivos,
		toggleFiltro,
		stats,
		selectedPin,
		setSelectedPin
	} = useMapLogica()

	// Initialize Leaflet
	useEffect(() => {
		if (mapReady || leafletMapRef.current) return

		const linkCSS = document.createElement('link')
		linkCSS.rel = 'stylesheet'
		linkCSS.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
		document.head.appendChild(linkCSS)

		const script = document.createElement('script')
		script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
		script.onload = () => {
			const L = window.L
			const map = L.map(mapContainerRef.current, {
				center: MAP_CONFIG.center,
				zoom: MAP_CONFIG.zoom,
				zoomControl: false
			})

			L.tileLayer(MAP_CONFIG.tileLayer, {
				attribution: MAP_CONFIG.attribution,
				maxZoom: 19
			}).addTo(map)

			L.control.zoom({ position: 'bottomright' }).addTo(map)

			leafletMapRef.current = map
			setMapReady(true)
		}
		document.head.appendChild(script)
	}, [])

	// Use markers hook to handle map updates
	useMarkers(leafletMapRef, mapReady, markers, setSelectedPin)

	return (
		<div className="flex-1 relative overflow-hidden bg-[#0f1a0f] text-[#e8f5e8] h-[calc(100vh-60px)]">
			{/* Leaflet map container */}
			<div
				ref={mapContainerRef}
				className="w-full h-full z-[1]"
			/>

			{!mapReady && (
				<div className="absolute inset-0 bg-[#0f1a0f] flex flex-col items-center justify-center gap-3 z-[10]">
					<div className="text-4xl">🌿</div>
					<div className="text-[#22c55e] font-bold text-sm">Carregando mapa...</div>
				</div>
			)}

			<FilterPanel
				filtrosAtivos={filtrosAtivos}
				toggleFiltro={toggleFiltro}
				stats={stats}
			/>

			{selectedPin && (
				<PinPopup
					selectedPin={selectedPin}
					onClose={() => setSelectedPin(null)}
				/>
			)}

			<StatsBar stats={stats} />
			<BotaoDenuncia />
		</div>
	)
}
