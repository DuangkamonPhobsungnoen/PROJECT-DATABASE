
import { defineStore } from 'pinia'
import { ref, reactive } from "vue";
import axios from 'axios';
export const useSignUpStore = defineStore('signup', () => {

  const test = ref("sus test")
  const regData = reactive({
    fname: '',
    lname: '',
    username: '',
    passw: '',
    passw2: ''
  })

  const error = reactive({
    fname: '',
    lname: '',
    username: '',
    passw: '',
    passw2: '',
  })

  function validatefname() {
    if (regData.fname === '') {
      error.fname = 'กรุณากรอกชื่อ'
      return
    }
    error.fname = ''
  }
  function validatelname() {
    if (regData.lname === '') {
      error.lname = 'กรุณากรอกนามสกุล'
      return
    }
    error.lname = ''
  }
  function validateUsername() {
    if (regData.username === '') {
      error.username = 'กรุณากรอกชื่อผู้ใช้'
      return
    }
    error.username = ''
  }
  function validatePassw() {
    if (regData.passw === '') {
      error.passw = 'กรุณากรอกรหัสผ่าน'
      return
    }

    if (regData.passw.length < 6) {
      error.passw = 'รหัสผ่านห้ามน้อยกว่า 6 ตัวอักษร'
      return
    }
    error.passw = ''
  }
  function validatePassw2() {
    if (regData.passw2 === '') {
      error.passw2 = 'กรุณากรอกยืนยันรหัสผ่าน'
      return
    }

    if (regData.passw2 !== regData.passw) {
      error.passw2 = 'รหัสผ่านไม่ตรงกัน'
      return
    }

    error.passw2 = ''
  }

  function submit() {
    validatefname()
    validatelname()
    validateUsername()
    validatePassw()
    validatePassw2()

    if (error.fname !== '' || error.lname !== '' || error.username !== '' || error.passw !== '' || error.passw2 !== '') {
      alert('กรุณากรอกข้อมูลให้ถูกต้อง')
      return
    }
    alert('ลงทะเบียนสำเร็จ')
    location.href = "/signinview"
    register()
  }




  const register = async () => {
    await axios.post('http://localhost:3000/register',
      {
        u_fname: regData.fname,
        u_lname: regData.lname,
        u_user_name: regData.username,
        u_pass: regData.passw
      })

  }

  return {
    register,
    regData,
    error,
    validatefname,
    validatelname,
    validateUsername,
    validatePassw,
    validatePassw2,
    submit,
    test


  }
})