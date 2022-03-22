<template>
  <div id="app">
    <MainTopbar :app="this" />
    <component v-bind:is="selected_page"></component>
  </div>
</template>

<script>
import "./styles/css/framework.css";
import "./styles/css/app.css";

export default {
  name: "App",
  data() {
    return {
      selected_page: "HomePage"
    }
  }
}
</script>

<style>
@font-face {
  font-family: Designio;
  src: url("assets/fonts/Designio Regular.otf");
}
html {
  font-family: Designio;
}
</style>
