'use strict';
class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.totalPrice = 0;
        this._fetchProducts();
        this.render();//вывод товаров на страницу
        this.countPrice();
    }
    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000 },
            { id: 2, title: 'Mouse', price: 20 },
            { id: 3, title: 'Keyboard', price: 200 },
            { id: 4, title: 'Gamepad', price: 50 },
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
            //           block.innerHTML += item.render();
        }
    }

    countPrice() {
        this.goods.forEach(product => this.totalPrice += product.price);
        return console.log(this.totalPrice);
    }
}

class ProductItem {
    constructor(product, img = 'img/img.jpeg') {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }
    render() {
        return `<div class="products-item">
                <img src="${this.img}" class = "products-item-img">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductList();

class Cart {
    constructor() {

    }

    addToCart() {
        /*данный метод будет добавлять элемент в корзину */
    }

    renderProduct() {
        /*данный метод будет отображать добавленный элемент корзины */
    }

    deleteFromCart() {
        /*данный метод будет удалять элемент из корзины */
    }

    clearAllCart() {
        /*данный метод будет очищать полностью всю корзину */
    }
}

class ItemCart {
    constructor() {

    }
}


/*
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
                <p>${item.price} $</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item)); //массив с версткой для каждого товара
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join(' ');
};

renderPage(products);
*/
/*Задание 3:
Запятая выводилась, так как productsList это массив с версткой, при выводе массива его эллементы отображаются через запятую.
Чтобы это изменить, нужно добавить метод join() (21-ая строка), который приводит массив к строке и позволяет выбрать
как будут разделены элементы(в данном случае пробел).
*/