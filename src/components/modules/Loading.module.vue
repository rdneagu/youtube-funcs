<template>
  <section class="yt-loading-app">
    <div class="yt-logo">
      <img src="@/assets/images/yt_logo_mono_dark.png" />
      <div class="yt-logo-patch"></div>
    </div>
  </section>
</template>

<script>
export default {
};
</script>

<style lang="scss">
.yt-loading-app {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .yt-logo {
    position: relative;
    .yt-logo-patch {
      position: absolute;
      left: 42px;
      top: 42px;
      background-color: white;
      height: 92px;
      width: 170px;
    }
  }
}
</style>
