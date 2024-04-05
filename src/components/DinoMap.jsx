import React, { useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const DinoMap = ({ markers }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_DEV,
  });

  const [dinoMap, setMap] = useState(null);

  const center = {
    lat: 0,
    lng: 0,
  };

  const containerStyle = {
    width: "100%",
    margin: "auto",
    height: "500px",
  };

  const onLoad = useCallback(function callback(dinoMap) {
    setMap(dinoMap);
  }, []);

  const onUnmount = useCallback(function callback(dinoMap) {
    setMap(null);
  }, []);

  // if map is loaded, display it with passed-in markers prop
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={1}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {markers &&
        markers.map((marker, index) => (
          <Marker key={index} position={marker} label={marker.label} />
        ))}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default DinoMap;
