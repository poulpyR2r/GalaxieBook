<template>
  <div>
    <router-view/>
    <StartbackgroundComponentVue/>
      
  </div>
</template>

<script>
import StartbackgroundComponentVue from './components/StartbackgroundComponent.vue';

export default {
  name: "App",
  components: {
    StartbackgroundComponentVue,
  },
};
</script>

<style>


@import "~bulma/css/bulma.css";
</style>
