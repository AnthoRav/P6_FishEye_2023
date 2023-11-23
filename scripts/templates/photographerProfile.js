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
            <button id="contact_button" class="button" type="button" aria-label="Open contact form">Contactez-moi</button>
            <img class="photographer_picture" src="./assets/photographers/thumbnails/${this.photographer.portrait}" alt="${this.photographer.name}">
        `;
        profileHeader.innerHTML = profile;
        return profile;
    }

    //onclick="${displayModal()}"


    /*photographerFooter()  {
        const profileFooter = document.querySelector("#main");
        const footer = document.createElement('aside');
        footer.className = "footer-info";
        footer.innerHTML =`
            <div class="footer-container">
                <span class="footer-likes" id="totalLikesCount"></span>
                <i class="fa-solid fa-heart"></i>
            </div>
            <p>${this.photographer.price} € / jour</p>
            `;
        profileFooter.appenChild(footer);
        return footer;
    }*/
   
    //photographerFooter();
}
