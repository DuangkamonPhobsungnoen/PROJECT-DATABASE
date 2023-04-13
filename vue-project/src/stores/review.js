// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { computed, ref, reactive, onMounted } from "vue";
import axios from 'axios';
export const useReviewStore = defineStore('review', () => {

    const rev_Movie = ref([])
    // rev_text, rev_rate, u_id, mov_id
    const revData = reactive({
        rev_text: '',
        // rev_rate: 5
    })

    const UserRating = ref(0)
    function setRating(rating){
        UserRating.value = rating
    }


    const fetchReview = async (id) => {
        return (await axios.get(`http://localhost:3000/rev/${id}`)).data
    }

    const addReview = async (content, user_id, movie_id) => {
        await axios.post('http://localhost:3000/rev/add', {
            rev_text: content,
            rev_rate: UserRating.value, // ข้อมูล rating ที่เชื่อม ไปทำ bqckend
            u_id: user_id,
            mov_id: movie_id
        })
        rev_Movie.value = await fetchReview(movie_id)
        revData.rev_text = ''
        
    }
    return {
        fetchReview,
        rev_Movie,
        revData,
        addReview,
        UserRating,
        setRating


    }
})