<template>
    <div>
      <li v-for="el in listUser">
{{ el.name}}
      </li>  
    </div>
</template>
<script>
export default {
    data() {
        return {
            listUser:[]
        }
    },
    mounted() {
        fetch("http://localhost:3004/getAllUsers")
        .then(res=>res.json())
        .then(data => this.listUser=data)
    },
}
</script>
