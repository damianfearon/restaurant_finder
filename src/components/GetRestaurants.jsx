// Importing required libraries
import React, {useState, useEffect} from "react";
import axios from "axios";
import {motion} from "framer-motion";

//include import from another js file for location to coordinates

//const axios = require('axios').default

// Defining the GetRestaurants functional component that takes in coordinates as a prop
const GetRestaurants = ({coordinates}) => {
  // Setting the initial state of restaurants to an empty array
  const [restaurants, setRestaurants] = useState ([])
    // Using the useEffect hook to make an API call using axios and the RapidAPI service
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
            'X-RapidAPI-Key': '123b083e7bmshd330d9562f79b6ep1bb142jsn7aaad90d7441',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        };
        // Making the API call using axios, filtering the reponse data to include only restaurants with a name, and setting the state using setRestaurants
        axios.request(options).then(function (response) {
          // Logging the response data to the console
          console.log(response.data)
          // Setting the state of restaurants to the filtered data
          const filteredData = response.data.data.filter((restaurant) => restaurant.name )
          setRestaurants(filteredData)
          // Logging any errors to the console
        }).catch(function (error) {
          console.error(error);
        });
      }
    }, [coordinates])

  // Defining the animation effects using motion variants
  const cardVariant = {
    hidden: {opacity:0},
    visible: {opacity:1},
  }
  
  // Returning the JSX code to display the list of restaurants
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