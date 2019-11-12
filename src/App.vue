<template>
  <div id="app">
    <TitleBar />
    <router-view/>
  </div>
</template>

<script>
import TitleBar from '@/components/modules/TitleBar.vue';

export default {
  components: {
    TitleBar,
  },
};
</script>

<style lang="scss">
@import '@/scss/_clearfix.scss';
@import '@/scss/_normalize.scss';

html, body, #app {
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: linear-gradient(darken(crimson, 30%),
                  darken(crimson, 32.5%), darken(crimson, 30%));
}
</style>
