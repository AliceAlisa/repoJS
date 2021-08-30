'use strict';

class Burger {
    constructor(size, filling, topping = `без добавок`) {
        this.size = size;
        this.filling = filling;
        this.topping = topping;
        this.burgerPrice = 0;
        this.burgerCal = 0;
        this.getBurger();
    };

    addBurgerSize() {
        if (this.size == 'маленький' || this.size == 'small') {
            this.burgerPrice += 50;
            this.burgerCal += 20;
        } else if (this.size == 'большой' || this.size == 'big') {
            this.burgerPrice += 100;
            this.burgerCal += 40;
        } else {
            return alert('Вы задали неверный размер. Попробуйте ещё раз')
        }
    };

    addBurgerFilling() {
        if (this.filling == 'сыр' || this.filling == 'chees') {
            this.burgerPrice += 10;
            this.burgerCal += 20;
        } else if (this.filling == 'салат' || this.size == 'salad') {
            this.burgerPrice += 20;
            this.burgerCal += 5;
        } else if (this.filling == 'картофель' || this.size == 'potato') {
            this.burgerPrice += 15;
            this.burgerCal += 10;
        } else {
            return alert('Такой начинки нет в меню. Попробуйте ещё раз')
        }
    };

    addBurgerTopping() {
        if (this.topping == 'приправы' || this.topping == 'seasoning') {
            this.burgerPrice += 15;
            this.burgerCal += 0;
        } else if (this.topping == 'майонез' || this.topping == 'mayonnaise') {
            this.burgerPrice += 20;
            this.burgerCal += 5;
        } else {
            return;
        }
    };

    getBurgerPriceAndCal() {
        this.addBurgerSize();
        this.addBurgerFilling();
        this.addBurgerTopping();
        console.log(`Стоимость вашего бургера составляет: ${this.burgerPrice} рублей`);
        console.log(`Каллорийность вашего бургера составляет: ${this.burgerCal} каллорий`);
    };

    getBurger() {
        console.log(`Вы заказали ${this.size} бургер. С начинкой: ${this.filling} и ${this.topping}`);
        this.getBurgerPriceAndCal();
    };

}
let burger = new Burger('большой', 'картофель', 'приправы');