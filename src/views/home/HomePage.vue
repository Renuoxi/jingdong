<template>
      <div class="wrapper">
        <StaticPart/>
        <NearBy />
      </div>
      <DockerBar/>
  </template>

<script>
import StaticPart from './StaticPart.vue'
import NearBy from './NearbyBus.vue'
import DockerBar from './DockerBar.vue'

export default {
  name: 'HomePage',
  components: { StaticPart, NearBy, DockerBar }
}

</script>

<style lang="scss" scoped>
  .wrapper{
    overflow-y:auto;
    position: absolute;
    top: 0rem;
    left: 0rem;
    bottom: 0.5rem;
    right: 0;
    padding: 0 .18rem;
  }
</style>
