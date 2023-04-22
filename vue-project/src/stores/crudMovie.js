import { defineStore } from 'pinia'
import { computed, ref, reactive, onMounted } from "vue";
import axios from 'axios';
export const usecrudMovieStore = defineStore('crudmovie', () => {


    const actorAdd = ref([])
    const test = 'hi'
    const allmov = ref([])

    const allActor = ref([])
    const fetchActor = async () => {
        const fetchingData = await axios.get('http://localhost:3000/actor')
        allActor.value = fetchingData.data;
    }

    const editActorFname = ref("")
    const fetchSingleActor1 = async (id) => {
        return (await axios.get(`http://localhost:3000/actor/${id}`)).data[0]?.act_fname; 
    }
    const editActorLname = ref("")
    const fetchSingleActor2 = async (id) => {
        return (await axios.get(`http://localhost:3000/actor/${id}`)).data[0]?.act_lname; 
    }
    const editActorGender = ref("")
    const fetchSingleActor3 = async (id) => {
        return (await axios.get(`http://localhost:3000/actor/${id}`)).data[0]?.act_gender; 
    }

    
    const updatePeople = async (id) => {
        const fetchingData = await axios.put(`http://localhost:3000/actor/edit/${id}`, {
            fname: editActor.value.act_fname, 
            lname: editActor.value.act_lname, 
            gender: editActor.value.act_gender
        })
        console.log(id)
        
    }

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

        const fetchingData = await axios.post('http://localhost:3000/actor/add', {
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

    const editData = ref({})
    const toUpdate = async (id) => {
        return (await axios.get(`http://localhost:3000/movie/edit/${id}`)).data[0]
        // const fetchingData = await axios.get(`http://localhost:3000/movie/edit/${id}`)
        // console.log(fetchingData.data);
        // editData.value = fetchingData.data
    }

    const updateMovie = async () => {
        const fetchingData = await axios.put(`http://localhost:3000/movie/edit/${editData.value.mov_id}`, {
            title: editData.value.mov_title,
            story: editData.value.mov_summary,
            year: editData.value.mov_year,
            time: editData.value.mov_time,
            poster: editData.value.mov_pic,
            trailer: editData.value.mov_trailer,
            type: editData.value.mov_type,
            genres: editData.value.gen_id,
            dir_fname: editData.value.dir_fname,
            dir_lname: editData.value.dir_lname
        })
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
        actorAdd,
        toUpdate,
        editData,
        fetchActor,
        allActor,
        editActorFname,
        updatePeople,
        fetchSingleActor1,
        editActorLname,
        fetchSingleActor2,
        editActorGender,
        fetchSingleActor3

    }
})