import { loadMoreImages } from './api.js';
import { clearGallery, removeLastImage, reverseGallery } from './gallery.js';

const gallery = document.getElementById('gallery');
let page = Math.floor(Math.random() * 100) + 1;

document.getElementById('load-more').addEventListener('click', () => {
    loadMoreImages(page, gallery).then(() => page++);
});
document.getElementById('clear').addEventListener('click', () => clearGallery(gallery));
document.getElementById('remove-last').addEventListener('click', () => removeLastImage(gallery));
document.getElementById('reverse').addEventListener('click', () => reverseGallery(gallery));