<template>
  <section class="wnd-drag wnd-title-bar">
    <div class="wnd-control">
      <Icon :animated="true" :icon="icon_minimize"></Icon>
      <Icon :animated="true" :icon="icon_maximize"></Icon>
      <Icon :animated="true" :icon="icon_settings"></Icon>
      <Icon :animated="true" :icon="icon_close"></Icon>
    </div>
  </section>
</template>

<script>
import Icon from '../Icon.vue';

export default {
  components: {
    Icon,
  },
};
</script>

<style>

</style>
