import React, {useEffect, useState} from "react";
import axios from "axios";


//include import from another js file for location to coordinates

//const axios = require('axios').default
function APIpostcode ({searchLocation, setCoordinatesCallback}) {
const [coordinates, setCoordinates] = useState ({lat: null, lon: null})
const [debouncedLocation, setDebouncedLocation] = useState (searchLocation)
useEffect (() => {
  const timerId = setTimeout(() => {
    setDebouncedLocation (searchLocation);
  }, 500);
  return () => {
    clearTimeout(timerId)
  }
}, [searchLocation, setCoordinates]) 
useEffect (() => {
  if (debouncedLocation) {
    const options = {
      method: 'GET',
      url: 'https://forward-reverse-geocoding.p.rapidapi.com/v1/forward',
      params: {
        street: searchLocation, //19/03/23 - add searchLocation variable
        // city: 'New York Cit',
        // state: 'NY',
        // postalcode: '10011',
        // country: 'USA',
        'accept-language': 'en',
        polygon_threshold: '0.0'
      },
      headers: {
        'X-RapidAPI-Key': '96d3145458msh88398ed9642d141p10ef6ajsne53e90f42611',
        'X-RapidAPI-Host': 'forward-reverse-geocoding.p.rapidapi.com'
      }
    };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
       setCoordinatesCallback ({
        lat: response.data[0].lat,
        lon: response.data[0].lon
       }) 
  }).catch(function (error) {
    console.error(error);
  });
}
}, [debouncedLocation])







return (<></>)

}
export default APIpostcode