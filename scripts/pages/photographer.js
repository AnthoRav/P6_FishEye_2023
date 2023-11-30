//Mettre le code JavaScript lié à la page photographer.html
import PhotographerApi from "../API/photographerApi.js";
import PhotographerHeader from "../templates/photographerProfile.js";
import PhotographerMedias from "../templates/photographerMedia.js";
import Photographer from "../models/Photographer.js";
import { displayHideModal, validateForm } from "../utils/contactForm.js";
import {getAllLikes , likeOrDislike} from "../utils/likes.js";
import { OpenCloseFilter, displayMediaFilter } from "../utils/filtre.js";
import photographerTemplate from "../templates/photographer.js";
import { displayLightbox } from "../utils/lightbox.js";

const photographersApi = new PhotographerApi("./data/photographers.json");
const photographerId = new URLSearchParams(window.location.search).get('id');

export const getPhotographerById = async () => {
    const photographersData = await photographersApi.getPhotographers();
    const photographers = photographersData.photographers;
    const media = photographersData.media;
    const photographer = photographers
        .map(photographer => new Photographer(photographer))
        .find(photographer => photographer.id == photographerId);
    const medias = media
    //    .map(media => new MediasFactory(media))
        .filter(media => media.photographerId == photographerId);
            
        return { photographer, medias };

}

const displayPhotographerProfile = async () => {
    const { photographer, medias } = await getPhotographerById();
    const headerTemplate = new PhotographerHeader(photographer);
    headerTemplate.createPhotographerProfile();
    const mediasTemplate = new PhotographerMedias(photographer, medias);
    mediasTemplate.createPhotographerMedias();

    getAllLikes();
    likeOrDislike();
    validateForm();
    displayHideModal();
    OpenCloseFilter();
    displayMediaFilter(medias);
    displayLightbox(mediasTemplate);
}

displayPhotographerProfile();