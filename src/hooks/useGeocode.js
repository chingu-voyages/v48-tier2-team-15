import { useState } from "react";

export const useGeocode = () => {
  const [coordinates, setCoordinates] = useState({}); // Initialize coordinates state to an empty object

  const geocodeAddresses = async (addresses) => {
    const geocodedCoordinates = [];

    // Loop through each address
    for (const address of addresses) {
      // Check if coordinates are already cached for the current address
      if (coordinates[address]) {
        geocodedCoordinates.push(coordinates[address]);
      } else {
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          address
        )}&key=${import.meta.env.VITE_GOOGLE_GEOCODE_API_DEV}`;

        const res = await fetch(url);
        const data = await res.json();

        // Check if the response is successful
        if (data.status === "OK") {
          const location = data.results[0].geometry.location;
          const lat = location.lat;
          const lng = location.lng;

          const coords = { lat, lng };

          // Store the coordinates in the state
          setCoordinates((prevCoordinates) => ({
            ...prevCoordinates,
            [address]: coords,
          }));

          geocodedCoordinates.push(coords);
        } else {
          console.error(`Error in geocoding address: ${address}`);
          geocodedCoordinates.push(null);
        }
      }
    }

    return geocodedCoordinates;
  };

  return [coordinates, geocodeAddresses];
};
