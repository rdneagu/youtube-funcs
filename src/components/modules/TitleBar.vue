<template>
  <section class="wnd-drag wnd-title-bar">
    <div class="wnd-control">
      <Icon :animated="true" :icon="iconMinimize" :click="minimize()"></Icon>
      <Icon :animated="true" :icon="iconMaximize" :click="maximize()"></Icon>
      <Icon :animated="true" :icon="iconSettings"></Icon>
      <Icon :animated="true" :icon="iconClose" :click="close()"></Icon>
    </div>
  </section>
</template>

<script lang="ts">
import Icon from '../Icon.vue';

const { remote } = require('electron');

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
  methods: {
    minimize():void {
      const win = remote.BrowserWindow.getFocusedWindow();
      if (win !== null) {
        win.minimize();
      }
    },
    maximize():void {
      const win = remote.BrowserWindow.getFocusedWindow();
      if (win !== null) {
        const { width, height } = remote.screen.getPrimaryDisplay().workAreaSize;
        this.IsMaxed = !this.IsMaxed;
        const ratio:number = (this.IsMaxed) ? 0.8 : 0.9;
        win.setSize(Math.floor(width * ratio), Math.floor(height * ratio), true);
        win.center();
        this.iconMaximize = (this.IsMaxed) ? 'ico-maximize-mini' : 'ico-maximize-maxi';
      }
    },
    settings():void {
    },
    close():void {
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

<style>

</style>
