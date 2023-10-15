<template>
    <div class="container">
        <button
        @click="ShowInput = !ShowInput">
            Написать пост
        </button>
        <br/>
        <input
        @keyup.enter="$emit('newPost',$event)"
        v-if="ShowInput"
        type="text"
        />
    </div>
</template>
<script>
export default {
    props:["newPost"],
    data() {
        return {
            ShowInput: false
        }
    },
}
</script>
<style>
.container{
    display: flex;
    flex-direction: column;
}
.container button{
    max-width: 120px;
}
</style>