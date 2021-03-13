<template>
    <div class="post">
        <router-link :to="{name:'Detail',params:{id:post.id}}"><h4>{{post.title}}</h4></router-link>
        <p>{{cutBody}}</p>
        
        <div v-if="post.tags">
            Tags:
            <div v-for="tags in post.tags" :key="tags" class="pill">
                 {{tags}}
            </div>
        </div>
        
    </div>
    
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
    props:['post'],
    setup(props){
        let cutBody=computed(()=>{
            return props.post.body.substring(0,100)+'...';
        })
        return{cutBody}
    }
}
</script>

<style>
.post h4{
    font-size: 26px;
    text-transform: uppercase;
    position: relative;
    margin-bottom: 10px;
    max-width: 400px;
    display: inline-block;
    color: white;
}
.post h4::before{
    content: "";
    width: 100%;
    height: 100%;
    background-color: #ff8800;
    position: absolute;
    z-index: -1;
    left: -30px;
    padding-right: 40px;
    display: block;
    transform: rotateZ(-1deg);
}
.post{
    border-bottom: 2px dotted #bbb;
}


</style>