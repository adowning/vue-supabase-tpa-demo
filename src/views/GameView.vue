<template>
  <div
    class="games-box-content"
    data-module="game-box"
    data-mode="standard"
    style="height: auto"
  >
    <div class="games-box-placeholder" style="display: none">
      <div class="games-box-placeholder-image">
        <picture
          ><source
            srcset="
              https://static.casino.guru/pict/508971/The-Thimbles.jpg?timestamp=1687240632000&amp;width=838&amp;imageDataId=545869&amp;webp=true&amp;compressWebp=85
            "
            type="image/webp" />
          <img
            src="https://static.casino.guru/pict/508971/The-Thimbles.jpg?timestamp=1687240632000&amp;width=838&amp;imageDataId=545869"
            alt="The Thimbles.jpg"
        /></picture>
      </div>
      <div class="btn-wrapper">
        <span
          id="game_link"
          class="games-box-btn-main"
          data-url="https://int.onlyplay.net/integration/request_frame/?game=thimbles"
          data-fallback-url="/gameDetailIos?gameId=18353"
          data-open-in-new-tab="false"
          data-requireflash="false"
          data-ga-id="gamDet_top_btn_play"
          ><span class="icon-wrapper"
            ><svg width="20" height="20" class="c-white">
              <use xlink:href="#base_ui_ico_play_mark"></use></svg></span
          ><span class="text"
            ><strong>Play for Free</strong
            ><small>100% free / No limits</small></span
          ></span
        >
      </div>
    </div>
    <div class="games-box-game" style="height: 455px; display: block">
      <div class="iframe-wrapper" style="aspect-ratio: 16/9">
        <iframe
          src="https://int.onlyplay.net/integration/request_frame/?game=thimbles"
          frameborder="0"
          id="gamefileEmbed1"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  </div>

  <!-- <div class="gamebox-wrapper">
    <div class="iframe-wrapper" style="aspect-ratio: 16/9">
      <iframe
        src="https://int.onlyplay.net/integration/request_frame/?game=thimbles"
        frameborder="0"
        id="gamefileEmbed1"
        scrolling="no"
      ></iframe>
    </div>
  </div> -->
</template>
<style scoped>
.games-box-game {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  text-rendering: auto;
  cursor: default;
  color: #fff;
  box-sizing: border-box;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  width: 100%;
  top: 0;
  left: 0;
  margin: 0 auto;
  align-items: center;
  height: 455px;
  display: block;
}
.games-box-content {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  text-rendering: auto;
  cursor: default;
  color: #fff;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  min-height: 200px;
  background: #000;
  position: relative;
  overflow: hidden;
  max-height: calc(100vh - 290px);
  display: flex;
  align-items: center;
  height: auto;
}
.gamebox-wrapper {
  width: 100vw;
  height: 100vh;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  text-rendering: auto;
  color: #1d2730;
  cursor: default;
  box-sizing: border-box;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  position: relative;
  margin: 0 auto;
  max-width: 1184px;
}
.iframe-wrapper {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  text-rendering: auto;
  cursor: default;
  color: #fff;
  box-sizing: border-box;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  height: 100vh;
  height: 100vw;
  margin: auto;
}
</style>
