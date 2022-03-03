function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (let i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();

const UI = {
    BURGER: document.querySelector('.header__burger'),
    NAV: document.querySelector('.nav__body'),
    LOGO: document.querySelector('.header__logo'),
    BODY: document.querySelector('body'),
}

UI.BURGER.addEventListener('click', openNav)

function openNav () {
    UI.BURGER.classList.toggle('active');
    UI.NAV.classList.toggle('active');
    UI.LOGO.classList.toggle('active');
    UI.BODY.classList.toggle('lock');
}