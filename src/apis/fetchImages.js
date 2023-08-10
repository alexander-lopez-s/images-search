import constants from "../constants.js"
import dom from "../dom.js"

const fetchImages = async () => {
    const searchTerm = dom.input.value;
    try {
        const response = await fetch(`${constants.url}?query=${searchTerm}&client_id=${constants.apiKey}&orientation=landscape&per_page=8`);
        if (!response.ok) {
            throw new Error(`Error occurre while fetching the images`);
        }
        const data = await response.json();
        
        return data; 

    } catch (error) {
        console.error('Error fetching images:', error);
        throw error;
    }
}

export default fetchImages;