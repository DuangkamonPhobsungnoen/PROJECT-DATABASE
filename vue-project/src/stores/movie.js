// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { computed, ref, reactive, onMounted } from "vue";
import axios from 'axios';
export const useMovieStore = defineStore('movie', () => {

    const test = ref([])

    const fetchMovie = async () => {
        const fetchingData = await axios.get('http://localhost:3000')
        test.value = fetchingData.data;
      }

  return { 
    fetchMovie,
    test


}
})