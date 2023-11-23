
export const displayLightbox = medias => {
    const lightboxModal = document.querySelector('.lightbox_modal');
    const btnClose = document.querySelector('.btn_close_lightbox');
    const btnPrevious = document.querySelector('.btn_previous');
    const btnNext = document.querySelector('.btn_next');
    const lightboxMedia = document.querySelector('.lightbox_media');
    const lightboxAllMedia = Array.from(document.querySelectorAll('.media-card a, video'));

    //const photographer = medias.photographer;
    const mediasList = medias.medias;
    let currentIndex = 0;

    lightboxAllMedia.forEach((media, index) => {
        media.addEventListener('click', () => {
            //const mediaId = media.dataset.media;
            //const mediaIndex = mediasList.findIndex(media => media.id == mediaId);
            //currentIndex = mediaIndex;
            currentIndex = index
            lightboxModal.style.display = 'flex';
            lightboxTemplate();
        });
    });
    const closeLightbox = () => {
        lightboxModal.style.display = 'none';
        lightboxMedia.innerHTML = '';
    };
    btnClose.addEventListener('click', () => closeLightbox());

    const lightboxTemplate = () => {
        const currentMedia = mediasList[currentIndex];
        //console.log(currentMedia)
        //console.log(currentIndex)
        lightboxMedia.innerHTML = `
            ${currentMedia.image ? `
            <img src="../assets/photographers/${currentMedia.image}" alt="${currentMedia.alt}">` : 
            `<video controls aria-label="${currentMedia.alt}"><source src="./assets/photographers/${currentMedia.video}" 
            type="video/mp4"></video>`}
            <h2 class="media-card-title">${currentMedia.title}</h2>
        
        `
    };

    const nextMedia = () => {
        currentIndex++; //augmentation de l'index, passage au medias suivant du tableau
        if (currentIndex > mediasList.length - 1) currentIndex = 0; 
        lightboxTemplate();
    };

    const previousMedia = () => {
        currentIndex--;
        if (currentIndex < 0) currentIndex = mediasList.length - 1;
        lightboxTemplate();
    };
    //ecoute au clic des fleches de la lightbox
    btnPrevious.addEventListener('click', () => previousMedia());
    btnNext.addEventListener('click', () => nextMedia());

    //gestion au clavier de la lightbox
    document.addEventListener('keyup', e => {
        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                previousMedia();
                break;
            case 'ArrowRight':
                nextMedia();
                break;
        }
    });
}
