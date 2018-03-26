import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const OpenMap = ({ data, config }) => {
  if (data === OpenMap.defaultProps.data) {
    return (
      <div className={config.containerClassName} />
    );
  }

  this.state={
      time: undefined,
  }

  this.setState=({
      time:day.format('dddd h:mm A'),
  })
  const day = moment.unix(data.dt);
  const src = `//openweathermap.org/img/w/${data.weather[0].icon}.png`;

  return (
    <div className={config.containerClassName}>
      <h3>{this.props.time}</h3>
    </div>
  );
};

OpenMap.propTypes = {
  data: PropTypes.object,
  config: PropTypes.object,
};

OpenMap.defaultProps = {
  data: { weather: [{}], sys: {}, main: {} },
  config: { containerClassName: 'react-open-weather-map' },
};

export default OpenMap;