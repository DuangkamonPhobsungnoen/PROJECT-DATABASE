
import { defineStore } from 'pinia'
import { ref, reactive } from "vue";
import axios from 'axios';
import { useLocalStorage } from "@vueuse/core";
export const useSignInStore = defineStore('signin', () => {

    

    const logingUser = useLocalStorage('loggingUser', {})
    const loginData = reactive({
        username:'',
        password:''
    })

    const error = reactive({
        username: '',
        passw: '',
    })
  
    function validateUsername() {
        if (loginData.username === '') {
            error.username = 'กรุณากรอกชื่อผู้ใช้'
            return
        }
        error.username = ''
    }
    function validatePassw() {
        if (loginData.password === '') {
            error.passw = 'กรุณากรอกรหัสผ่าน'
            return
        }

        if (loginData.password.length < 6) {
            error.passw = 'รหัสผ่านห้ามน้อยกว่า 6 ตัวอักษร'
            return
        }
        error.passw = ''
    }
    function cusname() {
        validateUsername()
        validatePassw()
        if (error.username !== '' || error.passw !== '') {
            alert('กรุณากรอกข้อมูลให้ถูกต้อง')
            return
        }
        login()
        
    }


  const login = async () => {
    const fetchingData = await axios.post('http://localhost:3000/login', loginData)
    // console.log(fetchingData.data.user);
    if(fetchingData.data.status == 'Invalid Password'){
        alert(fetchingData.data.status)
        return
    }
    if(fetchingData.data.status == 'error'){
        alert(fetchingData.data.message)
        return
    }
    logingUser.value = fetchingData.data.user
    window.location.href = '/'

  }

  function logout(){
    logingUser.value = null
    window.location.href = '/'
  }


const updateProfile =  async (fname, lname, username) => {
    const fetchingData = await axios.put(`http://localhost:3000/user/edit/${logingUser.value.u_id}`, 
    {
        u_fname: fname,
        u_lname: lname,
        u_user_name: username
    })
    if(fetchingData.data.status == 'error'){
        alert(fetchingData.data.message)
    }else{
        logingUser.value = fetchingData.data
    }
    // logingUser.value = null
    
}

  return {
    login,
    loginData,
    error,
    validateUsername,
    validatePassw,
    cusname,
    logingUser,
    logout,
    updateProfile

  }
})