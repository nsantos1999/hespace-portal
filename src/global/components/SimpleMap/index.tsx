import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ?? '';

interface SimpleMapProps {
  latitude: number;
  longitude: number;
}

export function SimpleMap({ latitude, longitude }: SimpleMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inicialize o mapa
    const map = new mapboxgl.Map({
      container: mapContainer.current ?? '', // Referência ao container
      style: 'mapbox://styles/mapbox/streets-v11', // Estilo do mapa
      center: [latitude, longitude], // Coordenadas iniciais (exemplo: NYC)
      zoom: 13,
    });

    // Adicione um único marcador fixo
    new mapboxgl.Marker()
      .setLngLat([latitude, longitude]) // Posição do marcador
      .addTo(map);

    return () => map.remove(); // Remove o mapa ao desmontar o componente
  }, []);

  return (
    <div
      ref={mapContainer}
      style={{
        width: '100%', // Largura do mapa
        height: '100%', // Altura do mapa
      }}
    />
  );
}
