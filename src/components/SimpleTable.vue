<template>
  <table>
    <tr>
      <th>Name</th>
      <th>Gender</th>
      <th>Email</th>
    </tr>

    <tr v-for="item in data">
      <td>{{item.name}}</td>
      <td>{{item.gender}}</td>
      <td>{{item.email}}</td>
    </tr>
  </table>
</template>
<script>
  import axios from 'axios'
  export default {
    name:"SimpleTable",

    mounted() {
      let _this = this;
      axios.get('/list',{
        baseURL:"http://localhost/"
      })
        .then(function (response) {
          console.log(response.data)
          _this.data = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
    data() {
      return {
        data: []
      }
    },
    methods: {
    },
  }
</script>

