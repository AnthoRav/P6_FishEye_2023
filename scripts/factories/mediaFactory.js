import ImageFactory from "./imageFactory.js";
import VideoFactory from "./videoFactory.js";

export default class MediasFactory {
    constructor(data) {
        if (data.image) {
            return new ImageFactory(data)
        } else if (data.video) {
            return new VideoFactory(data)
        } else  {
            throw 'Unknown data type'
        }
    }
}