import React, {useEffect, useState} from "react";
import axios from "axios";

function APIpostcode ({searchLocation, setCoordinatesCallback}) {
  // Define two state variables: coordinates and debouncedLocation
  const [coordinates, setCoordinates] = useState ({lat: null, lon: null})
  const [debouncedLocation, setDebouncedLocation] = useState (searchLocation)

  // useEffect hook to update debouncedLocation after 500ms delay when searchLocation is changed
  useEffect (() => {
    const timerId = setTimeout(() => {
      setDebouncedLocation (searchLocation);
    }, 500);
    // Return a cleanup function to clear the timeout when the component unmounts or searchLocation or setCoordinates is changed
    return () => {
      clearTimeout(timerId)
    }
  }, [searchLocation, setCoordinates]) 

  // useEffect hook to send a GET request to fetch coordinates for the debouncedLocation
  useEffect (() => {
    // Check if debouncedLocation exists
    if (debouncedLocation) {
      // Define the options object to specify the URL, parameters, and headers for the API request
      const options = {
        method: 'GET',
        url: 'https://forward-reverse-geocoding.p.rapidapi.com/v1/forward',
        params: {
          street: searchLocation,
          'accept-language': 'en',
          polygon_threshold: '0.0'
        },
        headers: {
          'X-RapidAPI-Key': '96d3145458msh88398ed9642d141p10ef6ajsne53e90f42611',
          'X-RapidAPI-Host': 'forward-reverse-geocoding.p.rapidapi.com'
        }
      };
  
      // Send the API request using axios library
      axios.request(options).then(function (response) {
        console.log(response.data);
        // If the request is successful, call the setCoordinatesCallback function to pass the latitude and longitude values to the parent component
        setCoordinatesCallback ({
          lat: response.data[0].lat,
          lon: response.data[0].lon
        }) 
      }).catch(function (error) {
        // If there is an error, log the error to the console
        console.error(error);
      });
    }
  }, [debouncedLocation])

  
  return (<></>)
}

// Export the component as the default export
export default APIpostcode