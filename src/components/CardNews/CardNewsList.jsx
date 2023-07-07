import PropTypes from 'prop-types';

const CardNewsList = ( {children} ) => {
    return (
        <ul className="card-news-list">
            <li>{children[0]}</li>
            <li>{children[1]}</li>
            <li>{children[2]}</li>
            <li>{children[3]}</li>
            <li>{children[4]}</li>
        </ul>
    )
}

CardNewsList.propTypes = {
    children: PropTypes.array
}

export default CardNewsList;