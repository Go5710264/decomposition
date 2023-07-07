import PropTypes from 'prop-types';

/**
 * Возвращает биржевые катировки
 */

const CardNewsExchange = ({ children }) => {
    return (
        <article className="card-news-exchange-article">
            <div>
                <span>USD MOEX</span> {children[0]} <span>+0.09</span>
            </div>
            <div>
                <span>EUR MOEX</span> {children[1]} <span>+0.14</span>
            </div>
            <div>
                <span>НЕФТЬ</span> {children[2]} <span>+1.63%</span>
            </div>
        </article>
    )
}

CardNewsExchange.propTypes = {
    children: PropTypes.array
}

export default CardNewsExchange;