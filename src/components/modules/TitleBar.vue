<template>
  <section class="wnd-drag wnd-title-bar">
    <span class="wnd-title">Youtube Functions</span>
    <div class="wnd-control">
      <Icon :icon="iconMinimize" :click="minimize.bind()"></Icon>
      <Icon :icon="iconMaximize" :click="maximize.bind()"></Icon>
      <Icon :icon="iconSettings"></Icon>
      <Icon :icon="iconClose" :click="close.bind()"></Icon>
    </div>
  </section>
</template>

<script>
import Icon from '../Icon.vue';

const { remote } = require('electron');

export default {
  data() {
    return {
      isResized: false,
      iconMinimize: 'icon-minimize',
      iconMaximize: 'icon-maximize-mini',
      iconSettings: 'icon-settings',
      iconClose: 'icon-close',
    };
  },
  methods: {
    minimize() {
      const win = remote.BrowserWindow.getFocusedWindow();
      if (win !== null) {
        win.minimize();
      }
    },
    maximize() {
      const win = remote.BrowserWindow.getFocusedWindow();
      if (win !== null) {
        const { width, height } = remote.screen.getPrimaryDisplay().workAreaSize;
        this.isResized = !this.isResized;
        const size = (this.isResized) ? 0.8 : 0.9;
        this.iconMaximize = (this.isResized) ? 'icon-maximize-maxi' : 'icon-maximize-mini';
        // Apply the new changes to the window
        win.setMinimumSize(Math.floor(width * size), Math.floor(height * size));
        win.setSize(Math.floor(width * size), Math.floor(height * size), true);
        win.center();
      }
    },
    settings() {
    },
    close() {
      const win = remote.BrowserWindow.getFocusedWindow();
      if (win !== null) {
        win.close();
      }
    },
  },
  components: {
    Icon,
  },
};
</script>

<style lang="scss">
.wnd-drag { -webkit-app-region: drag; }
.wnd-title-bar {
  position: relative;
  padding: 2px;
  background-color: rgba(black, 0.25);
  .wnd-title { color: crimson; }
  .wnd-control {
    position: absolute;
    right: 4px;
    top: 2px;
    .icon {
      -webkit-app-region: no-drag;
      margin: 0 1px;
    }
  }
}
</style>
