<template>
  <div class="about">

    <form @submit.prevent="addUser">

      <input placeholder="Укажите имя" type="text" />

      <br />

      <input placeholder="Укажите пароль" type="password" />
      <br />

      <button>Войти</button>

      <p>{{ message }}</p>
    </form>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  data() {
    return {
      message:"",
      router: useRouter(),
    }
  },
  methods: {
    addUser(event) {
      const obj = {
        name: event.target[0].value,
        password: event.target[1].value
      }
      fetch("http://localhost:3004/addUser", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj),
      })
      .then(res=>{
        if (res.ok) {
          return res.json()
        }else{
        this.message = "Пользователь уже существует :("
        }
      })
      .then(data =>{
        console.log(data);
        localStorage.name = data.name;
        localStorage.id = data.id;
        this.$router.push({name: "MainPage"})
      })
    }
  }
}
</script>

<style>
.about form {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 3em;
}

button {
  width: 48px;
  height: 20px;
}
</style>
