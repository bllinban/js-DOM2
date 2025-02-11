export function clearGallery() {
    const gallery = document.getElementById('gallery');
    while (gallery.firstChild) {
        gallery.removeChild(gallery.firstChild);
    }
}

export function removeLastImage() {
    const gallery = document.getElementById('gallery');
    if (gallery.lastChild) {
        gallery.removeChild(gallery.lastChild);
    }
}

export function reverseGallery() {
    const gallery = document.getElementById('gallery');
    const images = Array.from(gallery.children);
    gallery.innerHTML = '';
    images.reverse().forEach(img => gallery.appendChild(img));
}