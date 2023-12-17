export default class ImageFactory {
    constructor(data){
        this.data = data;
    }
    createMediaCard() {
        const card = document.createElement('div');
        card.className = "media-card";
        card.innerHTML = `
        <a href="#" class="media-lightbox" role="link">
            <img id="light_medias" class="media-card-img" src="assets/photographers/${this.data.image}" alt="${this.data.title}">
        </a>
            <div class="media-card-info">
                <h2 class="media-card-title">${this.data.title}</h2>
                <div class="media-like-container">
                    <span class="media-like-count">${this.data.likes}</span>
                    <button class="media-like-button" aria-label="Bouton de likes">
                    <i class="fa-solid fa-heart"></i>
                    </button>
                </div>
            </div>
        `;
        
        return card;
    }
}

/*createMediaCard() {
    const mediaCard = document.createElement("div");
    mediaCard.classList.add("card");
    const img = document.createElement("img");
    img.setAttribute ("src", `./assets/photographers/${this.data.image}`);
    img.setAttribute("alt","");
    const h2 = document.createElement( 'h2' );
    h2.textContent = this.data.title;
    mediaCard.appendChild(img);
    mediaCard.appendChild(h2);


    return (mediaCard);
}*/