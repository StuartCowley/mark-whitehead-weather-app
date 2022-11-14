import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import LocationDetails from './LocationDetails';
import ForecastSummaries from './ForecastSummaries';
import ForecastDetails from './ForecastDetails';
import getForecast from '../requests/getForecast';
import SearchForm from '../search/SearchForm';

function App() {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: '', country: '' });
  const [selectedDate, setSelectedDate] = useState(0);

  const [searchText, setSearchText] = useState('');

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };
  const handleCitySearch = () => {
    getForecast(searchText, setSelectedDate, setForecasts, setLocation);
  };

  useEffect(() => {
    getForecast('Manchester', setSelectedDate, setForecasts, setLocation);
  }, []);

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <LocationDetails city={location.city} country={location.country} />
      <SearchForm
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={handleCitySearch}
      />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />
      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
}

export default App;
