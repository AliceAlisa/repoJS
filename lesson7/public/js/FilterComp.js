Vue.component('filter-el', {
    data() {
        return {
            userSearch: ''
        }
    },
    template: `<form action="#" class="search-form" @submit.prevent="$parent.$refs.products.filter(userSearch)">
                <input type="text" class="search-field" v-model="userSearch">
                <button type="submit" class="btn-search">
                <img src="img/loupe.svg" alt="menu photo2">
                
                </button>
            </form>`
})

/*<a href="#">
    <i class="fas fa-search"></i>
                            <img src="img/loupe.svg" alt="menu photo2">
                        </a>*/