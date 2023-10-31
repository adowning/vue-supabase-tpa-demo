<!-- eslint-disable no-undef -->
<template>
  <!-- <div
    :style="`position: absolute; left: 0px; top: 0px;height: 100vh; width: 100vw; background-image: url(/images/stars.gif); background-repeat: no-repeat; background-size: cover; background-position: center; position: relative;`"
  >
    <Carousel :autoplay="2000" :wrap-around="true">
      <Slide v-for="slide in 10" :key="slide">
        <div class="carousel__item">{{ slide }}</div>
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
    <div id="zim"></div>
  </div> -->
  <div id="zim"></div>
</template>

<script setup lang="ts">
/* eslint-disable no-undef */
import { onMounted, onBeforeUnmount } from 'vue';
// import { Frame, LabelLetters } from 'zimjs';
// eslint-disable-next-line no-undef
import zim, { asset } from 'zimjs';
zim.zimplify();
import { Carousel, Pagination, Slide } from 'vue3-carousel';
import axios from 'axios';
import 'vue3-carousel/dist/carousel.css';

// export default defineComponent({
//   name: 'LoggedOut',
//   components: {
//     Carousel,
//     Slide,
//     Pagination
//   }
// });
let frame: zim.Frame;

onMounted(async () => {
  // given F (Frame), S (Stage), W (width), H (height)
  // put code here
  // new Frame(FIT, 1024, 768, clear, clear, ready);
  var scaling = 'fit'; // this will resize to fit inside the screen dimensions
  var width = 1024;
  var height = 768;
  var color = black;
  var outerColor = darker;

  // used ZIM Asset List https://zimjs.com/assetlist/
  var planetAssets = [
    // '5.png',
    // '6.png',
    // '8.png',
    // '11.png',
    // '12.png',
    // '14.png',
    // '18.png',
    // '20.png',
    // '23.png',
    // '26.png'
  ];
  var assets = [
    'icon.png',
    'glow.png',
    'food.jpg',
    '10.jpg',
    '12.jpg',
    '14.jpg',
    '18.jpg'
    // 'intro.mp3',
    // 'logo.mp3',
    // 'beads.mp3'
  ];
  var path = '/assets/';
  var frame = new Frame(
    scaling,
    width,
    height,
    color,
    outerColor,
    assets,
    path,
    new ProgressBar({
      barType: 'rectangle',
      foregroundColor: purple,
      backgroundColor: dark,
      corner: 5
    })
  );
  frame.on('ready', function () {
    zog('ready from ZIM Frame'); // logs in console (F12 - choose console)

    // STYLE = { color: red, size: 24, once: true, letterSpacing: 1 };
    // new LabelLetters(
    //   'ZIM 015 - List() and Carousel() <font color=orange><i>continuous</i></font> parameter'
    // ).loc(40, 40);
    const stage = F.stage;
    const stageW = F.width;
    const stageH = F.height;

    // const page = new Container(stageW, stageH).addTo().animate({
    //   from: true,
    //   props: { y: -700, rotation: -25 },
    //   ease: 'backOut',
    //   time: 0.45,
    //   wait: 0.3
    //   // call: makeCopy // make a copy once it is positioned (or would have to reset rotation on clone - no big deal)
    // });
    // new Rectangle(stageW, stageH, F.color).addTo(page);
    // new Rectangle(stageW * 0.85, stageH * 0.7, darker)
    //   .loc(60, 60, page)
    //   .sha(black.toAlpha(0.3), 10, 10, 10);
    asset('food.jpg').sca(0.4).loc(100, 100, stage);
    // STYLE = { color: lighter, labelWidth: 500 };
    // new Label('MMMM - Lovely Pasta!').loc(420, 120, page);
    // Style.add({ size: 22, labelWidth: 500 });
    // new Label(
    //   "Photo by Shania Pinnata\n\nThis quick and delicious pasta dish is the perfect way to use up a summer bounty of basil and tomatoes!\n\nDon't have a green thumb? Never fear! You can knock out this classic pasta dish in no time with a jar of prepared pesto sauce."
    // ).loc(420, 180, page);
    // window.pizzazz
    //   .makeIcon('magnify', white)
    //   .loc(440, 425, page)
    //   // .place() // drag item and see location in console F12
    //   .expand() // make a clickable box around it with default 20 pixel padding
    //   .alp(0.7)
    //   .hov(0.9);
    // .tap(toggleMagnify);
    // STYLE = {};
    // new Label('press to magnify', 20, null, green).loc(470, 410, page);
    // .tap(toggleMagnify);

    STYLE = { size: 100, reg: CENTER };
    const items = [
      new asset('10.png'),
      new asset('12.png'),
      new asset('14.png'),
      new asset('18.png')

      //new Emoji('\ud83d\ude0d'),
      //new Emoji('\ud83d\udc3c'),
      //new Emoji('\ud83c\udfb1'),
      //new Emoji('\ud83c\udf1e'),
      //new Emoji('\ud83c\udf52'),
      //new Emoji('\ud83d\ude80')
    ];
    STYLE = {};

    // Here we show a List with continuous
    // Carousel also now has continuous turned on as default

    const list = new List({
      width: 400,
      height: 200,
      backgroundColor: clear,
      color: clear,
      borderColor: clear,
      backdropColor: clear,
      vertical: false,
      currentSelected: true,
      list: items,
      continuous: true,
      slideSnap: false,
      slideFactor: 0.5
    })
      .center()
      .mov(0, 200);

    const holder = new Rectangle(
      300,
      300,
      //   dark.toAlpha(0.05),
      //   dark,
      clear,
      clear,
      1,
      10,
      true
    )
      .centerReg()
      .mov(0, -200);
    var glow = new Sprite(asset('glow.png'), 5, 5)
      .sca(2.2)
      .alp(0.8)
      .centerReg()
      .mov(20, -50)
      .animate({
        time: 3000,
        wait: 1000,
        props: { alpha: 0 },
        from: true,
        rewind: true,
        rewindTime: 600,
        call: function () {
          glow.dispose();
          glow = null;
        }
      })
      .run({ loop: true });

    var logo = asset('food.jpg').sca(0.2).alp(0).centerReg().loc(glow).expand(); // to easily click

    const bar = new Rectangle(30, 200, clear, clear)
      .centerReg(list)
      .addTo()
      .noMouse();
    const barY = list.globalToLocal(bar.x, bar.y).y;
    const barX = list.globalToLocal(bar.x, bar.y).x;

    const emitter = new Emitter({
      obj: new Poly([30, 50, 80], 5, 0.5, [purple, silver, blue, red]),
      gravity: 0,
      force: { min: 3, max: 6 },
      startPaused: true
    }).loc(holder);

    let selected;
    list.on('slidestop', () => {
      loop(list.items, (item) => {
        if (item.hitTestBounds(bar, -10)) {
          if (selected) selected.removeFrom();
          selected = item.content
            .clone()
            .sca(2)
            .center(holder)
            .loc(glow)
            .alp(0)
            .animate({ alpha: 1 }, 0.7);

          emitter.spurt(20);
          var point = item.localToLocal(item.content.x, item.content.y, list);
          //   list.tabs.mov(0, barY - point.y);
          list.tabs.mov(barX - point.x, 0);
        }

        S.update();
      });
    });

    frame.on('keydown', function (e) {
      var diff = 0;
      if (e.keyCode == 37) {
        list.tabs.mov(100, 0);
        loop(list.items, (item) => {
          //   var point = item.localToLocal(item.content.x, item.content.y, list);
          //   console.log(point);
          //   list.tabs.mov(barX - point.x, 0);
          if (item.hitTestBounds(bar, -10)) {
            if (selected) selected.removeFrom();
            selected = item.content
              .clone()
              .sca(2)
              .center(holder)
              .alp(0)
              .animate({ alpha: 1 }, 0.7)
              .effect([
                // apply two effects in an array
                new GlowEffect({ color: purple, blurX: 100, inner: false }),
                new ShadowEffect(20) // 20 is distance
              ]);
            emitter.spurt(20);
            var point = item.localToLocal(item.content.x, item.content.y, list);
            //   list.tabs.mov(0, barY - point.y);
            list.tabs.mov(barX - point.x, 0);
            if (selected) {
              item.effect([
                // apply two effects in an array
                new GlowEffect({ color: purple, blurX: 100, inner: false }),
                new ShadowEffect(20) // 20 is distance
              ]);
            } else {
              item.noEffect('glow');
              item.noEffect('shadow');
            }
          }
          S.update();
        });
      }
      if (e.keyCode == 39) {
        list.tabs.mov(-100, 0);
        loop(list.items, (item) => {
          //   var point = item.localToLocal(item.content.x, item.content.y, list);
          //   console.log(point);
          //   list.tabs.mov(barX - point.x, 0);
          if (item.hitTestBounds(bar, -10)) {
            if (selected) selected.removeFrom();
            selected = item.content
              .clone()
              .sca(2)
              .center(holder)
              .alp(0)
              .animate({ alpha: 1 }, 0.7)
              .effect([
                // apply two effects in an array
                new GlowEffect({
                  color: purple,
                  blurX: 10,
                  blurY: 10,
                  strenght: 7,
                  quality: 2,
                  knockout: false
                })
                // new ShadowEffect(20) // 20 is distance
              ]);
            emitter.spurt(20);
            var point = item.localToLocal(item.content.x, item.content.y, list);
            //   list.tabs.mov(0, barY - point.y);
            list.tabs.mov(barX - point.x, 0);
          }
          S.update();
        });
      }
    });
    // let selected;
    // list.tap(()=>{
    //     if (selected) selected.removeFrom();
    //     selected = list.selected.content.clone().sca(2).center(holder);
    // });

    F.madeWith({
      box: F.color,
      text: 'ZIM_015',
      slats: [red, red, red, red, red],
      edges: red,
      color: red,
      borderWidth: 2,
      borderColor: red
    })
      .sca(1.8)
      .pos(40, 20, RIGHT, BOTTOM);
    // OR add custom label (needed to change label color for instance)
  });
});
onBeforeUnmount(() => {
  F.dispose();
});
</script>
