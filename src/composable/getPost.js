const { ref } = require("@vue/reactivity");


let getPost=(id)=>{
    let post=ref([]);
    let error=ref('');
    let load=async()=>{
        try{
            let response=await fetch('http://localhost:3000/posts/'+id)
            if(response.status===404){
                throw new Error('Not found url');
            }
            let data=await response.json();
            post.value=data;
        }catch(err){
            error.value=err.message;
        }
    }
    
    return {post,error,load}
}
export default getPost;