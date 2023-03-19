import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/animesview',
            name: 'animes',
            component: () =>
                import ('../views/AnimesView.vue')
        },
        {
            path: '/moviesview',
            name: 'movies',
            component: () =>
                import ('../views/MoviesView.vue')
        },
        {
            path: '/seriesview',
            name: '/series',
            component: () =>
                import ('../views/ReviewsView.vue')
        },
        {
            path: '/trendingview',
            name: 'trending',
            component: () =>
                import ('../views/TrendingView.vue')
        },
        {
            path: '/reviewsview',
            name: 'reviews',
            component: () =>
                import ('../views/ReviewsView.vue')
        },
        {
            path: '/signinview',
            name: 'signin',
            component: () =>
                import ('../views/SigninView.vue')
        },
        {
            path: '/signupview',
            name: 'signup',
            component: () =>
                import ('../views/SignupView.vue')
        }
    ]
})

export default router