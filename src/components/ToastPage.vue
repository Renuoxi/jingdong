<template>
  <div class="tosat"> {{ toastmessage }}</div>
</template>

<script>
export default {
  props: ['toastmessage']
}
</script>

<style lang="scss" scoped>
.tosat{
    position: fixed;
    left: 50%;
    top: 50%;
    transform:  translate( -50%, -50%);
    padding:  .1rem;
    background: rgba(0, 0, 0, .35);
    border-radius: .05rem;
    color: #fff;
}
</style>
