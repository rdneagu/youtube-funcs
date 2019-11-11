<template>
  <section class="wnd-drag wnd-title-bar">
    <div class="wnd-control">
      <Icon :animated="true" :icon="iconMinimize"></Icon>
      <Icon :animated="true" :icon="iconMaximize"></Icon>
      <Icon :animated="true" :icon="iconSettings"></Icon>
      <Icon :animated="true" :icon="iconClose"></Icon>
    </div>
  </section>
</template>

<script lang="ts">
import Icon from '../Icon.vue';

export default {
  data() {
    return {
      IsMaxed: true,
      iconMinimize: 'ico-minimize',
      iconMaximize: 'ico-maximize-maxi',
      iconSettings: 'ico-settings',
      iconClose: 'ico-close',
    };
  },
  components: {
    Icon,
  },
};
</script>

<style>

</style>
