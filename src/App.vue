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
  background: linear-gradient(darken(crimson, 20%),
                  darken(crimson, 25%), darken(crimson, 20%));
}

.wnd-drag {
  -webkit-app-region: drag;
}

.wnd-title-bar {
  height: 24px;
  border-top: 2px solid crimson;
}
</style>
