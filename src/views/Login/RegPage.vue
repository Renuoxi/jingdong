<template>
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" >
    <div class="wrapper__input">
      <input class="input__content" placeholder="请输入用户名" type="text"/>
    </div>
    <div class="wrapper__input">
      <input class="input__content" placeholder="请输密码" type="password"/>
    </div>
    <div class="wrapper__input">
      <input class="input__content" placeholder="确认密码" type="password"/>
    </div>
    <div class="wrapper__sign">注册</div>
    <div class="wrapper__register" @click="handleLoginJump">已有账号去登录</div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'RegPage',
  setup () {
    const router = useRouter()
    const handleLoginJump = () => {
      router.push({ name: 'LoginPage' })
    }
    return { handleLoginJump }
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
  }
}
</style>
