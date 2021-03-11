<template>
      {{error}}
      <div v-if="posts.length>0">
        <PostList :posts='posts'></PostList>
      </div>
      <div v-else>
        <Spinner></Spinner>
      </div>
    
</template>

<script>

import Spinner from '../components/Spinner'
import PostList from '../components/PostList'
import getPosts from '../composable/getPosts'



export default {
  components: {
    Spinner, PostList },
  setup(){
    let{posts,error,load}= getPosts();
    load();
    return {posts,error};
  }
}
</script>

