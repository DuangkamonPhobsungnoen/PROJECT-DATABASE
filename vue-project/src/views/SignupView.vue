<template>
    <div class="hero is-fullheight">

        <div class="hero-body is-justify-content-center is-align-items-center pt-0">

            <div>
                <div class="columns is-flex is-flex-direction-column card2 ">
                    <h1 class="text-signin">SIGN UP</h1><br>
                    <div class="columns is-multiline px-5">
                        <div class="column is-half">
                            <input v-model="fname" class="input has-background-white" style="border: 2px solid #452676;" type="text" placeholder="First name "
                                :class="{ 'is-danger': error.fname }" @input="validatefname()">
                            <span class="has-text-danger ertext ml-3">{{ error.fname }}</span>
                        </div>
                        <div class="column  is-half">
                            <input v-model="lname" class="input has-background-white" style="border: 2px solid #452676;" type="text" placeholder="Last name "
                                :class="{ 'is-danger': error.lname }" @input="validatelname()">
                            <span class="has-text-danger ertext ml-3">{{ error.lname }}</span>
                        </div>
                    </div>
                    <div class="columns px-5">
                        <div class="column ">
                            <input v-model="username" class="input input_username" type="text" placeholder="Username "
                                :class="{ 'is-danger': error.username }" @input="validateUsername()">
                            <span class="has-text-danger ertext ml-3">{{ error.username }}</span>
                        </div>
                    </div>

                    <div class="columns is-multiline px-5">
                        <div class="column is-half">
                            <input v-model="passw" class="input input_password" type="password" placeholder="Password "
                                :class="{ 'is-danger': error.passw }" @input="validatePassw()">
                            <span class="has-text-danger ertext ml-3">{{ error.passw }}</span>
                        </div>
                        <div class="column  is-half">
                            <input v-model="passw2" class="input input_password" type="password"
                                placeholder="Confrim password " :class="{ 'is-danger': error.passw2 }"
                                @input="validatePassw2()">
                            <span class="has-text-danger ertext ml-3">{{ error.passw2 }}</span>
                        </div>
                    </div>
                    <div class="columns is-multiline px-5">
                        <div class="column is-half">
                            <input v-model="email" class="input input_email" type="text" placeholder="Email"
                                :class="{ 'is-danger': error.email }" @input="validateEmail()">
                            <span class="has-text-danger ertext ml-3">{{ error.email }}</span>
                        </div>
                        <div class="column  is-half">
                            <input v-model="phone" class="input input_phone" type="text" placeholder="Phone "
                                :class="{ 'is-danger': error.phone }" @input="validatePhone()">
                            <span class="has-text-danger ertext ml-3">{{ error.phone }}</span>
                        </div>
                    </div>
                    <div class="column px-5 ">
                        <!-- <router-link to="/sign_in"> -->
                            <button @click="submit()" class="button is-fullwidth color_sign_purple " type="submit ">Sign up</button>
                        <!-- </router-link> -->
                    </div>
                    <div class="column px-5 ">
                        <p class="line "></p>
                    </div>
                    <div class="column px-5 ">
                        <router-link to="/signinview">
                            <button class="button is-fullwidth color_sign_white ">Sign in</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'vapp',
    data() {
        return {
            fname: '',
            lname: '',
            username: '',
            passw: '',
            passw2: '',
            phone: '',
            email: '',
            error: {
                fname: '',
                lname: '',
                username: '',
                passw: '',
                passw2: '',
                phone: '',
                email: '',
            }
        }
    },
    methods: {
        validatefname() {
            if (this.fname === '') {
                this.error.fname = 'กรุณากรอกชื่อ'
                return
            }
            this.error.fname = ''
        },
        validatelname() {
            if (this.lname === '') {
                this.error.lname = 'กรุณากรอกนามสกุล'
                return
            }
            this.error.lname = ''
        },
        validateUsername() {
            if (this.username === '') {
                this.error.username = 'กรุณากรอกชื่อผู้ใช้'
                return
            }
            this.error.username = ''
        },
        validatePassw() {
            if (this.passw === '') {
                this.error.passw = 'กรุณากรอกรหัสผ่าน'
                return
            }

            if (this.passw.length < 6) {
                this.error.passw = 'รหัสผ่านห้ามน้อยกว่า 6 ตัวอักษร'
                return
            }
            this.error.passw = ''
        },
        validatePassw2() {
            if (this.passw2 === '') {
                this.error.passw2 = 'กรุณากรอกยืนยันรหัสผ่าน'
                return
            }

            if (this.passw2 !== this.passw) {
                this.error.passw2 = 'รหัสผ่านไม่ตรงกัน'
                return
            }

            this.error.passw2 = ''
        },
        validateEmail() {
            if (this.email === '') {
                this.error.email = 'กรุณากรอกอีเมล'
                return
            }
            this.error.email = ''
        },
        validatePhone() {
            if (this.phone === '') {
                this.error.phone = 'กรุณากรอกหมายเลขโทรศัพท์'
                return
            }
            if (this.phone.length !== 10) {
                this.error.phone = 'กรุณากรอกหมายเลขโทรศัพท์ที่ถูกต้อง'
                return
            }
            this.error.phone = ''
        },
        submit() {
            this.validatefname()
            this.validatelname()
            this.validateUsername()
            this.validatePassw()
            this.validatePassw2()
            this.validateEmail()
            this.validatePhone()

            if (this.error.fname !== '' || this.error.lname !== '' || this.error.username !== '' || this.error.passw !== '' || this.error.passw2 !== '' || this.error.email !== '' || this.error.phone !== '') {
                alert('กรุณากรอกข้อมูลให้ถูกต้อง')
                return
            }
            alert('ลงทะเบียนสำเร็จ')
            location.href = "/signinview"
        },
    },
}
</script>

