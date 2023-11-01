import Vue from 'vue'
import VueRouter from 'vue-router'
import product from "@/components/product.vue";
import koefPolitic from "@/components/koefPolitic.vue";
import ShopInfo from "@/components/ShopInfo.vue";
import shopCart from "@/components/cart.vue";
Vue.use(VueRouter);
let router = new VueRouter({
    routes: [
        {
            path: '/1',
            name: 'catalog',
            component: null // не существует пока что
        },
        {
            path: '/',
            name: 'product',
            component: product,
            props: true
        },
        {
            path: '/koefPolitic',
            name: 'koefPolitic',
            component: koefPolitic
        },
        {
            path: '/shopInfo',
            name: 'shopInfo',
            component: ShopInfo
        },
        {
            path:'/cart',
            name:'cart',
            component:shopCart
        }
    ]

})
export default router;
