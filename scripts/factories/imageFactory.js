export default class ImageFactory{
    constructor(data){
        this.data = data;
    }
    createImageCard() {
    const card = document.createElement( 'card' );
    const imageCard = `

    <h2>kjhbùm</h2>
    `;
   // <img class="gallery_thumbnail" src="./assets/images/photographers/${this.photographer}/${this.data.image}" alt="${this.data.alt}">
    card.innerHTML = imageCard;
    return card;
    }
}