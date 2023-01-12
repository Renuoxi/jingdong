<template>
    <div class="docker">
        <div v-for = "(item,index) in dockerlist"  :key="index" class="docker_item " :class="{ 'docker_item':true, 'docker_item--active':index === 0}">
            <div class="iconfont" v-html="item.icon" ></div>
            <div class="docker_txt">{{ item.text }}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DockerBar',
  setup () {
    const dockerlist = [
      { icon: '&#xe64f;', text: '首页' },
      { icon: '&#xe899;', text: '购物车' },
      { icon: '&#xe645;', text: '订单' },
      { icon: '&#xe600;', text: '我的' }
    ]
    return { dockerlist }
  }
}

</script>

<style lang="scss">
@import "../../style/viriables.scss";
@import "../../style/minxin.scss";

.docker{
    color: $content-fontcolor;
    display: flex;
    position:absolute;
    box-sizing: border-box;
    padding: 0 0.18rem;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.49rem;
    border-top: 1px solid #f1f1f1;
    font-size: 0.10rem;
    &_item{
    flex: 1;
    text-align: center;
    .iconfont{
        font-size: 0.18rem;
        margin: 0.07rem  0 0.02rem 0;
    }
    &--active{
        color: #1FA4FC ;
    }
    }
    &_txt{
        font-size: .2rem;
        transform: scale(0.5,0.5);
        transform-origin: center top;
    }
}
</style>
