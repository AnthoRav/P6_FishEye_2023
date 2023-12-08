export default class VideoFactory {
    constructor(data){
        this.data = data;
    }
    createMediaCard() {
        const card = document.createElement('div');
        card.className += "media-card";
        card.innerHTML = `
        <a href="#" class="media-lightbox" role="link" tabindex='1'>
            <video controls id="light_medias" class="media-card-video" 
                src="assets/photographers/${this.data.video}" 
                type="video/mp4" alt="${this.data.title}">
            </video>
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

    /*createMediaCard() {
        const mediaCard = document.createElement("p");
        mediaCard.textContent = "ceci est une video";
        return mediaCard
    }*/
}