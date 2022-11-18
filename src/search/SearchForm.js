import React from 'react';
import PropTypes from 'prop-types';
import '../styles/SearchForm.css';

function SearchForm(props) {
  const { searchText, setSearchText, onSubmit } = props;

  const handleInputChange = (event) => setSearchText(event.target.value);

  return (
    <div className="search-form">
      <input
        className="search-form__input"
        type="text"
        placeholder="City"
        onChange={handleInputChange}
        value={searchText}
      />
      <button className="search-form__button" type="submit" onClick={onSubmit}>
        Search
      </button>
    </div>
  );
}

export default SearchForm;

SearchForm.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
