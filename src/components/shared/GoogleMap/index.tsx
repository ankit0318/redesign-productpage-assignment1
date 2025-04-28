import { useState, useCallback, memo } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import { FiMapPin } from 'react-icons/fi'

interface MapProps {
    center: {
        lat: number
        lng: number
    }
    zoom?: number
    markerLabel?: string
    apiKey?: string
}

// Set container styles here
const containerStyle = {
    width: '100%',
    height: '100%',
}

// This is a fallback component that looks like a map
const MapFallback = ({
    address = 'New Delhi, India',
}: {
    address?: string
}) => (
    <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center">
        <div className="text-blue-600 mb-3">
            <FiMapPin className="w-10 h-10" />
        </div>
        <p className="text-gray-600 font-medium text-xl">{address}</p>
        <p className="text-gray-400 text-sm mt-2">
            Map visualization unavailable
        </p>
    </div>
)

const GoogleMapComponent = ({
    center,
    zoom = 15,
    markerLabel,
    apiKey,
}: MapProps) => {
    // Use the environment variable by default, fall back to the prop if provided
    const mapsApiKey = apiKey || import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''

    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: mapsApiKey,
    })

    const [map, setMap] = useState<google.maps.Map | null>(null)

    const onLoad = useCallback((map: google.maps.Map) => {
        setMap(map)
    }, [])

    const onUnmount = useCallback(() => {
        setMap(null)
    }, [])

    // If there's an error loading the map, show the fallback
    if (loadError) {
        return <MapFallback />
    }

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={zoom}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{
                disableDefaultUI: false,
                zoomControl: true,
                streetViewControl: false,
                fullscreenControl: true,
            }}
        >
            {/* Marker for the office location */}
            <Marker
                position={center}
                label={markerLabel}
                icon={{
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 10,
                    fillColor: '#3B82F6', // Blue color
                    fillOpacity: 1,
                    strokeColor: '#ffffff',
                    strokeWeight: 2,
                }}
            />
        </GoogleMap>
    ) : (
        // Show a loading state that looks decent while the map loads
        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <div className="animate-pulse flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-blue-200"></div>
                <div className="h-2 w-24 bg-blue-200 rounded mt-4"></div>
            </div>
        </div>
    )
}

export default memo(GoogleMapComponent)
