export default class PhotographerHeader {
    constructor(photographer) {
        this.photographer = photographer;
    }

    createPhotographerProfile() {
        const profileHeader = document.querySelector(".photograph-header");
        const profile = `
            <div class="photographer_profile__infos">
                <h1 class="photographer_name_profile">${this.photographer.name}</h1>
                <h2 class="photographer_location_profile">${this.photographer.city}, ${this.photographer.country}</h2>
                <p class="photographer_tagline_profile">${this.photographer.tagline}</p>    
            </div>
            <button id="contact_button" class="button" type="button" aria-label="Ouvrir le formulaire de contact">Contactez-moi</button>
            <img class="photographer_picture" src="./assets/photographers/thumbnails/${this.photographer.portrait}" alt="${this.photographer.name}">
        `;
        profileHeader.innerHTML = profile;
        return profile;
    }

}
