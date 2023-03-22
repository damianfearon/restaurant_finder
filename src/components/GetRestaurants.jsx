import React, {useState, useEffect} from "react";
import axios from "axios";
import {motion} from "framer-motion";

//include import from another js file for location to coordinates

//const axios = require('axios').default
const GetRestaurants = ({coordinates}) => {
  const [restaurants, setRestaurants] = useState ([])
    useEffect (() => {
      if (coordinates.lat && coordinates.lon) {
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
          const filteredData = response.data.data.filter((restaurant) => restaurant.name )
          setRestaurants(filteredData)
        }).catch(function (error) {
          console.error(error);
        });
      }
    }, [coordinates])

  const cardVariant = {
    hidden: {opacity:0},
    visible: {opacity:1},
  }
  

  return (
    <div className="p-16 bg-blue-100">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      {restaurants.map((restaurant, index) => (
        <motion.div 
          key={index} 
          className="restaurant bg-white p-4 rounded-lg shadow-lg"
          initial = "hidden"
          animate = "visible"
          variants = {cardVariant}
          transition = {{duration: 2.0}}
        >
          <h3 className="font-bold">{restaurant.name}</h3>
          <p>
          <span className="text-slate-500">Address:</span>
          <span className="float-right">{restaurant.address}</span>
        </p>
          <p>
          <span className="text-slate-500">Phone:</span> 
          <a href={`tel:${restaurant.phone}`} className=" float-right text-blue-400">{restaurant.phone}</a>
        </p>
          <p>
          <span className="text-slate-500">Rating:</span> 
          <span className="float-right">{restaurant.rating}</span>
        </p>
          <p> 
          <a href={`${restaurant.website}`} className="text-blue-400">Website</a>
        </p>  
        </motion.div>
      ))}
      </div>
    </div>
  )
}
   export default GetRestaurants

   //'X-RapidAPI-Key': '96d3145458msh88398ed9642d141p10ef6ajsne53e90f42611',