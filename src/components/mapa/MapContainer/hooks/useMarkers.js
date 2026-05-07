import { useEffect, useRef, useState } from 'react'
import { MAP_CONFIG, PIN_CONFIG } from '../../utils/markerConfig'
import { createMarkerIconHtml } from '../../utils/leafletHelpers'

export function useMarkers(mapRef, mapReady, markersData, setSelectedPin) {
	const markersLayerRef = useRef([])

	useEffect(() => {
		if (!mapReady || !mapRef.current) return
		const L = window.L
		const map = mapRef.current

		// Clear existing markers
		markersLayerRef.current.forEach(m => map.removeLayer(m))
		markersLayerRef.current = []

		// Add new markers
		markersData.forEach(pin => {
			const cfg = PIN_CONFIG[pin.tipo]
			if (!cfg) return

			const iconHtml = createMarkerIconHtml(cfg)

			const icon = L.divIcon({
				html: iconHtml,
				className: '',
				iconSize: [36, 36],
				iconAnchor: [18, 36]
			})
			const marker = L.marker([pin.lat, pin.lng], { icon })
			marker.on('click', () => setSelectedPin(pin))
			marker.addTo(map)
			markersLayerRef.current.push(marker)
		})
	}, [mapReady, markersData, mapRef, setSelectedPin])
}
