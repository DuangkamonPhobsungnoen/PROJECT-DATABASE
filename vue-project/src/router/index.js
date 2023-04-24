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
                import ('../views/home/AnimesView.vue')
        },
        {
            path: '/moviesview',
            name: 'movies',
            component: () =>
                import ('../views/home/MoviesView.vue')
        },
        {
            path: '/seriesview',
            name: '/series',
            component: () =>
                import ('../views/home/SeriesView.vue')
        },
        {
            path: '/trendingview',
            name: 'trending',
            component: () =>
                import ('../views/home/TrendingView.vue')
        },
        {
            path: '/reviewsview',
            name: 'reviews',
            component: () =>
                import ('../views/home/ReviewsView.vue')
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
        },
        {
            path: '/adminview',
            name: 'admin',
            component: () =>
                import ('../views/home/AdminView.vue')
        },
        {
            path: '/detailview/:id',
            name: 'detail',
            component: () =>
                import ('../views/DetailView.vue')
        },
        {
            path: '/actorview/:id',
            name: 'actor',
            component: () =>
                import ('../views/ActorView.vue')
        },
        {
            path: '/directorview/:id',
            name: 'director',
            component: () =>
                import ('../views/DirectorView.vue')
        },
        // {
        //     path: '/editpeople',
        //     name: 'editpeople',
        //     component: () =>
        //         import ('../views/EditPeopleView.vue')
        // },
        {
            path: '/editfilm',
            name: 'editfilm',
            component: () =>
                import ('../views/EditFilmView.vue')
        },
        {
            path: '/profileview/:id',
            name: 'profile',
            component: () =>
                import ('../views/ProfileView.vue')
        },
        {
            path: '/movie/add',
            name: 'movieadd',
            component: () =>
                import ('../views/MovieAddView.vue')
        },
        {
            path: '/updateMovie/:id',
            name: 'updateMovie',
            component: () =>
                import ('../components/Admin/updateMovie.vue')
        },
        {
            path: '/updateActor/:id',
            name: 'updateActor',
            component: () =>
                import ('../components/Admin/EditPeople.vue')
        },
        {
            path: '/filterMovie/',
            name: 'filterMovie',
            component: () =>
                import ('../components/Search/FilterMovie.vue')
        },

    ]
})

export default router
