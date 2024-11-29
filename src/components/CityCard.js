import React from "react";

const CityCard = ({ city, onRemove, onSelect }) => {
  return (
    <div className="city-card">
      <button className="remove-btn" onClick={() => onRemove(city.name)}>
        x
      </button>
      <h3>{city.name}</h3>
      <p>{city.condition}</p>
      <p>Current: {city.currentTemp}°C</p>
      <p>High: {city.highTemp}°C, Low: {city.lowTemp}°C</p>
      <button onClick={onSelect}>View Graph</button>
    </div>
  );
};

export default CityCard;
