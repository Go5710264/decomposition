import PropTypes from 'prop-types';

const SearchRandomQuery = ( {randomQuery} ) => {
    return (
        <div className="search-random-query">
            <span>Найдётся всё. Например, </span><span>{randomQuery}</span>
        </div>
    )
}

SearchRandomQuery.propTypes = {
    randomQuery: PropTypes.string
}

export default SearchRandomQuery;