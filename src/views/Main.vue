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
