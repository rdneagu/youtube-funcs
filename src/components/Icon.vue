<template>
<<<<<<< Updated upstream
  <i class="icon" :class="[ animated, isClickable, icon ]"></i>
=======
  <i class="icon" :class="[ animated, isClickable ]" :id="icon">{{ icon }}</i>
>>>>>>> Stashed changes
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
    onClick() {
      if (this.disabled) return false;
      if (typeof (this.click) === 'function') return this.click();

      return false;
    },
  },
};
</script>

<style lang="scss">
@import '@/scss/_icons.scss';
</style>
