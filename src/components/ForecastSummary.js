import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import '../styles/ForecastSummary.css';

function ForecastSummary(props) {
  const { date, temperature, description, icon, onSelect } = props;
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date-temp-box">
        <div className="forecast-summary__date">{formattedDate}</div>
        <div className="forecast-summary__temperature">{temperature.max}°C</div>
      </div>
      <div className="forecast-summary__icon-description-box">
        <div className="forecast-summary__icon" data-testid="forecast-icon">
          <WeatherIcon
            className="forecast-summary__icon-style"
            name="owm"
            iconId={icon.toString()}
          />
        </div>
        <div className="forecast-summary__description">{description}</div>
      </div>
      <div className="forecast-summary__button-box">
        <button
          className="forecast-summary__button"
          type="button"
          onClick={() => onSelect(date)}
        >
          Extra
        </button>
      </div>
    </div>
  );
}
export default ForecastSummary;

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.number.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};
