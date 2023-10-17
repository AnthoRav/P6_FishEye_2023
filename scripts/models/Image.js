import Media from "./Media.js";

export default class Image extends Media {
    constructor(data) {
        super(data);
        this.image = data.image;
    }
    get picture() {
        return `/asset/images/photographers/${this.photographer}/${this.image}`
    }
}