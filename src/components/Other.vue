<template>
    <div>
      <div>other</div>
      <div>{{mycount}}</div>
      <button @click="addcount">+</button>
      <button @click="subcount">-</button>
    </div>
</template>

<script>
    import {mapGetters,mapActions} from 'vuex'
    export default {
        name: "Other",
      computed:{
          ...mapGetters([
            'mycount'
          ])
      },
      methods:{
          ...mapActions({
            addcount: 'incCount',
            subcount: 'decCount'
          })
      }
    }
</script>

<style scoped>

</style>
