<template>
    <div class="hero is-fullheight">
        <div class="hero-body is-justify-content-center is-align-items-center">
            <div>
                <div class="columns is-flex is-flex-direction-column card1">
                    <h1 class="text-signin">SIGN IN</h1>
                    <div class="column px-5">
                        <input v-model="username" class="input input_username" type="text" placeholder="Username" :class="{'is-danger': error.username}" @input="validateUsername()">
                        <span class="has-text-danger ertext ml-3">{{error.username}}</span>
                    </div>
                    <div class="column px-5">
                        <input v-model="passw" class="input input_password" type="password" placeholder="Password" :class="{'is-danger': error.passw}" @input="validatePassw()">
                        <span class="has-text-danger ertext ml-3">{{error.passw}}</span>
                    </div>
                    <div class="column px-5">
                        <a>
                            <button @click="cusname()" class="button is-fullwidth color_sign_purple " type="submit">Sign in</button>
                        </a>
                    </div>
                    <div class="column px-5">
                        <p class="line"></p>
                    </div>
                    <div class="column px-5">
                        <router-link to="/signupview"><button class="button  is-fullwidth color_sign_white" type="submit">Sign up</button></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'valid_signin',
  data() {
    return {
        username: '',
        passw: '',
        error: {
            username: '',
            passw: '',
        }
    }
  },
  methods: {
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
        cusname() {
            this.validateUsername()
            this.validatePassw()
            if (this.error.username !== '' || this.error.passw !== '') {
                alert('กรุณากรอกข้อมูลให้ถูกต้อง')
                return
            }
            window.location.href = '/'
        }

    },
}
</script>
