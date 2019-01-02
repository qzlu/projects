<template>
  <div class="container home">
    <container nextPath='/company'>
    </container>
  </div>
</template>

<script>
// @ is an alias to /src
import container from '@/components/container.vue'

export default {
  name: 'home',
  data(){
      return{
      }
  },
  components: {
    container
  },
  mounted(){
  }
}
</script>
<style>
.container{
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding-top: 100px;
}

</style>
