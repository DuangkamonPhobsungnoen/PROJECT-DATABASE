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

        movId.value = fetchingData.data.movId
        console.log(movId.value)

    };

    const addActor = async () => {
        // console.log(movId.value);
        // console.log(actor.value.fname);
        
        const fetchingData = await axios.post('http://localhost:3000/actor/add',{
            fname: actor.value.fname,
            lname: actor.value.lname,
            gender: actor.value.gender,
            movId: movId.value
        }) 


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