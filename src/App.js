import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Cta from './components/Cta';
import Footer from './components/Footer';
import APIpostcode from './components/API_postcode';
import GetRestaurants from './components/GetRestaurants';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [coordinates, setCoordinates] = useState({ lat: null, lon: null });
  const handleSearchInputChange = (inputValue) => {
    setSearchInput(inputValue);
  };
  return (
    <div className="">
      <Header onSearchInputChange={handleSearchInputChange} />
      <Cta />
      <APIpostcode
        searchLocation={searchInput}
        setCoordinatesCallback={setCoordinates}
      />
      <GetRestaurants coordinates={coordinates} />
      <Footer />
    </div>
  );
}

export default App;
