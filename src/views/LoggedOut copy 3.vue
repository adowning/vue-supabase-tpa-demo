<template>
  <!-- <div id="zim"></div> -->
  <div></div>
</template>

<script setup>
/* eslint-disable no-undef */
import { onMounted, onBeforeUnmount } from 'vue';
// import { Frame, LabelLetters } from 'zimjs';
// eslint-disable-next-line no-undef
import zim from 'zimjs';
zim.zimplify();
// onMounted(async () => {
// given F (Frame), S (Stage), W (width), H (height)
// put code here
// new Frame(FIT, 1024, 768, clear, clear, ready);
//});

// SCALING OPTIONS
// scaling can have values as follows with full being the default
// "fit"    sets canvas and stage to dimensions and scales to fit inside window size
// "outside"    sets canvas and stage to dimensions and scales to fit outside window size
// "full"    sets stage to window size with no scaling
// "tagID"    add canvas to HTML tag of ID - set to dimensions if provided - no scaling

var scaling = 'fit'; // this will resize to fit inside the screen dimensions
var width = 1024;
var height = 1768;
var color = black;
var outerColor = darker;
const colors = [
  '#02befd',
  '#16042a',
  '#f743e0',
  '#69ff48',
  '#ece427',
  '#722079'
];
// used ZIM Asset List https://zimjs.com/assetlist/
var planetAssets = [
  '5.png',
  '6.png',
  '8.png',
  '11.png',
  '12.png',
  '14.png',
  '18.png',
  '20.png',
  '23.png',
  '26.png'
];
var assetsx = planetAssets.concat(
  'icon.png',
  'glow.png',
  'intro.mp3',
  'logo.mp3',
  'beads.mp3'
);
var assets = [
  'africanking.webp',
  'africankingback.jpg',
  'africankinglogo.png',
  'aladdinschest.webp',
  'aladdinschestback.jpg',
  'background.jpg',
  'bananas.webp',
  'bananasback.jpg',
  'bananaslogo.png',
  'bookofnile.webp',
  'bookofnileback.jpg',
  'bookofnilelostchapter.webp',
  'bookofnilelostchapterback.jpg',
  'blowup.png',
  'bookofnilerevenge.webp',
  'bookofnilerevengeback.jpg',
  'charming.webp',
  'charmingback.jpg',
  'cleosheart.webp',
  'cleosheartback.jpg',
  'cleosheartlogo.png',
  'cloverstones.webp',
  'cloverstonesback.jpg',
  'crazyscientist.webp',
  'crazyscientistback.jpg',
  'crazyscientistlogo.png',
  'dancinglanterns2.webp',
  'default-background.png',
  'discofruits.webp',
  'discofruitsbackground.jpg',
  'fortunecash.webp',
  'frostyfruits.webp',
  'goldenfruits.webp',
  'goldentree.webp',
  'hitinvegas.webp',
  'hotcashholdnlink.webp',
  'jackpotsevens.webp',
  'jungle2.webp',
  'LargeBigTop.png',
  'LargeBlackDiamond.png',
  'LargeBrauhaus.png',
  'LargeInterstellarAttack.png',
  'LargeLighteningLeopard.png',
  'LargeMajesticCats.png',
  'magictree.webp',
  'mmalegends.webp',
  'qrcodebackground.png',
  'quickcashfruits.webp',
  'rapidstrike.webp',
  'redhotchilli7s.webp',
  'royal20fruits.webp',
  'royal40fruits_1.webp',
  'royal40fruits.webp',
  'spacerocks.webp',
  'stars.gif',
  'wildbuffalo.webp',
  'wolfreels.webp',
  'wolfreels.xcf',
  'zenzencash.webp'
];

var path = 'images/';

// as of ZIM 5.5.0 you do not need to put zim before ZIM functions and classes
let frame;
onMounted(async () => {
  Theme.set('neon');
  frame = new Frame(
    scaling,
    width,
    height,
    color,
    outerColor,
    null,
    assets,
    path,
    new ProgressBar({
      barType: 'rectangle',
      foregroundColor: green,
      backgroundColor: dark,
      corner: 5
    })
  );

  await frame.loadAssets();

  frame.on('ready', function () {
    zog('ready from ZIM Frame'); // logs in console (F12 - choose console)
    const maxW = 1200;
    const maxH = 3000;
    // new Page(W, H, colors[0], colors[1]).addTo();
    const glows = new Page(stageW, stageH, colors[0], colors[1]).addTo().bot();
    loop(200, () => {
      let r = rand(5, 15);
      let glow = new Circle(
        r,
        new RadialColor([white, clear], [0, 1], 0, 0, 0, 0, 0, r)
      )
        .alp(0.5)
        .loc(rand(maxW), rand(maxH), glows)
        .cache();
      glow.vx = rand(0.5, 1);
      glow.vy = rand(-0.5, -1);
    });

    // Animate glows
    Ticker.add(() => {
      glows.loop((glow) => {
        glow.x += glow.vx;
        glow.y += glow.vy;
        if (glow.x > maxW + 20) glow.loc(rand(-100), rand(maxH));
        if (glow.y < -20) glow.loc(rand(maxW), maxH + rand(50));
      });
    });
    // new Page(W, H, colors[0], colors[1]).addTo();

    // note relative rotation
    // loop(50, (i) => {
    //   let x = rand(W);
    //   let rMin = 5;
    //   let rMax = 15;
    //   let r = rand(rMin, rMax);
    //   // we will make farther away (smaller) snowflakes be darker
    //   // if at the smallest radius it will be darkened by .5
    //   // if at the largest radius it will be darkened by 0
    //   // we could calculate this, but ZIM has Proportion to make it easy
    //   let colorDarken = new Proportion(rMin, rMax, 0.5, 0);
    //   let color = colors[1].darken(colorDarken.convert(r));
    //   let flake = new Poly(r, 5, 0.6, clear, colors[3], 1)
    //     .loc(x, -100)
    //     .outline(colors[4])
    //     .animate({
    //       props: {
    //         x: x + rand(-200, 100),
    //         y: H - 100
    //       },
    //       time: 30 - r,
    //       ease: 'linear',
    //       loop: true
    //     });
    //   flake.percentComplete = rand(100);
    //   flake.wiggle('regX', 10, 100, 3, 10);
    //   flake.wiggle('rotation', 10, 100, 3, 10);
    //   let blur = rand(8);
    //   flake.effect(new BlurEffect(blur, blur));
    // });

    var stage = frame.stage;
    var stageW = frame.width;
    var stageH = frame.height;

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // GREETINGS

    // Chrome and mobile does not play sound until interacting
    // so put a message then play sound - pain in the neck...

    // var pane = new Pane({
    //   width: stageW,
    //   height: 100,
    //   backgroundColor: purple,
    //   corner: -20,
    //   label: new Label(
    //     'ZIM Beads places objects around Squiggle and Blob paths   ▶',
    //     24,
    //     'verdana',
    //     darker
    //   )
    // }).show();
    // pane.on('close', init);
    var currentImageName = '';
    // function init() {
    STYLE = { size: 300, height: 350, reg: CENTER };
    const items = [
      new Pic('africanking.webp', 200, 100),
      new Pic('aladdinschest.webp', 200, 100),
      new Pic('bananas.webp', 200, 100),
      new Pic('bookofnile.webp', 200, 100),
      new Pic('bookofnilelostchapter.webp', 200, 100),
      new Pic('bookofnilerevenge.webp', 200, 100),
      new Pic('charming.webp', 200, 100),
      new Pic('cleosheart.webp', 200, 100),
      new Pic('cloverstones.webp', 200, 100),
      new Pic('crazyscientist.webp', 200, 100),
      new Pic('dancinglanterns2.webp', 200, 100),
      new Pic('discofruits.webp', 200, 100),
      new Pic('fortunecash.webp', 200, 100),
      new Pic('frostyfruits.webp', 200, 100),
      new Pic('goldenfruits.webp', 200, 100),
      new Pic('goldentree.webp', 200, 100),
      new Pic('hitinvegas.webp', 200, 100),
      new Pic('hotcashholdnlink.webp', 200, 100),
      new Pic('jackpotsevens.webp', 200, 100),
      new Pic('jungle2.webp', 200, 100),
      new Pic('magictree.webp', 200, 100),
      new Pic('mmalegends.webp', 200, 100),
      new Pic('quickcashfruits.webp', 200, 100),
      new Pic('rapidstrike.webp', 200, 100),
      new Pic('redhotchilli7s.webp', 200, 100),
      new Pic('royal20fruits.webp', 200, 100),
      new Pic('royal40fruits_1.webp', 200, 100),
      new Pic('royal40fruits.webp', 200, 100),
      new Pic('spacerocks.webp', 200, 100),
      new Pic('wildbuffalo.webp', 200, 100),
      new Pic('wolfreels.webp', 200, 100),
      new Pic('zenzencash.webp', 100, 100)
    ];
    const itemBacks = [
      new Pic('africankingback.jpg', 200, 100),
      new Pic('aladdinschestback.jpg', 200, 100),
      new Pic('bananasback.jpg', 200, 100),
      new Pic('bookofnileback.jpg', 200, 100),
      new Pic('bookofnilelostchapterback.jpg', 200, 100),
      new Pic('bookofnilerevengeback.jpg', 200, 100),
      new Pic('charmingback.jpg', 200, 100),
      new Pic('cleosheartback.jpg', 200, 100),
      new Pic('cloverstonesback.jpg', 200, 100),
      new Pic('crazyscientistback.jpg', 200, 100),
      new Pic('dancinglanterns2back.jpg', 200, 100),
      new Pic('discofruitsback.jpg', 200, 100),
      new Pic('fortunecashback.jpg', 200, 100),
      new Pic('frostyfruitsback.jpg', 200, 100),
      new Pic('goldenfruitsback.jpg', 200, 100),
      new Pic('goldentreeback.jpg', 200, 100),
      new Pic('hitinvegasback.jpg', 200, 100),
      new Pic('hotcashholdnlinkback.jpg', 200, 100),
      new Pic('jackpotsevensback.jpg', 200, 100),
      new Pic('jungle2back.jpg', 200, 100),
      new Pic('magictreeback.jpg', 200, 100),
      new Pic('mmalegendsback.jpg', 200, 100),
      new Pic('quickcashfruitsback.jpg', 200, 100),
      new Pic('rapidstrikeback.jpg', 200, 100),
      new Pic('redhotchilli7sback.jpg', 200, 100),
      new Pic('royal20fruitsback.jpg', 200, 100),
      new Pic('royal40fruits_1back.jpg', 200, 100),
      new Pic('royal40fruitsback.jpg', 200, 100),
      new Pic('spacerocksback.jpg', 200, 100),
      new Pic('wildbuffaloback.jpg', 200, 100),
      new Pic('wolfreelsback.jpg', 200, 100),
      new Pic('zenzencashback.jpg', 100, 100)
    ];

    STYLE = {};

    // Here we show a List with continuous
    // Carousel also now has continuous turned on as default

    const list = new List({
      width: stageW,
      height: 350,
      backgroundColor: blue,
      color: blue,
      borderColor: blue,
      backdropColor: clear,
      vertical: false,
      currentSelected: true,
      list: items,
      continuous: true
      // slideSnap: false,
      // resizeHandle: true,
      // slideFactor: 0.5,
      // align: LEFT,
      // valign: BOTTOM
    })
      .center()
      // .pos(CENTER, BOTTOM);
      .mov(0, 600);

    const list2 = new List({
      width: 0,
      height: 0,
      backgroundColor: blue,
      color: blue,
      borderColor: blue,
      backdropColor: clear,
      vertical: false,
      currentSelected: true,
      list: itemBacks,
      continuous: true,
      hideObject: true
      // slideSnap: false,
      // resizeHandle: true,
      // slideFactor: 0.5,
      // align: LEFT,
      // valign: BOTTOM
    })
      .center()
      // .pos(CENTER, BOTTOM);
      .mov(0, 500);
    const backHolder = new Rectangle(
      stageW,
      stageH / 2,
      dark.toAlpha(0.05),
      dark,
      // clear,
      // clear,
      1,
      10,
      true
    )
      .centerReg()
      .mov(0, -200);
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
    // var glow = new Sprite(asset('glow.png'), 5, 5)
    //   .sca(2.2)
    //   .alp(0.8)
    //   .centerReg()
    //   .mov(20, -50)
    //   .animate({
    //     time: 3000,
    //     wait: 1000,
    //     props: { alpha: 0 },
    //     from: true,
    //     rewind: true,
    //     rewindTime: 600,
    //     call: function () {
    //       glow.dispose();
    //       glow = null;
    //     }
    //   })
    //   .loc(holder)
    //   .run({ loop: true });

    // var logo = asset('food.jpg').sca(0.2).alp(0).centerReg().loc(glow).expand(); // to easily click

    const bar = new Rectangle(30, 200, clear, clear)
      .centerReg(list)
      .addTo()
      .noMouse();
    const barY = list.globalToLocal(bar.x, bar.y).y;
    const barX = list.globalToLocal(bar.x, bar.y).x;
    let x = rand(W);
    let rMin = 5;
    let rMax = 25;
    let r = rand(rMin, rMax);
    // let sstar = new Poly(r, 5, 0.6, clear, colors[rand(0, 4)], 1)
    //   .loc(x, -100)
    //   .outline(colors[rand(0, 4)])
    //   .animate({
    //     props: {
    //       x: x + rand(-200, 100),
    //       y: H - 100
    //     },
    //     time: 30 - r,
    //     ease: 'bounceOut',
    //     loop: true
    //   });
    const emitter = new Emitter({
      obj: new Poly(r, 5, 0.6, clear, colors[rand(0, 4)], 1)
        .loc(x, -100)
        .sca(2)
        .outline(colors[rand(0, 4)]),
      // .animate({
      //   props: {
      //     x: x + rand(-200, 100),
      //     y: H - 100
      //   },
      //   time: 30 - r,
      //   ease: 'bounceOut',
      //   loop: true
      // }),
      random: {
        color: [
          colors[0],
          colors[1],
          colors[2],
          colors[3],
          colors[4],
          colors[5]
        ]
      },
      gravity: 0,
      width: 300,
      height: 300,
      life: 1,
      decayTime: 0.1,
      force: { min: 4, max: 18 },
      startPaused: true
    })
      .sca(1.1)
      .loc(holder);
    // const emitter = new Emitter({
    //   obj: new Poly(r, 5, 0.6, clear, colors[rand(5)], 1).outline(
    //     colors[rand(5)]
    //   ),
    //   gravity: 0,
    //   force: { min: 2, max: 20 },
    //   num: 5,
    //   startPaused: true
    // }).loc(holder);
    let selected;
    let selectedBack;
    // list.on('slidestop', () => {
    //   loop(list.items, (item) => {
    //     if (item.hitTestBounds(bar, -10)) {
    //       if (selected) selected.removeFrom();
    //       selected = item.content
    //         .clone()
    //         .sca(2)
    //         .center(holder)
    //         .loc(glow)
    //         .alp(0)
    //         .animate({ alpha: 1 }, 0.7);

    //       emitter.spurt(20);
    //       var point = item.localToLocal(item.content.x, item.content.y, list);
    //       //   list.tabs.mov(0, barY - point.y);
    //       list.tabs.mov(barX - point.x, 0);
    //     }

    //     S.update();
    //   });
    // });

    frame.on('keydown', function (e) {
      // loop(5, (i) => {
      //   new Circle(450 - 30 * i, white).alp(0.2).center(holder);
      // });
      var diff = 0;
      if (e.keyCode == 37) {
        //left
        list.tabs.mov(items[0].width, 0);
        loop(list.items, (item, index) => {
          //   var point = item.localToLocal(item.content.x, item.content.y, list);
          //   console.log(point);
          //   list.tabs.mov(barX - point.x, 0);
          if (item.hitTestBounds(bar, -10)) {
            if (selected) selected.removeFrom();
            if (selectedBack) selectedBack.removeFrom();

            currentImageName = item.content.file.replace('.webp', '');
            console.log(currentImageName);
            selected = item.content
              .clone()
              .sca(1)

              .center(holder)
              .alp(0)
              .animate({ alpha: 1 }, 0.9)
              .effect([
                // apply two effects in an array
                new GlowEffect({ color: purple, blurX: 10, inner: false })
                // new ShadowEffect(20) // 20 is distance
              ]);
            // emitter.spurt(20);
            zog(itemBacks[index].parent);
            zog(items[index].parent);
            selectedBack = new Pic(
              currentImageName + 'back.jpg',
              stageW,
              stageH
            )
              // .sca(1.9)

              .center(backHolder)
              .alp(0)
              .animate({ alpha: 1 }, 0.9);

            var point = item.localToLocal(item.content.x, item.content.y, list);
            //   list.tabs.mov(0, barY - point.y);
            list.tabs.mov(barX - point.x, 0);
            if (selected) {
              // item.effect([
              //   // apply two effects in an array
              //   new GlowEffect({ color: purple, blurX: 100, inner: false }),
              //   new ShadowEffect(20) // 20 is distance
              // ]);
            } else {
              item.noEffect('glow');
              item.noEffect('shadow');
            }
          }
          S.update();
        });
        S.update();
      }
      if (e.keyCode == 39) {
        list.tabs.mov(-items[0].width, 0);

        loop(list.items, (item) => {
          //   var point = item.localToLocal(item.content.x, item.content.y, list);
          //   console.log(point);
          //   list.tabs.mov(barX - point.x, 0);
          if (item.hitTestBounds(bar, -10)) {
            if (selected) selected.removeFrom();
            selected = item.content
              .clone()
              .sca(1)
              .center(holder)
              .alp(0)
              .animate({ alpha: 1 }, 0.9)

              .effect([
                // apply two effects in an array
                new GlowEffect({
                  color: purple,
                  strenght: 20,
                  inner: false
                })

                // new ShadowEffect(20) // 20 is distance
              ]);
            // emitter.spurt(20);
            var point = item.localToLocal(item.content.x, item.content.y, list);
            //   list.tabs.mov(0, barY - point.y);
            list.tabs.mov(barX - point.x, 0);
            if (selected) {
              // item.effect([
              //   // apply two effects in an array
              //   new GlowEffect({ color: purple, blurX: 100, inner: false }),
              //   new ShadowEffect(20) // 20 is distance
              // ]);
            } else {
              item.noEffect('glow');
              item.noEffect('shadow');
            }
          }
          S.update();
        });
      }
      if (e.keyCode == 40) {
        new Pic('burst.png').center(selected);
        new Pic('burst.png').center(backHolder);
        // .animate({ scale: 2 }, 3, 'bounceOut');

        selected.sca(0.3);
        selected.animate({ scale: 1.4 }, 1.4, 'bounceOut');
        // var glow = new GlowEffect({
        //   color: red,
        //   blurX: 50,
        //   blurY: 50,
        //   strength: 1,
        //   quality: 1
        //   // inner:false,
        //   // hideObject:false
        // });

        // selected.effect([glow]);
        // selected.hue = -80;

        // pic.wiggle("saturation", -50, 50, 100, 1, 3)

        // selected.animate({
        //   props: { 'effects.glow.blurX': 0 },
        //   rewind: true,
        //   time: 1,
        //   rewindTime: 1,
        //   loop: true,
        //   events: true,
        //   ease: 'linear'
        // });
        emitter.spurt(40);

        S.update();
      }
    });
    // } // end init

    // HEADER / FOOTER
    // if copying code - do not copy header and footer
    // makeHeader('ZIM Beads() - Planets', 'Beads', true, 'TEN', '../ten.html');
    // makeFooter(); // already have an icon...

    stage.update(); // this is needed to show any changes
  }); // end of ready
}); // end of ready
// });
onBeforeUnmount(() => {
  frame.dispose();
});
</script>
