const images = document.querySelectorAll('.images');
const modal = document.getElementById('modal');
const modalDescrition = document.getElementById('modal-description');

images.forEach(image => {
    image.addEventListener('click', () => {
        modalDescrition.textContent = image.dataset.descrition;
        modal.style.display='block';
    });
});

document.querySelector('.close').addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if(event.target === modal){
        modal.style.display = 'none';
    }
});
