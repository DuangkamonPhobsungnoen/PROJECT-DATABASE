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

    const allTrending = ref([])
    const fetchTrending = async () => {
      const fetchingData = await axios.get('http://localhost:3000/trending')
      allTrending.value = fetchingData.data
    }

    const selectTrend = ref("")
    const fetchSelectTrend = async () => {
      // console.log(selectTrend.value);
      if(selectTrend.value == "All"){
        fetchTrending()
      }
      else{
        const fetchingData = await axios.post('http://localhost:3000/trending',
        {
          type:selectTrend.value
        })
        allTrending.value = fetchingData.data
      }
      
      
    }


    const fetchAnime = async () => {
        const fetchingData = await axios.get('http://localhost:3000/anime')
        dbanime.value = fetchingData.data;
        filAnime.value = fetchingData.data;
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
      const filAnime = ref([]) 
      let text = ref('')
      function filteranime(genId){
        if (genId != 'Genres') {
          filAnime.value = dbanime.value.filter((anime) => anime.gen_title == genId);
          console.log('filAnime.value.length', filAnime.value.length)
          if(filAnime.value.length == 0) {
             text.value = 'Not found anime in ' + genId
          }
          else {
            text.value = ''
          }
        }
        else {
          filAnime.value = dbanime.value
        }
      }
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
    fetchTrending,
    allTrending,
    selectTrend,
    fetchSelectTrend,
    filteranime,
    filAnime,
    text,

}
})