import PhotographerApi from "../API/photographerApi.js";

  const photographersApi = new PhotographerApi("./data/photographers.json");
  const data = await photographersApi.getPhotographers();
  const id = window.location.search.split("id=")[1];
  //console.log(data.media)
  const photographerId = data.photographers.filter(
    (photographer) => photographer.id == id
  );

const likesAndPriceDiv = document.querySelector(".likes_and_price");
    let likesAndPrice = "";
    let totalLikes = 0;
    
    //functions
    export function getAllLikes() {
    let likeContainer = document.querySelectorAll(".media-like-count");
      for (let i = 0; i < likeContainer.length; i++) {
        totalLikes += parseInt(likeContainer[i].innerHTML);
      }
      renderLikes();
    }

    export function likeOrDislike() {
      const likeBtn = document.querySelectorAll(".media-like-button");
      likeBtn.forEach((btn) => {
        let total = document.querySelector(".total_likes");
        let photoLikes = btn.previousElementSibling;
        btn.addEventListener("click", (e) => {
            e.preventDefault();
          if (!btn.classList.contains("liked")) {
            photoLikes.innerHTML++;
            totalLikes++;
            total.innerHTML = parseInt(totalLikes);   
          } else {
            photoLikes.innerHTML--;
            totalLikes--;
            total.innerHTML = parseInt(totalLikes);
          }
          //add liked si non présent---> like +1 au clic
          //remove liked si déjà présent ---> like -1 au clic
          btn.classList.toggle("liked");
        });
      });
    }
    
    function renderLikes() {
    //add inner HTML a la div
    likesAndPrice = `
      <div>
      <span class="total_likes" id="totalLikesCount">${totalLikes}</span>
      <i class="fa-solid fa-heart"></i>
      </div>
      <p><span class="photographer-price">${photographerId[0].price}</span> € / jour</p>
      </div>
    `;
    likesAndPriceDiv.innerHTML += likesAndPrice;
  }
  