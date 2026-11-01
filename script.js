// ==========================================
//  АДАПТИВНОЕ МЕНЮ (БУРГЕР)
// ==========================================
const burgerBtn = document.getElementById('burgerBtn');
const navLinks = document.getElementById('navLinks');

burgerBtn.addEventListener('click', () => {
    // Переключаем класс 'active', который открывает/скрывает меню в CSS
    navLinks.classList.toggle('active');
});

// ==========================================
//  РАБОТА С КОРЗИНОЙ И DOM (МАГАЗИН)
// ==========================================
const addBtns = document.querySelectorAll('.add-btn');
const cartList = document.getElementById('cartList');
const totalPrice = document.getElementById('totalPrice');

let sum = 0;
let isFirstItem = true;

addBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Убираем текст «Корзина пуста» при покупке первого товара
        if (isFirstItem) {
            cartList.innerHTML = '';
            isFirstItem = false;
        }

        // Читаем данные из атрибутов data-* у кнопки
        const name = btn.getAttribute('data-name');
        const price = Number(btn.getAttribute('data-price'));

        // Создаем новый HTML-тег <li> через DOM
        const li = document.createElement('li');
        li.textContent = `${name} — ${price} KZT`;
        cartList.appendChild(li);

        // Считаем общую сумму
        sum += price;
        totalPrice.textContent = sum;
    });
});

// ==========================================
//  МИНИ КАЛЬКУЛЯТОР ПРИЗОВЫХ
// ==========================================
const winsInput = document.getElementById('winsInput');
const calcBtn = document.getElementById('calcBtn');
const calcResult = document.getElementById('calcResult');

calcBtn.addEventListener('click', () => {
    const wins = Number(winsInput.value);
    
    // Простая формула: 1 победа = 10 000 KZT призовых
    const prize = wins * 10000;
    
    calcResult.textContent = `Призовые: ${prize} KZT`;
});

// ==========================================
//  ФОРМА РЕГИСТРАЦИи
// ==========================================
const regForm = document.getElementById('regForm');

regForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Отменяем стандартную перезагрузку страницы браузером

    const name = document.getElementById('username').value;
    alert(`Поздравляем, ${name}! Вы успешно зарегистрированы на турнир!`);

    regForm.reset(); // Сбрасываем поля формы
});