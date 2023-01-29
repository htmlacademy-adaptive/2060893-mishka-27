let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let modal = document.querySelector('.modal');
let productButton = document.querySelector('.modal-button');
<<<<<<< HEAD
let map = document.querySelector('.contacts');
=======
>>>>>>> 68ab54979b4efed77f4277b995aa6629b82a72c6

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

productButton.onclick = function() {
  modal.style.display = "block";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
<<<<<<< HEAD

map.classList.remove('contacts--nojs');
=======
>>>>>>> 68ab54979b4efed77f4277b995aa6629b82a72c6
