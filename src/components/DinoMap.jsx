import React, {useCallback, useState} from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
  
const DinoMap = ({markers}) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_DEV
      })

      const [dinoMap, setMap] = useState(null)

      const center = {
        lat:  0,
        lng: 0
      };
    
      const containerStyle = {
        width: '80%',
        margin: 'auto',
        height: '400px'
      };
          
      const onLoad = useCallback(function callback(dinoMap) {    
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
            zoom={1}
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