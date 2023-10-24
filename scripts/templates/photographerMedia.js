import MediasFactory from "../factories/mediaFactory.js";

export default class PhotographerMedias {
    constructor(photographer, medias) {
        this.photographer = photographer;
        this.medias = medias;
    }
    createPhotographerMedias() {
        const profileMedia = document.querySelector(".medias");
        const content = document.createElement("section");
        content.classList.add("gallery");
                this.medias.map(media => {
                    const galleryMedias = new MediasFactory(media);
                    //console.log(galleryMedias);
                    content.appendChild(galleryMedias.createMediaCard());
                    
            
            })
        ;
        profileMedia.appendChild(content);
        return content;
    }
}