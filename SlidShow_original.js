let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
"http://wakkanai-brand.jp/img/chiikishigen/c02_souyamisaki_600.jpg",
"https://easthokkaido.com/eastwp/wp-content/uploads/pixta_36153941_L.jpg",
"https://hokkaidoblog.gutabi.jp/wp/wp-content/uploads/2020/01/28046971f261ddc2b305fb8f62f8d2bf.jpg",
"https://www.asahicom.jp/and/travel/wp-content/uploads/2020/05/1-12-e1589611648957.jpg",
"https://www.jalan.net/jalan/img/5/kuchikomi/0565/KXL/05965_0000565761_1.jpg",
"https://nihonsankei.jp/matsu/matsu_kanko_i1.jpg",
"https://onsenbu.net/wp-content/uploads/2017/04/kusatsu-1404992_1280-728x485.jpg",
"https://tabichoro.com/wp-content/uploads/2020/09/b62238e9827f914b90b169f7f9ebc021-1-1024x768.jpg",
"https://www.matsumoto-castle.jp/img/about/image00.jpg",
"https://www.be-en.co.jp/upload/save_image/0707132738_60e52d3a713e3.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Tateishi_park_20160904.jpg/1200px-Tateishi_park_20160904.jpg",
"https://www.glamping-fuji.com/wp-content/uploads/2021/03/oshinohakkai.jpg",
"https://media.gqjapan.jp/photos/61bbe94923db6595ca11e009/16:9/w_2560%2Cc_limit/shiro-5-2.jpg",
"https://www.bichu-okayama.jp/assets/upload/2021/03/f4ca578810d6d2118e6ef5e49aaa8d69495f26af.jpg",
"https://cdn.zekkei-japan.jp/images/spots/9d7d2746500ee06f24c9bc7032fec3fa.jpg",
"https://atta.ai/media/jp/wp-content/uploads/2019/09/591-itsukushima_0.jpg",
"https://rlx.jp/journal/wp-content/uploads/2019/09/pixta_68965435_M.jpg",
"https://dogo.jp/wp-content/themes/dogo.jp/img/onsen/honkan/photo_top.jpg",
"https://niyodoblue.jp/img_data/article-6_1.jpg?19700101090000",
"https://shikoku-tourism.com/image/rendering/attraction_image/12647/trim.900/3/2?v=c79d4ce859c46a640607d8df15f3b809c82ff720",
"https://i2.wp.com/zettabi.com/wp-content/uploads/2020/01/DSC_4751.jpg?ssl=1",
"https://guidememo.jp/wp-content/uploads/2018/07/setobridge11a.jpg",
];

function left() {
  // console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
  mainElement.setAttribute('src', url[count]);
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
  mainElement.setAttribute('src', url[count]);
}

let timer;
let nowPlaying = false;

function autoPlay() {
  right();
  timer = setTimeout(function() {
    autoPlay();
  }, 200);
}

function play() {
  if (nowPlaying) {
    return;
  }
  nowPlaying = true;
  autoPlay();
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}
