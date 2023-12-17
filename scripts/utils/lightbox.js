
export const displayLightbox = medias => {
    //selection des elements de la lightbox
    const lightboxModal = document.querySelector('.lightbox_modal');
    const btnClose = document.querySelector('.btn_close_lightbox');
    const btnPrevious = document.querySelector('.btn_previous');
    const btnNext = document.querySelector('.btn_next');
    const lightboxMedia = document.querySelector('.lightbox_media');
    //const lightboxAllMedia = Array.from(document.querySelectorAll('#light_medias'));
    const lightboxAllMedia = document.querySelectorAll('.media-lightbox');

    const mediasList = medias.medias;
    let currentIndex = 0;
    //boucle sur les medias avec ecoute surclic de chaque elements pour ouvrir la lightbox
    lightboxAllMedia.forEach((media, index) => {
        media.addEventListener('click', () => {
            currentIndex = index
            lightboxModal.style.display = 'flex';
            btnClose.focus();
            lightboxTemplate();
        });
        /*
        media.addEventListener('keypress', (e) => {
            if (e.key === 'Space' || e.key === 'Enter') {
            //console.log('texte')
            lightboxModal.style.display = 'flex';
            btnClose.focus();
            lightboxTemplate();
            }
        }) 
        */
    });
    
    function handleKey(e){
        if (e.key === 'Space' && e.key === 'Enter') {
        console.log('texte')
        lightboxModal.style.display = 'flex';
        btnClose.focus();
        lightboxTemplate();
        }
    }
    
    lightboxAllMedia.forEach(function(e) {
        e.addEventListener('keyup', handleKey);
    });

    //fermeture de la lightbox
    const closeLightbox = () => {
        lightboxModal.style.display = 'none';
        lightboxMedia.innerHTML = '';
    };
    btnClose.addEventListener('click', () => closeLightbox());

    //contenu de la lightbox
    const lightboxTemplate = () => {
        const currentMedia = mediasList[currentIndex];
        //console.log(currentMedia)
        //console.log(currentIndex)
        lightboxMedia.innerHTML = `
            ${currentMedia.image ? `
            <img src="assets/photographers/${currentMedia.image}" alt="${currentMedia.title}" >` : 
            `<video controls aria-label="${currentMedia.title}"><source src="assets/photographers/${currentMedia.video}"    
            type="video/mp4"></video>`}
            <h2 class="media-card-title">${currentMedia.title}</h2>
        `
    };

    //fonctions pour naviguez dans la lightbox avec les flèches
    const nextMedia = () => {
        currentIndex++; //augmentation de l'index, passage au medias suivant du tableau
        if (currentIndex > mediasList.length - 1) currentIndex = 0; //retour au debut du tableau
        lightboxTemplate(); //affichage du media
    };

    const previousMedia = () => {
        currentIndex--; //diminution de l'index, passage au medias précédent du tableau
        if (currentIndex < 0) currentIndex = mediasList.length - 1; //retour a la fin du tableau
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
