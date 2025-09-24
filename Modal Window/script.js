'use script';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');
//after all selector now it will work like an array
//all the elements with same clas will work as array elements
function closeModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

}
function openModal() {
    //no need of dot its just to select
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

}
for (let index = 0; index < btnsShowModal.length; index++)
    btnsShowModal[index].addEventListener('click', openModal)
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
//how to handle keypress button
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !(modal.classList.contains('hidden'))) {

        closeModal();
    }


})

