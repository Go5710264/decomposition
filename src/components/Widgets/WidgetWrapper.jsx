import { useState } from 'react';
import WeatherWidget from './WeatherWidget';

const currentWeather = '+26';
// const forecastSentServer = {
//     evening: '+23',
//     morning: '+22'
// }

const WidgetWrapper = () => {
    const [forecast] = useState({
        evening: '+23',
        morning: '+22'
    })
    return (
        <div>
            <WeatherWidget serverResponse={forecast} >
                <span>{currentWeather}</span>
            </WeatherWidget>
        </div>
    )
}

export default WidgetWrapper;