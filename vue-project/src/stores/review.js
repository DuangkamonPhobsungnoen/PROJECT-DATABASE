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
    const revShow = ref([])
    const UserRating = ref(0)
    
    function convertTime(time){
        const dateObj = new Date(time);

        const options = { 
            month: 'short', 
            day: '2-digit', 
            year: 'numeric', 
            hour: 'numeric', 
            minute: '2-digit', 
            hour12: true 
        };
        return dateObj.toLocaleString('en-US', options);
    }


    const reviewShow = async () => {
        const fetchingData = await axios.get(`http://localhost:3000/rev/show`)
        revShow.value = fetchingData.data

     }




    const addLike = async (item) => {
        // console.log(item);
        const fetchingData = await axios.put(`http://localhost:3000/rev/addLike/${item.rev_id}`,
        {
            user: item.u_id
        })
        item.rev_like = fetchingData.data.likeNum

     }

    const fetchReview = async (id) => {
        return (await axios.get(`http://localhost:3000/rev/${id}`)).data
    }

    const addReview = async (content, user_id, movie_id) => {
        const fetchData = await axios.post('http://localhost:3000/rev/add', {
            rev_text: content,
            rev_rate: UserRating.value, // ข้อมูล rating ที่เชื่อม ไปทำ bqckend
            u_id: user_id,
            mov_id: movie_id
        })
        if(fetchData.data.status == 'error'){
            alert(fetchData.data.message)
            revData.rev_text = ''
            UserRating.value = 0
        }else{
            rev_Movie.value = await fetchReview(movie_id)
            revData.rev_text = ''
            UserRating.value = 0
        }
        
        
    }
    return {
        fetchReview,
        rev_Movie,
        revData,
        addReview,
        UserRating,
        addLike,
        convertTime,
        reviewShow,
        revShow
        // setRating


    }
})