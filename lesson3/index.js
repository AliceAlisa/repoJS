'use strict';

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];//массив товаров из JSON документа
        this._getProducts()
            .then(data => { //data - объект js
                this.goods = [...data];
                this.render()
            });
    }

    _getProducts() {

        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
        }
    }

    countPrice() {
        let sum = 0;
        this.goods.forEach(product => sum += product.price);
        return console.log(sum);
    }
}

class ProductItem {
    constructor(product, img = 'img/img.jpeg') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render() {
        return `<div class="products-item">
                <img src="${this.img}" class = "products-item-img">
                <h3>${this.title}</h3>
                <p>${this.price} $ </p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductsList();

class CartList {
    constructor(container = '.cart') {
        this.container = container;
        this.goods = [];
        this.sumCart = 0;
        this._getProducts()
            .then(data => {
                this.goods = [...data.contents];
                this.render()
            });
        this.buttonClick();
    }

    _getProducts() {

        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new CartItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
        }
        this.countPrice();
        document.querySelector(this.container).insertAdjacentHTML("beforeend", `<p class="price">Итого: <span class="deco">${this.sumCart}$</span></p>`);
    }

    buttonClick() {
        document.querySelector('.btn-cart').addEventListener('click', () => {
            document.querySelector(this.container).classList.toggle('cart-open');
        })
    }

    countPrice() {
        this.goods.forEach(product => this.sumCart += product.price);
        return this.sumCart;
    }
}

class CartItem {
    constructor(product, img = 'img/img.jpeg') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
        this.amount = 1;
    }
    render() {
        return `<div class="cart-item">
                <img src="${this.img}" class = "cart-item-img">
                <h3>${this.title}</h3>
                <p>${this.price} $ </p>
                <p>Количество: ${this.amount} шт.</p>
                <button class="buy-btn">Удалить</button>
            </div>`
    }
}

let cartlist = new CartList();
