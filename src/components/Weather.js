import React from "react";

// function Weather(props) {
//   const { temperature, city, country, humidity, description, error } = props;
//   return (
//     <div className='weather__info'>
//       {city && country && (
//         <p>
//           Location: {city}, {country}
//         </p>
//       )}
//       {temperature && <p>Temperature: {temperature}</p>}
//       {humidity && <p>Humidity: {humidity}</p>}
//       {description && <p>Conditions: {description}</p>}
//       {error && <p>{error}</p>}
//     </div>
//   );
// }

const Weather = props => (
  <div className='weather__info'>
    {props.city && props.country && (
      <p className='weather__key'>
        Locatiom:
        <span className='weather__value'>
          {" "}
          {props.city}, {props.country}
        </span>
      </p>
    )}
    {props.temperature && (
      <p className='weather__key'>
        Temperature:
        <span className='weather__value'> {props.temperature} </span>
      </p>
    )}
    {props.humidity && (
      <p className='weather__key'>
        Humidity:
        <span className='weather__value'> {props.humidity} </span>
      </p>
    )}
    {props.description && (
      <p className='weather__key'>
        Conditions:
        <span className='weather__value'> {props.description}</span>
      </p>
    )}
    {props.error && (
      <p className='weather__error'>
        <span>{props.error} </span>
      </p>
    )}
  </div>
);

export default Weather;
