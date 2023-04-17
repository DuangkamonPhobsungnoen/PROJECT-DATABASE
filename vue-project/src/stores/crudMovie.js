import { defineStore } from 'pinia'
import { computed, ref, reactive, onMounted } from "vue";
import axios from 'axios';
export const usecrudMovieStore = defineStore('movie', () => {

    const actor = ref({
        fname: '',
        lname: '',
        gender: '',
    })



    const test = 'hi'
    const allmov = ref([])
    const fetchAll = async () => {
        const fetchingData = await axios.get('http://localhost:3000/all')
        allmov.value = fetchingData.data;
    }

    const movId = ref(0)
    const submitformfilm = async (filmadd) => {
        const fetchingData = await axios.post('http://localhost:3000/movie/add', filmadd)

        movId.value = fetchingData.data.message
        console.log(movId.value)

    };

    const addActor = async () => {
        // const fetchingData = await axios.post('http://localhost:3000/actor/add', actor.value) 


    };

    const removeMovie = async (id) => {
        console.log(id)
        const fetchingData = await axios.delete(`http://localhost:3000/movie/delete/${id}`)
    }



    return {
        fetchAll,
        allmov,
        submitformfilm,
        test,
        removeMovie,
        actor,
        addActor,
        movId

    }
})