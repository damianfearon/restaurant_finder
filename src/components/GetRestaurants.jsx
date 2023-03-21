import React from "react";
import axios from "axios";
import APIpostcode from './API_postcode';
//include import from another js file for location to coordinates

//const axios = require('axios').default
const GetRestaurants = (props) => {
  const{postcode} =props;
  const coordinates = APIpostcode(postcode);
    const options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng',
    params: {
      latitude: coordinates.lat,
      longitude: coordinates.lon,
      limit: '50',
      // currency: 'USD',
      distance: '2',
      // open_now: 'false',
      // lunit: 'km',
      // lang: 'en_US'
    },
    headers: {
      'X-RapidAPI-Key': '96d3145458msh88398ed9642d141p10ef6ajsne53e90f42611',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data)
    const results = console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });

  return <div>results</div>;

  //return results on series of tiles.
 
}
   export default GetRestaurants

   //'X-RapidAPI-Key': '96d3145458msh88398ed9642d141p10ef6ajsne53e90f42611',