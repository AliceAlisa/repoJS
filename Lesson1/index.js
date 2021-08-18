'use strict';
const products = [
    { id: 1, title: 'Notebook', price: 2000, src: 'img/img.jpeg' },
    { id: 2, title: 'Mouse', price: 20, src: 'img/img.jpeg' },
    { id: 3, title: 'Keyboard', price: 200, src: 'img/img.jpeg' },
    { id: 4, title: 'Gamepad', price: 50, src: 'img/img.jpeg' },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (item) => {
    return `<div class="products-item">
                <img src = "${item.src}" class = "products-item-img">
                <h3>${item.title}</h3>
                <p>${item.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item)); //массив с версткой для каждого товара
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join(' ');
};

renderPage(products);

/*Задание 3:
Запятая выводилась, так как productsList это массив с версткой, при выводе массива его эллементы отображаются через запятую.
Чтобы это изменить, нужно добавить метод join() (21-ая строка), который приводит массив к строке и позволяет выбрать
как будут разделены элементы(в данном случае пробел).
*/