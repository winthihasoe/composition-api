<template>
  <h2>Create a Post</h2>
  <form @submit.prevent="addPost">
    <label>Title</label>
    <input type="text" v-model="title" required>

    <label>Body</label>
    <textarea v-model="body" required></textarea>

    <label>Tags (hit Enter to add a tag)</label>
    <input type="text" v-model="tag" @keydown.enter.prevent="keydownHandler">
    
      <div v-for="tag in tags" :key="tag" class="pill">
        {{tag}}
      </div>
    
    <button>Add Post</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  setup(){
    let title=ref('');
    let body=ref('');
    let tag=ref('');
    let tags=ref([]);
    let keydownHandler=()=>{
      if(!tags.value.includes(tag.value) && tag.value!==''){
        tags.value.push(tag.value);
      }
      tag.value="";
    }

    let addPost=async()=>{
      await fetch('http://localhost:3000/posts',{
        method:'POST',
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(
          {
            title:title.value,
            body:body.value,
            tags:tags.value
          }
        )
      })
    }
    return {title,body,tag,tags,keydownHandler,addPost}
  }
}
</script>

<style>
  form{
    width: 400px;
    margin: 30px auto;
    text-align: left;
  }
  label,input{
    display: block;
    width: 100%;
  }

  label{
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #528181;
  }

  input{
    margin: 10px 0 20px 0;
    border: none;
    border-bottom: solid 2px #aaa;
    font-size: 16px;
  }

  textarea{
    width: 100%;
    height: 150px;
    border: none;
    border: 2px solid #aaa;
    border-radius: 10px;
    margin: 10px 0 20px 0;
  }

  .block{
    display: block;
  }

  .pill{
    background-color: #528181;
    border: none;
    border-radius: 20px;
    color: #eee;
    display: inline-block;
    padding: 5px 13px;
    margin-right: 5px;
    margin-bottom: 30px;
  }

  button{
    margin: 30px auto;
    padding: 8px 12px;
    font-size: 15px;
    background-color: crimson;
    color: white;
    border: none;
    border-radius: 10px;
    display: block;
  }
</style>