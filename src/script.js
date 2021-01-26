const KEY_ESC = 27;
const city = document.querySelector(`#city`);
const currentCity = document.querySelector(`#current_city`)
const modal = document.querySelector(`#myModal`);
const cls = document.querySelector(`.close`);
const cities = document.querySelectorAll(`.cities`);
const catalog = document.querySelector(`#catalog`);
const catalogMenuContainer = document.querySelector(`#catalog_menu_container`);
city.addEventListener(`click`, () => modal.style.display = `block`);
cls.addEventListener(`click`, () => modal.style.display = `none`); //закрываем модальное окно при нажатии на x
window.addEventListener(`click`, function (e) { //закрываем модальное окно при клике на пустое место вне модального окна
    if (e.target == modal) {
        modal.style.display = "none";
    }
});
window.addEventListener('keydown', function(e) { //закрываем модальное окно при нажатии на клавишу ESC
    if (e.keyCode == KEY_ESC) {
        modal.style.display = "none";
    }
});
cities.forEach(cit => cit.addEventListener(`click`, function (e) {
    currentCity.textContent = e.target.textContent;
    modal.style.display = "none";
}));
catalog.addEventListener(`click`, function () {
    if (catalogMenuContainer.classList.contains('visible_menu')) {
        catalogMenuContainer.classList.remove(`visible_menu`);
    } else {
        catalogMenuContainer.classList.add(`visible_menu`);
    }
});
