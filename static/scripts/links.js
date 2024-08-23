const openImageModal = (imageSrc) => {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
    const modalImage = document.getElementById('modalImage');
    modalImage.src = imageSrc;
};

window.onload = () => {
    Array.from(document.links)
        .filter(link => link.hostname != window.location.hostname)
        .forEach(link => link.target = '_blank');

    Array.from(document.images)
        .filter(image => image.parentElement.parentElement.classList.contains('news'))
        .forEach(image => image.onclick = () => openImageModal(image.src));

    window.onclick = (event) => {
        if (event.target.tagName !== 'IMG') {
            modal.style.display = 'none';
        }
    }
}
