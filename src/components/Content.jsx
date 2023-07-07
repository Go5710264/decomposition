import AdvertisingBanner from './AdvertisingBanner'
import CardNewsWrapper from "./CardNews/CardNewsWrapper";
import SearchArrowWrapper from "./SearchArrow/SearchArrowWrapper";
// import banner from '../../public/the-fast-and-the-furious.png'

const Content = () => {
    return (
        <>
            <CardNewsWrapper />
            <SearchArrowWrapper/>
            <AdvertisingBanner>
                <img src="../../public/the-fast-and-the-furious.png" />    
            </AdvertisingBanner>
        </>
    )
}

export default Content;