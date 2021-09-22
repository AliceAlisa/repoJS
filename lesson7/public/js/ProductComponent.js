Vue.component('products', {
    data() {
        return {
            catalogUrl: '/catalogData.json',
            filtered: [],
            products: [],
        }
    },
    mounted() {
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for (let item of data) {
                    item.imgPath = `img/${item.id_product}.png`
                    this.$data.products.push(item);
                    this.$data.filtered.push(item);
                }
            });
    },
    methods: {
        filter(userSearch) {
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    template: `
                <section class="content container">

                <h3 class="third__title">Fetured Items</h3>
                <p class="paragraph__content">Shop for items based on what we featured in this week</p>

                <div class="product__box">
                <product-item v-for="product of filtered" :key="product.id_product" :product="product"></product-item>
                </div>

                <div class="button__product">
                <a href="#" class="product__button__link">
                    <span class="button__text">Browse All Product</span>
                </a>
                </div>

                </section>
    `
});

Vue.component('productItem', {
    props: ['product'],
    template: `
    <article class="product margin__right">
    <div class="product__img">
        <img :src="product.imgPath" alt="photo of item" class="img-product">
    </div>
    <div class="overlay">

        <button class="hidden__button" @click="$root.$refs.cart.addProduct(product)">
        <img src="img/addtocart.svg" class="basket__logo" alt="basket logo">
        <span>Add to Cart</span>
        </button>
    </div>
    <div class="product__text">
        <a href="#" class="product__link">
            <h4 class="fourth-title">{{ product.product_name }}</h4>
        </a>
        <p class="paragraph__product">{{ product.description }}</p>
        <strong class="product__price">{{ product.price }} $</strong>
    </div>
</article>    
    `
});