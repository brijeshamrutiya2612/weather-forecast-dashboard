import React, { useState, useEffect } from "react";
import CityCard from "./components/CityCard";
import TemperatureChart from "./components/TemperatureChart";
import "./index.css";

const defaultCities = [
  {
    name: "New York",
    currentTemp: 22,
    condition: "Sunny",
    highTemp: 25,
    lowTemp: 18,
    forecast: [
      { day: "Tomorrow", high: 23, low: 19 },
      { day: "Day 2", high: 24, low: 20 },
      { day: "Day 3", high: 22, low: 18 },
    ],
  },
  {
    name: "London",
    currentTemp: 16,
    condition: "Cloudy",
    highTemp: 18,
    lowTemp: 14,
    forecast: [
      { day: "Tomorrow", high: 17, low: 15 },
      { day: "Day 2", high: 16, low: 14 },
      { day: "Day 3", high: 15, low: 13 },
    ],
  },
  {
    name: "Tokyo",
    currentTemp: 28,
    condition: "Rainy",
    highTemp: 30,
    lowTemp: 25,
    forecast: [
      { day: "Tomorrow", high: 29, low: 26 },
      { day: "Day 2", high: 28, low: 24 },
      { day: "Day 3", high: 27, low: 23 },
    ],
  },
  {
    name: "Sydney",
    currentTemp: 20,
    condition: "Windy",
    highTemp: 22,
    lowTemp: 18,
    forecast: [
      { day: "Tomorrow", high: 21, low: 19 },
      { day: "Day 2", high: 22, low: 20 },
      { day: "Day 3", high: 23, low: 21 },
    ],
  },
  {
    name: "Paris",
    currentTemp: 19,
    condition: "Partly Cloudy",
    highTemp: 21,
    lowTemp: 17,
    forecast: [
      { day: "Tomorrow", high: 20, low: 18 },
      { day: "Day 2", high: 21, low: 19 },
      { day: "Day 3", high: 22, low: 20 },
    ],
  },
];

const App = () => {
  const [cities, setCities] = useState(defaultCities); // Initialize with default cities
  const [selectedCity, setSelectedCity] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Add a new city (mocked)
  const addCity = () => {
    if (!searchTerm.trim()) {
      alert("Enter a valid city name.");
      return;
    }

    if (cities.some((city) => city.name.toLowerCase() === searchTerm.toLowerCase())) {
      alert("City already exists.");
      return;
    }

    const newCity = {
      name: searchTerm,
      currentTemp: Math.floor(Math.random() * 30),
      condition: "Sunny",
      highTemp: Math.floor(Math.random() * 35),
      lowTemp: Math.floor(Math.random() * 20),
      forecast: [
        { day: "Tomorrow", high: Math.floor(Math.random() * 30), low: Math.floor(Math.random() * 20) },
        { day: "Day 2", high: Math.floor(Math.random() * 30), low: Math.floor(Math.random() * 20) },
        { day: "Day 3", high: Math.floor(Math.random() * 30), low: Math.floor(Math.random() * 20) },
      ],
    };
    

    setCities([...cities, newCity]);
    setSearchTerm("");
  };

  // Remove a city
  const removeCity = (cityName) => {
    setCities(cities.filter((city) => city.name !== cityName));
    if (selectedCity?.name === cityName) setSelectedCity(null);
  };

  return (
    <div className="App">
      <header>
        <h1>Weather Forecast Dashboard</h1>
        <div className="search-container">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter city name"
          />
          <button onClick={addCity}>Add City</button>
        </div>
      </header>
      <main>
        <div className="dashboard">
          {cities.map((city) => (
            <CityCard
              key={city.name}
              city={city}
              onRemove={removeCity}
              onSelect={() => setSelectedCity(city)}
            />
          ))}
        </div>
        {selectedCity && <TemperatureChart city={selectedCity} />}
      </main>
    </div>
  );
};

export default App;
