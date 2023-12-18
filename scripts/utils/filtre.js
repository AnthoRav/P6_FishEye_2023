import PhotographerMedias from "../templates/photographerMedia.js";
import { displayLightbox } from "./lightbox.js";
import { likeOrDislike } from "./likes.js";


export const OpenCloseFilter = () => {
  const filterMenu = document.querySelector(".dropdown_content");
  const filterMenuButton = document.querySelector(".button_drop");
  const filterButtons = document.querySelectorAll(".dropdown_content button");

  filterMenuButton.addEventListener("click", () => {
    
    filterMenu.classList.toggle("open-filter");
    //ouverture du menu de selection des filtres et rotation du chevron
    document.querySelector(".dropdown").classList.toggle("open-filter-button");
    document.querySelector(".fa-chevron-up").classList.toggle("rotate");
    const isExpanded = filterMenuButton.getAttribute("aria-expanded") === "true" || false;
    filterMenuButton.setAttribute("aria-expanded", !isExpanded);

    const newAriaHiddenValue = filterMenu.classList.contains("open-filter") ? "false" : "true";
    filterMenu.setAttribute("aria-hidden", newAriaHiddenValue);

    const newTabIndexValue = filterMenu.classList.contains("open-filter") ? "0" : "-1";
    filterButtons.forEach(button => button.setAttribute("tabindex", newTabIndexValue));
  })
}
//selection du filtre en cours d'utilisation et tableau des filtre dans les bouton li
export const displayMediaFilter = mediasFiltered => {
  const currentFilter = document.querySelector('#current_filter');
  const allFilters = Array.from(document.querySelectorAll('.dropdown_content li button'))

  let filterAlreadySelected = allFilters.find(filter => filter.textContent == currentFilter.textContent);
  filterAlreadySelected.style.display = 'none';

  allFilters.forEach(filter => {
      filter.addEventListener('click', () => {
        //boucle pour selection du filtre et changement du contenu du filtre en cours d'utilisation
          currentFilter.textContent = filter.textContent;
          if (filterAlreadySelected) filterAlreadySelected.style.display = 'block';

          filterAlreadySelected = filter;
          filterAlreadySelected.style.display = 'none'; //evite le dedoublage du filtre selectionné

          sortByFilter(filter.textContent);
        })
      });
      //filtrage par titre, likes et date
      const sortByFilter =  filterValue => {
        switch (filterValue) {
          case 'Titre':
            mediasFiltered.sort((a, b) => a.title.localeCompare(b.title));
            break;
          case 'Popularité':
            mediasFiltered.sort((a, b) => b.likes - a.likes);
            break;
          case 'Date':
            mediasFiltered.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        }
        //console.log(mediasFiltered);
        //creation d'un nouvel objet a partir de la class qui affiche les media dans laquelle on utilise les medias filtrés
        const mediasTemplate = new PhotographerMedias(null, mediasFiltered);  
        mediasTemplate.createPhotographerMedias(); //affichage des medias filtrés
        const mediasSection = document.querySelector('.gallery');
        mediasSection.remove(); //effacement de la liste des médias précédents
        displayLightbox(mediasTemplate); //on applique le tableaux des medias filtrés a la lightbox
        likeOrDislike(); //gestion des likes pour les medias filtrés.
      };
    };
