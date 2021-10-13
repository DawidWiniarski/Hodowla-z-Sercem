
const burger = document.querySelector('.navbar-collapse');
const link = document.querySelectorAll('.nav-link');


link.forEach(links => links.addEventListener('click', () => {
    burger.classList.remove('show');
}))

