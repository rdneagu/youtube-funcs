<template>
  <i class="icon" :class="[ animated, isClickable ]" :id="icon">{{ name }}</i>
</template>

<script>
export default {
  name: 'icon',
  props: ['animated', 'click', 'icon', 'disabled'],
  computed: {
    // Can the icon be clicked
    isClickable() {
      return (click) ? 'clickable' : false;
    },
  },
  methods: {
    // When the icon is clicked
    onClick() {
      if (this.disabled) return;
      if (typeof (this.click) === 'function') return this.click();
    },
  }
}
</script>

<style lang="scss">
@import '@/scss/_icons.scss';
</style>