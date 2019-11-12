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

html, body {
  height: 100%;
}

#app {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: linear-gradient(darken(crimson, 30%),
                  darken(crimson, 32.5%), darken(crimson, 30%));
  border-top: 2px solid crimson;
}
</style>
