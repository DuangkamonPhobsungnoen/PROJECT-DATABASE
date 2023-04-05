// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { computed, ref, reactive, onMounted } from "vue";
import axios from 'axios';
export const useMovieStore = defineStore('movie', () => {

    const singleMovie = ref({})
    // const rev_Movie = ref([])

    const dbanime = ref([])
    const dbmovie = ref([])
    const dbseries = ref([])

    const fetchAnime = async () => {
        const fetchingData = await axios.get('http://localhost:3000/anime')
        dbanime.value = fetchingData.data;
      }
    
      const fetchMovie = async () => {
        const fetchingData = await axios.get('http://localhost:3000/movie')
        dbmovie.value = fetchingData.data;
      }

      const fetchSeries = async () => {
        const fetchingData = await axios.get('http://localhost:3000/series')
        dbseries.value = fetchingData.data;
      }

      const fetchSingleMovie = async (id) => {
        return (await axios.get(`http://localhost:3000/movie/${id}`)).data[0]
       }

      // async function fetchSingleMovieData(id){
      //   singleMovie.value = await fetchSingleMovie(id)
      // }
      // const fetchReview = async (id) => {
      //   return (await axios.get(`http://localhost:3000/rev/${id}`)).data
      //  }

  return { 
    fetchMovie,
    fetchAnime,
    fetchSeries,
    dbseries,
    dbanime,
    dbmovie,
    // fetchSingleMovieData,
    fetchSingleMovie,
    singleMovie,


}
})