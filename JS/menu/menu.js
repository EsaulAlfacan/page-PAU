document.addEventListener('DOMContentLoaded', function () {
    const menuOpen = document.querySelector('.menu__open');
    const menuClose = document.querySelector('.menu__close');
    const menuLista = document.querySelector('.menu__lista');

    menuOpen.addEventListener('click', function () {
        menuLista.style.display = 'flex';
        menuOpen.style.display = 'none';
        menuClose.style.display = 'flex';
    });

    menuClose.addEventListener('click', function () {
        menuLista.style.display = 'none';
        menuOpen.style.display = 'flex';
        menuClose.style.display = 'none';
    });
});
