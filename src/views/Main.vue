<template>
  <div class="main">
    <Loading></Loading>
  </div>
</template>

<script>
// @ is an alias to /src
import Loading from '@/components/modules/Loading.module.vue';

export default {
  name: 'home',
  components: {
    Loading,
  },
};
</script>

<style lang="scss">
.main { position: absolute; top: 0; left: 0; right: 0; bottom: 0; }
</style>
