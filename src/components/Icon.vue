<template>
  <i class="icon" :class="[ animated, isClickable, icon ]" @click="OnClick()"></i>
</template>

<script>
export default {
  name: 'icon',
  props: ['animated', 'click', 'icon', 'disabled'],
  computed: {
    // Can the icon be clicked
    isClickable() {
      return (this.click) ? 'clickable' : false;
    },
  },
  methods: {
    // When the icon is clicked
    OnClick() {
      if (this.disabled === false && typeof (this.click) === 'function') {
        this.click();
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="scss">
@import '@/scss/_icons.scss';
</style>
