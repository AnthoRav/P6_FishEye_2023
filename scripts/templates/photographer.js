export default class photographerTemplate {
   /* const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/Photographers_ID_Photos/${portrait}`;

    function getUserCardDOM() {
        //creation des elements du DOM
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement('h3');
        //h3.setAttribute(h3.textContent);
        h3.textContent = city + ", " + country;
        article.appendChild(img);
        article.appendChild(h2);
        
        //attributs des elements
        img.setAttribute("src", picture);
        
        return (article);
    }
    return { name, picture, city, country, tagline, price, getUserCardDOM }
    */
    constructor(photographer){
        this.photographer = photographer;
    }

    createPhotographerCard() {
        const article = document.createElement( 'article' );
        const photographerCard = `
            <a href="photographer.html?id=${this.photographer.id}" role="link" aria-label="Voir le profil de ${this.photographer.name}">
                <img class="photographer_thumbnail" src="./assets/photographers/thumbnails/${this.photographer.portrait}" alt="${this.photographer.name}">
                <h2 class="photographer_name">${this.photographer.name}</h2>
            </a>
            <p class="photographer_location">${this.photographer.city}, ${this.photographer.country}</p>
            <p class="photographer_tagline">${this.photographer.tagline}</p>
            <span class="photographer_price">${this.photographer.price}€/jour</span>
        `;
        article.innerHTML = photographerCard;
        return article;
    }
}

