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
            import('../views/home/AnimesView.vue')
    },
    {
        path: '/moviesview',
        name: 'movies',
        component: () =>
            import('../views/home/MoviesView.vue')
    },
    {
        path: '/seriesview',
        name: '/series',
        component: () =>
            import('../views/home/SeriesView.vue')
    },
    {
        path: '/trendingview',
        name: 'trending',
        component: () =>
            import('../views/home/TrendingView.vue')
    },
    {
        path: '/reviewsview',
        name: 'reviews',
        component: () =>
            import('../views/home/ReviewsView.vue')
    },
    {
        path: '/signinview',
        name: 'signin',
        component: () =>
            import('../views/SigninView.vue')
    },
    {
        path: '/signupview',
        name: 'signup',
        component: () =>
            import('../views/SignupView.vue')
    },
    {
        path: '/adminview',
        name: 'admin',
        component: () =>
            import('../views/home/AdminView.vue')
    },
    {
        path: '/detailview',
        name: 'detail',
        component: () =>
            import('../views/DetailView.vue')
    },
    {
        path: '/editpeople',
        name: 'editpeople',
        component: () =>
            import('../views/EditpeopleView.vue')
    },
    {
        path: '/editfilm',
        name: 'editfilm',
        component: () =>
            import('../views/EditfilmView.vue')
    },
    {
        path: '/profileview',
        name: 'profile',
        component: () =>
            import('../views/ProfileView.vue')
    },
    {
        path: '/actorview',
        name: 'actor',
        component: () =>
            import('../views/ActorView.vue')
    },

    ]
})

export default router
