const images = [
    {
        preview: 'gallery/images/pic1-small.jpg',
        original: 'gallery/images/pic1-full-size.jpg',
        description: 'Картина 1'
    },
    {
        preview: 'gallery/images/pic2-small.jpg',
        original: 'gallery/images/pic2-full-size.jpg',
        description: 'Картина 2'
    },
    {
        preview: 'gallery/images/pic3-small.jpg',
        original: 'gallery/images/pic3-full-size.jpg',
        description: 'Картина 3'
    },
    {
        preview: 'gallery/images/pic4-small.jpg',
        original: 'gallery/images/pic4-full-size.jpg',
        description: 'Картина 4'
    },
    {
        preview: 'gallery/images/pic5-small.jpg',
        original: 'gallery/images/pic5-full-size.jpg',
        description: 'Картина 5'
    },
    {
        preview: 'gallery/images/pic6-small.jpg',
        original: 'gallery/images/pic6-full-size.jpg',
        description: 'Картина 6'
    },
    {
        preview: 'gallery/images/pic7-small.jpg',
        original: 'gallery/images/pic7-full-size.jpg',
        description: 'Image 3 Description'
    },
    {
        preview: 'gallery/images/pic8-small.jpg',
        original: 'gallery/images/pic8-full-size.jpg',
        description: 'Image 3 Description'
    }
   
];

const galleryContainer = document.querySelector('.gallery');

// створення картин 
const imagesInHtml = images.map(({preview, original, description }) => `
    <li class="gallery__item">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        
    </li>
`).join('');

galleryContainer.innerHTML = imagesInHtml;

galleryContainer.addEventListener('click', (event) => {

    const largeImage = event.target.dataset.source;
    console.log(largeImage)
    basicLightbox.create(`
        <img src="${largeImage}" width="1920" height="1080">
    `).show(); 
});
