// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { computed, ref, reactive, onMounted } from "vue";
import axios from 'axios';
import { useRouter } from 'vue-router';
export const useDirectorStore = defineStore('director', () => {

    const movPerActor = ref([])
    const fetchActor = async(id) =>{
        console.log(id);
        console.log((await axios.get(`http://localhost:3000/actor/mov/${parseInt(id)}`)).data)
        // const fetchingData = await axios.get(`http://localhost:3000/actor/mov/${id}`)
        
    }
    
      
    


  return { 
    fetchActor,
    movPerActor

}
})