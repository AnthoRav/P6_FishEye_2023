import PhotographerApi from "../API/photographerApi.js";

  const photographersApi = new PhotographerApi("./data/photographers.json");
  const data = await photographersApi.getPhotographers();
  const id = window.location.search.split("id=")[1];
  //console.log(data.media)
  const photographerName = data.photographers.filter(
    (photographer) => photographer.id == id
  );

export const displayHideModal = () => {
    const contactButton = document.querySelector("#contact_button");
    const modal = document.querySelector("#contact_modal");
    const closeModal = document.querySelector(".btn_close");
    contactButton.addEventListener("click", () => {
        modal.style.display = "block";
        document.querySelector('.photographName').innerText = "Contactez-moi   " + `${photographerName[0].name}`
        //closeModal.focus();
    });
    closeModal.addEventListener("click", () => modal.style.display = "none");
    document.querySelector(".btn-submit").addEventListener("click", () => modal.style.display = "none");

}
/*
export const closeModal = () => {
    modal.style.display = "none";
}
*/

export function validateForm() {
    // form 
    const form = document.querySelector("form");
    // Récupérer les valeurs des champs de saisie
    const firstName = document.querySelector("#firstName");
    const lastName = document.querySelector("#lastName");
    const email = document.querySelector("#email");
    const message = document.querySelector("#yourMessage");

    form.addEventListener("submit", e => {
        e.preventDefault(); 
    
    // Afficher les valeurs dans la console
    console.log("Prénom:", firstName.value);
    console.log("Nom:", lastName.value);
    console.log("Email:", email.value);
    console.log("Message:", message.value);
    });
}