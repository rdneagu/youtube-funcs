<template>
  <section class="yt-loading-app">
    <div class="yt-logo">
      <img src="@/assets/images/yt_logo_mono_dark.png" />
      <div class="yt-logo-patch">
        <div class="yt-logo-animation"></div>
      </div>
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
      left: 1px;
      top: 42px;
      background-color: white;
      height: 92px;
      width: 252px;
      border-radius: 25px;
      overflow: hidden;
      .yt-logo-animation {
        position: absolute;
        top: 15px;
        left: 90px;
        animation: yt-swing 1.5s ease infinite;
        &:before {
          position: absolute;
          content: "";
          border: solid darken(crimson, 32%);
          border-width: 0 20px 20px 0;
          padding: 20px;
          transform: rotate(-45deg);
        }
        &:after {
          position: absolute;
          top: 10px;
          left: 20px;
          height: 40px;
          width: 40px;
          content: "";
          transform: rotate(-45deg);
          background: darken(crimson, 32%);
        }
      }
    }
  }
}

@keyframes yt-swing {
  0% { left: 90px; }
  50% { left: 252px; }
  50.000001% { left: -162px; }
  100% { left: 90px; }
}
</style>
