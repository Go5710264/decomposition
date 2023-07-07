import SearchRandomQuery from './SearchRandomQuery'
import ArrowInput from "./SearchArrowInput";
import SearchArrowNavigation from "./SearchArrowNavigation";

const serverResponse = 'ответ сервера на запрос'

const SearchArrowWrapper = () => {
    return (
        <div className='search-arrow-wrapper'>
            <SearchArrowNavigation/>
            <ArrowInput />
            <SearchRandomQuery randomQuery={serverResponse} />
        </div>
    )
}

export default SearchArrowWrapper;