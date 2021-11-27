<template>
<div>
<table class="container">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Title</th>
      <th scope="col">Body</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="post in posts" :key="post.id">
      <th scope="row">1</th>
      <td>{{ post.id }}</td>
      <td>{{ post.title }}</td>
      <td>{{ post.body }}</td>
    </tr>
  </tbody>
</table>

</div>


</template>

<script>

import axios from './axios'

export default{
    name: 'PostExample',
    data() {
        return {
            posts: [
                {id: 1, title: 'Post 1',body: 'body 1'},
                {id: 2, title: 'Post 2',body: 'body 2'},
                {id: 3, title: 'Post 3',body: 'body 3'},
                {id: 4, title: 'Post 4',body: 'body 4'},
                {id: 5, title: 'Post 5',body: 'body 5'},
            ]
        }
    },

    created(){
      console.log('Mensaje prueba');

      axios.get('https://jsonplaceholder.typicode.com/todos/1').then( resp => {
        console.log(resp);
      });
    }

}


</script>

<style></style>