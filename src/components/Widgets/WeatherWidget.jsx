import PropTypes from 'prop-types';
const WeatherWidget = ( {serverResponse} ) => {
    console.log(serverResponse)
    
    return(
        <article>
            <div>
                <div>
                    
                </div>
            </div>
        </article>       
    )
}


WeatherWidget.propTypes = {
    serverResponse: PropTypes.object
}

export default WeatherWidget;