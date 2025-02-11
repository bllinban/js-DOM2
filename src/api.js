export function loadMoreImages(page, gallery) {
    console.log(`Викликається loadMoreImages з page=${page}`);
    return fetch(`https://picsum.photos/v2/list?page=${page}&limit=4`)
        .then(response => response.json())
        .then(images => {
            images.forEach(image => {
                const imgElement = document.createElement('img');
                imgElement.src = image.download_url;
                imgElement.alt = "Image from picsum.photos";
                imgElement.classList.add('gallery-image');
                gallery.appendChild(imgElement);
            });
        })
        .catch(error => console.error('Error fetching images:', error));
}