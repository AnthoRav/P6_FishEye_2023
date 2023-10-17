
export default class PhotographerHeader {
    constructor(photographer) {
        this.photographer = photographer;
    }

    createPhotographerProfile() {
        const profileHeader = document.querySelector(".photograph-header");
        const profile = `
            <div class="photographer_profile__infos">
                <h1 class="photographer_name_profile">${this.photographer.name}</h1>
                <p class="photographer_location_profile">${this.photographer.city}, ${this.photographer.country}</p>
                <p class="photographer_tagline_profile">${this.photographer.tagline}</p>    
            </div>
            <button id="contact_button" class="contact_button" onclick="displayModal()" type="button" aria-label="Open contact form">Contactez-moi</button>
            <img class="photographer_picture" src="./assets/photographers/thumbnails/${this.photographer.portrait}" alt="${this.photographer.name}">
        `;
        profileHeader.innerHTML = profile;
        return profile;
    }
}