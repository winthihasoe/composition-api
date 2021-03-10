<template>
      {{error}}
      <div v-if="posts.length>0">
        <PostList :posts='posts'></PostList>
      </div>
      <div v-else>
        Loading ..
      </div>
    
</template>

<script>

import PostList from '../components/PostList'
import getPosts from '../composable/getPosts'



export default {
  components: { PostList },
  setup(){
    let{posts,error,load}= getPosts();
    load();
    return {posts,error};
  }
}
</script>

