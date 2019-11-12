<template>
  <i class="icon" :class="[ IsClickable, icon ]" @click.stop="OnClick"></i>
</template>

<script>
export default {
  name: 'icon',
  props: ['click', 'icon', 'disabled'],
  computed: {
    // Can the icon be clicked
    IsClickable() {
      return (typeof (this.click) === 'function') ? 'clickable' : false;
    },
  },
  methods: {
    // When the icon is clicked
    OnClick() {
      if (!this.disabled && typeof (this.click) === 'function') {
        return this.click();
      }
      return false;
    },
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: 'ico-youtube-funcs';
  src:
    url('../assets/fonts/ico-youtube-funcs.ttf?plnw31') format('truetype'),
    url('../assets/fonts/ico-youtube-funcs.woff?plnw31') format('woff'),
    url('../assets/fonts/ico-youtube-funcs.svg?plnw31#ico-youtube-funcs') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}
.icon {
  font-family: 'ico-youtube-funcs' !important;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  color: #ff2121;

  /* Better Font Rendering */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &.clickable {
    cursor: pointer;
    &:hover {
      color: lighten(#ff2121, 15%);
    }
  }
}
.icon-close:before {
  content: "\e900";
}
.icon-settings:before {
  content: "\e901";
}
.icon-minimize:before {
  content: "\e902";
}
.icon-maximize-maxi:before {
  content: "\e903";
}
.icon-maximize-mini:before {
  content: "\e904";
}
</style>
