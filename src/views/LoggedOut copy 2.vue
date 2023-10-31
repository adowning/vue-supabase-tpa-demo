<template>
  <div id="zim"></div>
</template>

<script setup lang="ts">
/* eslint-disable no-undef */
import { onMounted, onBeforeUnmount } from 'vue';
// import { Frame, LabelLetters } from 'zimjs';
// eslint-disable-next-line no-undef
import zim from 'zimjs';
zim.zimplify();
onMounted(async () => {
  // given F (Frame), S (Stage), W (width), H (height)
  // put code here
  // new Frame(FIT, 1024, 768, clear, clear, ready);
  var scaling = 'fit'; // this will resize to fit inside the screen dimensions
  var width = 1024;
  var height = 768;
  var color = black;
  var outerColor = darker;

  var assets = [
    'icon.png',
    'glow.png',
    'food.jpg',
    '11.jpg',
    '12.jpg',
    '14.jpg',
    '18.jpg'
  ];
  var path = 'assets/';
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
    zog('ready from ZIM Frame');
    const items = [
      asset('assets/11.png'),
      asset('assets/12.png'),
      asset('assets/14.png'),
      asset('assets/18.png'),
      asset('assets/11.png'),
      asset('assets/12.png'),
      asset('assets/14.png'),
      asset('assets/18.png')
    ];
    const list = new List({
      width: 1000,
      height: 300,
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
      dark.toAlpha(0.05),
      dark,
      //  clear,
      // clear,
      1,
      10,
      true
    )
      .centerReg()
      .mov(0, -200);
    const bar = new Rectangle(30, 200, dark.toAlpha(0.05), dark)
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

    new QR('some url').sca(0.5).pos(40, 40, RIGHT, BOTTOM);

    frame.on('keydown', function (e) {
      var diff = 0;
      if (e.keyCode == 37) {
        list.tabs.mov(250, 0);
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
        list.tabs.mov(-250, 0);
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
  });
  //S.update();
  //});
});
</script>
