import { defineStore } from 'pinia'
import { computed, ref, reactive, onMounted } from "vue";
import axios from 'axios';
export const usecrudMovieStore = defineStore('movie', () => {

    const test = 'hi'
    const allmov = ref([])
    const fetchAll = async () => {
        const fetchingData = await axios.get('http://localhost:3000/all')
        allmov.value = fetchingData.data;
    }

    const submitformfilm = async (filmadd) => {
        console.log(filmadd.sort1)
        const fetchingData = await axios.post('http://localhost:3000/movie/add', filmadd
            // title: filmadd.title ,
            // summary: filmadd.story,
            // year: filmadd.year,
            // time: 150,
            // type: filmadd.sort1
            
        )
        

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
        removeMovie

    }
})