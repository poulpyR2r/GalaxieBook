<template>
  <div>
    <router-view :key="$route.fullPath"/>
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

@font-face {
  font-family: Neo-light;
  src: url(@/fonts/Neo\ Sans\ Std\ Light.otf);
}

@font-face {
  font-family: Neo-bold;
  src: url(@/fonts/Neo\ Sans\ Std\ Bold.otf);

}

@font-face {
  font-family: Neo-regular;
  src: url(@/fonts/Neo\ Sans\ Std\ Regular.otf);
}


@import "~bulma/css/bulma.css";
</style>
