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

  const [errorMessage, setErrorMessage] = useState('');

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };
  const handleCitySearch = () => {
    getForecast(
      searchText,
      setSelectedDate,
      setForecasts,
      setLocation,
      setErrorMessage
    );
  };

  useEffect(() => {
    getForecast(
      'Manchester',
      setSelectedDate,
      setForecasts,
      setLocation,
      setErrorMessage
    );
  }, []);

  return (
    <div className="weather-app">
      <div className="weather-app__location-text-box">
        <h1 className="weather-app__title">MARKS WEATHER PAGE</h1>
        <SearchForm
          searchText={searchText}
          setSearchText={setSearchText}
          onSubmit={handleCitySearch}
        />
      </div>
      <LocationDetails
        city={location.city}
        country={location.country}
        errorMessage={errorMessage}
      />
      {!errorMessage && (
        <>
          <ForecastSummaries
            className="forecast-summaries"
            forecasts={forecasts}
            onForecastSelect={handleForecastSelect}
          />
          {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
        </>
      )}
    </div>
  );
}

export default App;
