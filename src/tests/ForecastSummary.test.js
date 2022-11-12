import React from 'react';
import { render, getByText } from '@testing-library/react';
import ForecastSummary from '../components/ForecastSummary';

describe('ForecastSummary', () => {
  const validProps = {
    date: 11111111,
    description: 'Stub description',
    icon: '800',
    temperature: {
      min: 12,
      max: 22,
    },
    onselect: () => {},
  };

  it('renders correctly', () => {
    const { asFragment } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
        onSelect={validProps.onSelect}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correct value for props', () => {
    const { getByText, getByTestId } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
      />
    );
    expect(getByText('Thu Jan 01 1970')).toHaveClass('forecast-summary__date');
    expect(getByText('Stub description')).toHaveClass(
      'forecast-summary__description'
    );
    expect(getByTestId('forecast-icon')).toHaveClass('forecast-summary__icon');
    expect(getByText('22')).toHaveClass('forecast-summary__temperature');
  });
});
