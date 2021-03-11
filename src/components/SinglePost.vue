<template>
        <router-link :to="{name:'Detail',params:{id:post.id}}"><h4>{{post.title}}</h4></router-link>
        <p>{{cutBody}}</p>
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

</style>