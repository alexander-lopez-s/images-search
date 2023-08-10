import fetchImages from "../apis/fetchImages.js";
import createImageCard from "../components/createImageCard.js";
import dom from "../dom.js";

const clearExistingCards = () => {
    while (dom.container.firstChild) {
        dom.container.removeChild(dom.container.firstChild);
    }
};


const handleSearch = async() => {
    clearExistingCards();
    const data = await fetchImages();
    data.results.forEach((result) => {
        const cardDom = createImageCard(result);
        dom.container.append(cardDom)
    })

    const imageContainers = document.querySelectorAll('.image-container');

    imageContainers.forEach((container) => {
        const image = container.querySelector('img');
        const closeButton = document.createElement('div');
        closeButton.className = 'close-button';
        closeButton.innerText = 'Close';
        closeButton.addEventListener('click', () => {
        container.classList.remove('expanded');
        document.body.classList.remove('prevent-scroll');
        closeButton.style.visibility = "hidden"
        });
    
        image.addEventListener('click', () => {
            container.classList.add('expanded');
            document.body.classList.add('prevent-scroll');
            container.appendChild(closeButton);
        });
    });


}

export default handleSearch;