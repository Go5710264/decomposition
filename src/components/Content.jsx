import AdvertisingBanner from './AdvertisingBanner'
import CardNewsWrapper from "./CardNews/CardNewsWrapper";
import SearchArrowWrapper from "./SearchArrow/SearchArrowWrapper";
import WidgetWrapper from './Widgets/WidgetWrapper'

const imgFeomServer = '../../public/the-fast-and-the-furious.png'

const Content = () => {
    return (
        <>
            <CardNewsWrapper />
            <SearchArrowWrapper/>
            <AdvertisingBanner>
                <img src={imgFeomServer} />    
            </AdvertisingBanner>
            <WidgetWrapper />
        </>
    )
}

export default Content;