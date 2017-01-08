<template
  xmlns:v-bind="http://www.w3.org/1999/xhtml"
  xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="hello">
    <h1>{{ title }}</h1>
    <input v-model="newItem" v-on:keyup.enter="addNew">
    <ul>
      <li v-for="item in items"
          v-bind:class="{finished: item.isFinished}"
          v-on:click="toggleFinish(item)">
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
import Store from './store'

export default {
  name: 'hello',
  data () {
    return {
      title: 'this is a todo list.',
      items:Store.get()
    }
  },
  watch:{
    items:{
      handler: function(items){
        Store.save(items)
      },
      deep:true
    }
  },
  methods:{
    toggleFinish:function(item){
      item.isFinished=!item.isFinished;
    },
    addNew:function(){
      this.items.push({
         label:this.newItem,
          isFinished:false
      });
      this.newItem=''
    }
  }
}






</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.finished{
  text-decoration:underline;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  margin: 0 10px;
  word-wrap: break-word;
  word-break: normal;
}

a {
  color: #42b983;
}






</style>
