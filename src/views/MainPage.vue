<template>
    <div class="main">
            <listUser/>
            <listPost :listPost="listPost"/>
            <addPost v-on:newPost="addPost"/>
    </div>
</template>

<script>
import listUser from '../components/listUser.vue';
import listPost from '../components/listPost.vue';
import addPost from '../components/addPost.vue';

export default {
    props:["listPost"],
    data() {
        return {
            listPost: [],
        }
    },
    components:{
        listUser,
        listPost,
        addPost
    },
    methods: {
    addPost(event){
        console.log(event.target.value);
        fetch("http://localhost:3004/addPost",{
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: localStorage.id,
                text: event.target.value,
            })
        })
        .then(res => res.json())
        .then(post => this.listPost.push(post))  // Добавить новый пост в список
    }
},
    mounted() {
        fetch("http://localhost:3004/getAllPost")
        .then(res=>res.json())
        .then(data => this.listPost=data)
    },
}
</script>
<style>
    .main{
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        width: 600px;
    }
</style>