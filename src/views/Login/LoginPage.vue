<template>
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" >
    <div class="wrapper__input">
      <input class="input__content" placeholder="请输入用户名" type="text" v-model="data.username" />
    </div>
    <div class="wrapper__input">
      <input class="input__content" placeholder="请输密码"  type="password" v-model="data.password" />
    </div>
    <div class="wrapper__sign" @click="handleLogin">登录</div>
    <div class="wrapper__register">
      <span @click="handleRegJump">立即注册</span><span class="register__span">|</span> <span>忘记密码</span>
    </div>
  </div>
  <ToastPage v-if="data.showToast"  :toastmessage = "data.toastMessage" />
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import ToastPage from '@/components/ToastPage.vue'

axios.defaults.headers.post['Content-Type'] = 'application/json'

export default {
  name: 'LoginPage',
  components: { ToastPage },
  setup () {
    const data = reactive({
      username: '',
      password: '',
      showToast: false,
      toastMessage: ''
    })
    const urlApi = 'https://www.fastmock.site/mock1/ae8e9031947a302fed5f92425995aa19/jd/api/user/login'
    const router = useRouter()
    const handleLogin = async () => {
      try {
        const result = await axios.post(urlApi, {
          username: data.username,
          password: data.password
        })
        if (result.data.errno === 0) {
          localStorage.isLogin = true
          router.push({ name: 'HomePage' })
        } else {
          alert('登录失败')
        }
      } catch (e) {
        data.showToast = true
        data.toastMessage = '请求失败'
      }
    }
    const handleRegJump = () => {
      router.push({ name: 'RegPage' })
    }
    return { handleLogin, handleRegJump, data }
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
  height: 90vh;
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  &__img{
    width: .66rem;
    height: .66rem;
    margin-bottom: .4rem;
  }
  &__input{
    width:2.95rem;
    height: .48rem;
    margin:.08rem 0;
    background: #F9F9F9;
    border: 1px solid rgba(0,0,0,0.10);
    border-radius: .06rem;
    border-radius: .06rem;
    display: flex;
    align-items:center;
    justify-content:center;
    .input__content{
      width: 84%;
      margin: 0 auto;
      background: none;
      outline: none;
      border: 0;
      line-height: .44rem;
      color: rgba(0,0,0,0.50);
      &::placeholder{
        color: rgba(0,0,0,0.50);
      }
    }
  }
  &__sign{
    width:2.95rem;
    background: #0091FF;
    box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
    border-radius: .04rem;
    border-radius: .04rem;
    text-align: center;
    line-height: .48rem;
    color: #F9F9F9;
    margin:.08rem 0;
  }
  &__register{
    margin: .08rem 0;
    font-size: 14px;
    color: rgba(0,0,0,0.50);
    letter-spacing: 0;
    display: flex;
    flex-direction:row;
    .register__span{
      margin: 0 0.12rem;
    }
  }
}
</style>
