<template>
  <div class="top">
    <div class="icon"></div>
  </div>
</template>
<style scoped>
.top {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 72px;
  z-index: 999;
  background-image: url('/images/ui/top.png');
  background-repeat: no-repeat;

  background-size: contain;
}
.icon {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 32px;
  z-index: 999;
  background-image: url('/images/ui/cfc.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
</style>
