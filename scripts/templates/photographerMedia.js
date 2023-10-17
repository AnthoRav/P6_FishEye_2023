import MediasFactory from "../factories/mediaFactory.js";

export default class PhotographerMedias {
    constructor(photographer, medias) {
        this.photographer = photographer;
        this.medias = medias;
    }
    createPhotographerMedias() {
        const profileMedia = document.querySelector(".medias");
        const content = `
            <section class="gallery">
                ${this.medias.map(media => {
                    const galleryMedias = new MediasFactory(media);
                    galleryMedias.createImageCard();
            
            })}
            </section>
        `;
        profileMedia.innerHTML = content;
        return content;
    }
}