const fadeOut = (element) => {
const loaderWrap = document.querySelector('.wrap');
loaderWrap.classList.add('fade');
}
window.addEventListener('load', fadeOut);