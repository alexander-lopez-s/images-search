const createImageCard = (imageData) => {
    // Create container for the image
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('image-container');

    // Create img
    const image = document.createElement('img');
    image.src = imageData.urls.regular;
    image.alt = imageData.alt_description;

    // Create a div to contain description and owner
    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList = "picture-info";

    // Create img description
    const description = document.createElement('h2');
    description.innerText = imageData.description;
    let truncatedString = description.innerText.substring(0, 25);
    description.innerText = `${truncatedString}`;



    // Create a div for owner and likes
    const ownerLikesContainer = document.createElement('div');
    ownerLikesContainer.classList.add('owner-likes');

    // Create img creator (owner)
    const owner = document.createElement('h3');
    owner.innerText = imageData.user.username;

    // Create img likes
    const likes = document.createElement('h3');
    likes.innerText = `❤️ ${imageData.likes}`;

    // Append owner and likes to container
    ownerLikesContainer.append(owner, likes);

    // Append img data to description container
    descriptionContainer.append(description, ownerLikesContainer);

    // Append all elements to the card container
    cardContainer.append(image, descriptionContainer);

    return cardContainer;
};

export default createImageCard;