import { defineStore } from 'pinia'
import { computed, ref, reactive, onMounted } from "vue";
import axios from 'axios';
export const useDetailMovieStore = defineStore('detailMovie', () => {

    const checkAdd = ref({})

    const addWatchList = async (u_id, mov_id) => {
        // console.log(u_id, mov_id);
        const fetchingData = await axios.post(`http://localhost:3000/watch/add`,
        {
            u_id:u_id,
            mov_id:mov_id
        })
        // checkAdd.value.state = 
     }

     const delWatchList = async (u_id, mov_id) => {
        // console.log(u_id, mov_id);
        const fetchingData = await axios.post(`http://localhost:3000/watch/delete`,
        {
            u_id:u_id,
            mov_id:mov_id
        })
        // checkAdd.value.state = checkStateWatch(u_id, mov_id)
     }


    const checkStateWatch = async (u_id, mov_id) => {
        // const fetchingData = await axios.post(`http://localhost:3000/watch/check`,
        // {
        //     u_id:u_id,
        //     mov_id:mov_id
        // })
        return (await axios.post(`http://localhost:3000/watch/check`,
        {
            u_id:u_id,
            mov_id:mov_id
        })).data.state
        // checkAdd.value = fetchingData.data.state

     }



    return {
        addWatchList,
        checkStateWatch,
        checkAdd,
        delWatchList

    }
})