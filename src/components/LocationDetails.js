import React from 'react';
import PropTypes from 'prop-types';
import '../styles/LocationDetails.css';

function LocationDetails(props) {
  const { city, country, errorMessage } = props;
  return errorMessage ? (
    <h1>{errorMessage}</h1>
  ) : (
    <div className="location-details__text-box">
      <h1 className="location-details">THIS WEEK in {`${city}, ${country}`}</h1>
    </div>
  );
}

LocationDetails.defaultProps = {
  errorMessage: '',
};

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
};

export default LocationDetails;
