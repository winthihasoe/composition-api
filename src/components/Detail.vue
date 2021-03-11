<template>
  <h2>{{post.title}}</h2>
  <p>{{post.body}}</p>
</template>

<script>
import getPost from '../composable/getPost'
export default {
    props:['id'],
    setup(props){
        let {post,error,load}=getPost(props.id);
        load();
        return {post,error}
    }
}
</script>

<style>

</style>