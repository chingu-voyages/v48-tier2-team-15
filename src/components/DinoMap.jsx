import React, {useCallback, useState} from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '80%',
    margin: 'auto',
    height: '400px'
  };
  
  const center = {
    lat: 56.1304,
    lng: 106.3468
  };
  
const DinoMap = ({markers}) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_DEV
      })

      const [dinoMap, setMap] = useState(null)

      const onLoad = useCallback(function callback(dinoMap) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        dinoMap.fitBounds(bounds);
    
        setMap(dinoMap)
      }, [])
    
      const onUnmount = useCallback(function callback(dinoMap) {
        setMap(null)
      }, [])
    
      console.log(markers)
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={3}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            {markers && markers.map((marker, index) => (
            <Marker key={index} position={marker} label={marker.label} />
            ))}
        </GoogleMap>
    ) : <></>
}

export default DinoMap;