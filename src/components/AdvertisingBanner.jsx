import PropTypes from 'prop-types';

const AdvertisingBanner = ({ children }) => {
    return (
        <div className='advertising-banner'>
            {children}
        </div>
    )
}

AdvertisingBanner.propTypes = {
    children: PropTypes.element
}

export default AdvertisingBanner;