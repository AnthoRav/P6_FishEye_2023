export default class PhotographerApi {
    constructor(url){
        this.url = url;
    }
    async getPhotographers(){
        try{
            const response = await fetch(this.url);
            const data = await response.json();
            return data;
        } catch(err){
            throw new Error(err);
        }
    }
}
