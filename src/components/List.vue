<template>
    <div>
      <div>list</div>
      <div>{{mycount}}</div>
      <button @click="incCount">+</button>
      <button @click="decCount">-</button>
    </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
    export default {
        name: "List",
      computed:{
          ...mapGetters([
            'mycount'
          ])
      },
      data(){
          return{

          }
      },
      methods:{
          ...mapActions([
            'incCount',
            'decCount'
          ])
      }
    }
</script>

<style scoped>

</style>
