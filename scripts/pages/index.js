import photographerTemplate from "../templates/photographer.js";
import Photographer from "../models/Photographer.js";
import PhotographerApi from "../API/photographerApi.js";
    
   /* async function getPhotographers() {
        // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet, 
        // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
        let photographers = await fetch('../data/photographers.json')
            //promise reponse
            .then((data) => data.json())
           
                
                let photographers = [
                    {
                        "name": "Ma data test",
                        "id": 1,
                        "city": "Paris",
                        "country": "France",
                        "tagline": "Ceci est ma data test",
                        "price": 400,
                        "portrait": "account.png"
                    },
                    {
                        "name": "Autre data test",
                        "id": 2,
                        "city": "Londres",
                        "country": "UK",
                        "tagline": "Ceci est ma data test 2",
                        "price": 500,
                        "portrait": "account.png"
                    },
                ]
                
                // et bien retourner le tableau photographers seulement une fois récupéré
            return photographers;
            //({photographers: [...photographers, ...photographers, ...photographers]})
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerTemplate(photographer);
            const userCardDOM = photographerModel.createPhotographerCard();
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    }
    
    init();
*/
const photographersSection = document.querySelector(".photographer_section");
const photographersApi = new PhotographerApi("./data/photographers.json");

const displayPhotographers = async () => {
    const photographersData = await photographersApi.getPhotographers();
    const photographers = photographersData.photographers;
    //console.log(photographersData)
    photographers
        .map(photographer => new Photographer(photographer))
        .forEach(photographer => {
            const template = new photographerTemplate(photographer);
            const photographerCard = template.createPhotographerCard();
            photographersSection.appendChild(photographerCard);
        });
};

displayPhotographers();
