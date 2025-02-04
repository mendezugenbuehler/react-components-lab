import WeatherIcon from '../WeatherIcon/WeatherIcon';  
import WeatherData from '../WeatherData/WeatherData'; 
import './WeatherForecast.css';

const WeatherForecast = ({ day, img, imgAlt, conditions, time }) => {
  return (
    <div className="weather">
      <WeatherData day={day} conditions={conditions} time={time} />
      <WeatherIcon img={img} imgAlt={imgAlt} />
    </div>
  );
}

export default WeatherForecast;
