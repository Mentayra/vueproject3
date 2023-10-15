<script>

</script>

<template>
  <div class="homeView">
    <nav>
        <RouterLink to="/reg">Регистрация</RouterLink>
        <RouterLink to="/signUp">Войти</RouterLink>
      </nav>
</div>
</template>

<style>
nav{
  display: inline-flex;
  gap: 30px;
}
.homeView{
  min-height: 100vh;
    display: flex;
    align-items: center;
}
</style>
