import React, {useCallback, useState} from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
  
const DinoMap = ({markers}) => {

    // function from @react-google-maps/api package. Pass in API key from .env file
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_DEV
      })

    const [dinoMap, setMap] = useState(null)

    // set the initial center of map  
    const center = {
    lat:  0,
    lng: 0
    };

    // set map container style
    const containerStyle = {
    width: '80%',
    margin: 'auto',
    height: '400px'
    };
        
    // what to do when map obj has loaded
    const onLoad = useCallback(function callback(dinoMap) {    
    setMap(dinoMap)
    }, [])

    const onUnmount = useCallback(function callback(dinoMap) {
    setMap(null)
    }, [])

    // if map is loaded, display it with passed-in markers prop
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