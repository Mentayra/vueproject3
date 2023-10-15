<template>
    <div>
      <div v-for="el in listPost">
        <div class="line">
<div>{{ el.name}}</div>
<div class="undertext"></div>
<div>{{ el.text }}</div>

<img src="https://cdn1.iconfinder.com/data/icons/creative-round-ui/217/50-64.png" />
</div>
      </div>  
    </div>
</template>
<script>
export default {
    props:["listPost"],
    
}
</script>
<style>
img{
  width: 20px;
  height: 20px;
}
.line{
  border: 5px solid grey;
}
.undertext{
  border: 1px solid rgb(179, 164, 136);
}
</style>