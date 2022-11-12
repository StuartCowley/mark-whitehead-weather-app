import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import '../styles/ForecastDetails.css';

function ForecastDetails(props) {
  const { forecast } = props;

  const formattedDate = new Date(forecast.date).toDateString();

  return (
    <div>
      <div className="forecast-details">
        <div className="forecast-details__date">{formattedDate}</div>
        <div className="forecast-details__temperature">
          Max Temp {forecast.temperature.max}°C
        </div>
        <div className="forecast-details__temperature">
          Min Temp {forecast.temperature.min}°C
        </div>
        <div className="forecast-details__wind-speed">
          {forecast.wind.speed} Mph
        </div>
        <div className="forecast-details__wind-direction">
          {forecast.wind.direction}
        </div>
        <div className="forecast-details__humidity">{forecast.humidity} %</div>
        <div className="forecast-details__description">
          {forecast.description}
        </div>
        <div className="forecast-details__icon">
          <WeatherIcon name="owm" iconId={forecast.icon} />
        </div>
      </div>
    </div>
  );
}

ForecastDetails.propTypes = {
  forecast: PropTypes.shape(
    PropTypes.shape({
      date: PropTypes.number,
      temperature: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number,
      }),
      wind: PropTypes.shape({
        speed: PropTypes.number,
        direction: PropTypes.string,
      }),
      humidity: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.string,
    })
  ).isRequired,
};

export default ForecastDetails;
