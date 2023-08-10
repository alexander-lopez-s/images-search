import handleSearch from "../handlers/handleSearch.js";
import dom from "../dom.js";

const searchListener = () => {
    dom.searchButton.addEventListener('click', handleSearch )
}

export default searchListener;