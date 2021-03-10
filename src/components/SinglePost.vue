<template>
        <h4>{{post.title}}</h4>
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