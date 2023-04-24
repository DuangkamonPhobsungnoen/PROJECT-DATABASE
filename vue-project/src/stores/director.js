// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { computed, ref, reactive, onMounted } from "vue";
import axios from 'axios';
import { useRouter } from 'vue-router';
export const useDirectorStore = defineStore('director', () => {

    const movPerActor = ref([])
    const fetchActor = async(id) =>{
        console.log(id);
        // const fetchingData = await axios.get(`http://localhost:3000/actor/mov/${id}`)
        return ((await axios.get(`http://localhost:3000/actor/mov/${id}`)).data)
        // const fetchingData = await axios.get(`http://localhost:3000/actor/mov/${id}`)
        // console.log(fetchingData.data);
        
    }

    const movPerDir = ref([])
    const fetchDir = async(id) =>{
        console.log(id);
        // const fetchingData = await axios.get(`http://localhost:3000/actor/mov/${id}`)
        return ((await axios.get(`http://localhost:3000/actor/mov/${id}`)).data)
        // const fetchingData = await axios.get(`http://localhost:3000/actor/mov/${id}`)
        // console.log(fetchingData.data);
        
    }
    
      
    


  return { 
    movPerDir,
    fetchActor,
    movPerActor,
    fetchDir
    


}
})