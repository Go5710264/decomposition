import CardNewsExchange from './CardNewsExchange';
import CardNewsHeader from './CardNewsHeader'
import CardNewsList from './CardNewsList';

/**
 * возвращает новостную ленту
 */

const CardNewsWrapper = () => {
    return (
        <article>
            <CardNewsHeader />
            <CardNewsList>
                <a href="#">first news</a>
                <a href="#">second news</a>
                <a href="#">third news</a>
                <a href="#">fourth news</a>
                <a href="#">fifth news</a>
            </CardNewsList>
            <CardNewsExchange>
                <span>63.52</span>
                <span>70.86</span>
                <span>64.90</span>  
            </CardNewsExchange>
        </article>
    )
}

export default CardNewsWrapper;