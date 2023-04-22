import { defineStore } from 'pinia'
import { computed, ref, reactive, onMounted } from "vue";
import axios from 'axios';
export const usecrudMovieStore = defineStore('crudmovie', () => {


    const actorAdd = ref([])
    const test = 'hi'
    const allmov = ref([])
    // all movie
    const fetchAll = async () => {
        const fetchingData = await axios.get('http://localhost:3000/all')
        allmov.value = fetchingData.data;
    }

    const movId = ref(0)

    const submitformfilm = async (filmadd) => {
        const fetchingData = await axios.post('http://localhost:3000/movie/add', filmadd)

        movId.value = fetchingData.data.movId
        console.log(movId.value)
        console.log(filmadd)

    };

    const addActor = async (actor) => {
        
        const fetchingData = await axios.post('http://localhost:3000/actor/add',{
            fname: actor.fname,
            lname: actor.lname,
            gender: actor.gender,
            movId: movId.value
        }) 
        actorAdd.value.push(fetchingData.data.actAdded)
        console.log(fetchingData.data.actAdded);


    };

    const removeMovie = async (id) => {
        console.log(id)
        const fetchingData = await axios.delete(`http://localhost:3000/movie/delete/${id}`)
        fetchAll()
    }

    const updateMovie = async (id) => {
        console.log(id)
       
    }

    return {
        fetchAll,
        allmov,
        submitformfilm,
        test,
        removeMovie,
        // actor,
        addActor,
        movId,
        updateMovie,
        actorAdd

    }
})