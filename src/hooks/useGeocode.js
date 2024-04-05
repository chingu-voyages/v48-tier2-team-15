import { useState } from 'react';

// custom hook to return Geocode information for a given place
export const useGeocode = () => {
  const [coordinates, setCoordinates] = useState(null);

  const geocodeAddress = async (address) => {
    
    // TODO: Figure out if this is correct way to use Geocoder (??...may not be)
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: address }, (results, status) => {
      if (status === 'OK' && results.length > 0) {
        const { lat, lng } = results[0].geometry.location;
        setCoordinates({ lat: lat(), lng: lng() });
      } else {
        console.log('Geocode was not successful for the following reason:', status);
      }
    });
};

  return [coordinates, geocodeAddress];
}
