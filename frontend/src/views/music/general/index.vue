<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
  <title>MiniMusicPlayer</title>
  <style>
    body {
      font-family: sans-serif;
    }

    input, button {
      outline: none;
    }

    .main {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      min-width: 922px;
      height: 667px;
      color: #fff;
      background-color: rgba(0, 0, 0, .8);
      /*border: 2px solid #000;*/
    }

    .bg-blur {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      filter: blur(20px);
      z-index: -1;
    }

    .open-search {
      position: absolute;
      top: 20px;
      left: 20px;
      font-size: 18px;
      background-color: transparent;
      border: none;
      color: #fff;
      outline: none;
    }

    .disc {
      position: relative;
      margin-top: 10%;
      margin-left: 10%;
      width: 300px;
      height: 300px;
      border-radius: 300px;
      transform: rotate(45deg);
      background-image: radial-gradient(5em 30em ellipse, #fff, #000);
      border: 2px solid #131313;
      box-shadow: 0 0 0 10px #343935;
      opacity: 0.7;
    }

    .song-img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform-origin: center center;
      transform: translate(-50%, -50%) rotate(0deg);
      width: 200px;
      height: 200px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      border: 2px solid #000;
      border-radius: 200px;
      animation: animations1 10s linear infinite forwards;
      animation-play-state: paused;
    }

    @keyframes animations1 {
      0% {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      50% {
        transform: translate(-50%, -50%) rotate(180deg);
      }
      100% {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }

    .right-part {
      position: absolute;
      top: 0;
      right: 0;
      width: 50%;
      height: 600px;
      overflow: hidden;
    }

    .title {
      margin: 50px 0 0 30px;
      font-size: 30px;
    }

    .artist {
      margin: 0 30px;
      font-size: 16px;
      line-height: 50px;
      border-bottom: 1px solid #fff;
    }

    .lyrics {
      margin-top: 20px;
      padding-right: 25px;
      width: 100%;
      height: 400px;
      line-height: 35px;
      overflow-y: scroll;
      color: #fff;
      white-space: pre-line;
      text-align: center;
    }

    .lyrics::-webkit-scrollbar {
      display: none;
    }

    .pink {
      color: #eb7470;
    }

    .ctrl-box {
      display: inline-block;
      margin: 15% 0 0 10%;
      padding-left: 10px;
      vertical-align: middle;
      background-color: rgba(0, 0, 0, .3);
      border-radius: 10px;
    }

    .play {
      margin: 0 20px;
      position: relative;
      display: inline-block;
      height: 36px;
      width: 36px;
      border: 2px solid #fff;
      border-radius: 40px;
      -webkit-border-radius: 40px;
      -moz-border-radius: 40px;
      background-color: transparent;
    }

    .black-play {
      border-color: #000 !important;
    }

    .black-play:after, .black-play:before {
      border-left-color: #000 !important;
    }

    .play:before {
      content: '';
      height: 0;
      width: 0;
      display: block;
      border: 10px transparent solid;
      border-right-width: 0;
      border-left-color: #fff;
      position: absolute;
      top: 8px;
      left: 15px;
    }

    .pause {
      margin: 0 20px;
      position: relative;
      display: inline-block;
      height: 36px;
      width: 36px;
      border: 2px solid #fff;
      border-radius: 20px;
      -webkit-border-radius: 20px;
      -moz-border-radius: 20px;
    }

    .black-pause {
      border-color: #000 !important;
    }

    .black-pause:after.black-pause:before {
      background: #000 !important;
    }

    .pause:before, .pause:after {
      content: '';
      height: 20px;
      width: 4px;
      display: block;
      background: #fff;
      position: absolute;
      top: 8px;
      left: 12px;
    }

    .pause:after {
      left: 20px;
    }

    .last {
      position: relative;
      display: inline-block;
      height: 36px;
      width: 36px;
      border: 2px solid #fff;
      border-radius: 20px;
      -webkit-border-radius: 20px;
      -moz-border-radius: 20px;
    }

    .black-last {
      border-color: #000 !important;
    }

    .black-last:after {
      border-left-color: #000;
    }

    .black-last:before {
      background: #000;
    }

    .last:before {
      content: '';
      height: 0;
      width: 0;
      display: block;
      border: 10px transparent solid;
      border-left-width: 0;
      border-right-color: #fff;
      position: absolute;
      top: 8px;
      left: 16px;
    }

    .last:after {
      content: '';
      height: 20px;
      width: 4px;
      display: block;
      background: #fff;
      position: absolute;
      top: 8px;
      left: 10px;
    }

    .next {
      position: relative;
      display: inline-block;
      height: 36px;
      width: 36px;
      border: 2px solid #fff;
      border-radius: 20px;
      -webkit-border-radius: 20px;
      -moz-border-radius: 20px;
    }

    .black-next {
      border-color: #000 !important;
    }

    .black-next:before {
      border-right-color: #000 !important;
    }

    .black-next:after {
      background: #000 !important;
    }

    .next:before {
      content: '';
      height: 0;
      width: 0;
      display: block;
      border: 10px transparent solid;
      border-right-width: 0;
      border-left-color: #fff;
      position: absolute;
      top: 8px;
      left: 10px;
    }

    .next:after {
      content: '';
      height: 20px;
      width: 4px;
      display: block;
      background: #fff;
      position: absolute;
      top: 8px;
      left: 22px;
    }

    .voice-icon {
      position: relative;
      display: inline-block;
      margin-left: 20px;
      width: 150px;
      height: 42px;
    }

    .voice-icon-oh {
      position: absolute;
      height: 10px;
      width: 10px;
      display: block;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }

    .voice-icon-oh:before {
      content: '';
      height: 8px;
      width: 6px;
      display: block;
      background: #fff;
    }

    .voice-icon-oh:after {
      content: '';
      height: 8px;
      width: 0;
      display: block;
      border: 5px transparent solid;
      border-left-width: 0;
      border-right-color: #fff;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 6px;
    }

    .voice-icon-ov {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 2px;
    }

    .voice-icon-ov:before {
      content: '';
      height: 19px;
      width: 15px;
      display: block;
      border: 2px solid transparent;
      border-right: 2px solid #FFF;
      border-radius: 20px;
      -webkit-border-radius: 20px;
      -moz-border-radius: 20px;
    }

    .voice-icon-ov:after {
      content: '';
      height: 15px;
      width: 15px;
      display: block;
      border: 2px solid transparent;
      border-right: 2px solid #FFF;
      border-radius: 15px;
      -webkit-border-radius: 15px;
      -moz-border-radius: 15px;
      position: absolute;
      top: 2px;
      left: -4px;
    }

    .voice-icon-cv {
      position: absolute;
      top: 50%;
      left: -6px;
      transform: translateY(-50%);
    }

    .voice-icon-cv:before {
      content: '';
      height: 22px;
      width: 22px;
      display: block;
      border: 2px solid #fff;
      border-radius: 22px;
    }

    .voice-icon-cv:after {
      content: '';
      height: 25px;
      width: 2px;
      display: block;
      background: #fff;
      position: absolute;
      top: 0;
      left: 12px;
      transform: rotate(45deg);
    }

    .voice {
      float: right;
      margin: 16px 20px 0 0 ;
      width: 100px !important;
    }

    .progress-bar {
      position: fixed;
      bottom: 20px;
      left: 20px;
      width: 100%;
    }

    .timer {
      vertical-align: sub;
    }

    input[type=range] {
      -webkit-appearance: none;
      width: 80%;
      height: 8px;
      border-radius: 10px;
      background-color: #fff;
    }

    /*input[type=range]::-moz-range-progress {*/
    /*height: 0;*/
    /*}*/
    input[type=range]::-webkit-slider-thumb, input[type=range]::-moz-range-thumb {
      -webkit-appearance: none;
    }

    input[type=range]::-webkit-slider-runnable-track {
      height: 8px;
      border-radius: 20px;
    }

    input[type=range]::-moz-range-track {
      height: 8px;
      border-radius: 20px;
      background-color: transparent;
    }

    input[type=range]:focus {
      outline: none;
    }

    input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
      margin-top: -3px;
      height: 14px;
      width: 14px;
      background: #eb7470;
      border-radius: 50%;
      border: solid 3px #fff;
      box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5);
    }

    input[type=range]::-moz-range-thumb {
      -webkit-appearance: none;
      margin-top: -3px;
      height: 10px;
      width: 10px;
      background: #eb7470;
      border-radius: 50%;
      border: solid 3px #fff;
      box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5);
    }

    .menu-show {
      border: none;
      background-color: transparent;
      font-size: 20px;
      color: #fff;
    }

    .song-list-box {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 40%;
      height: 70%;
      background-color: #000;
      overflow: hidden;
      /*opacity: .8;*/
    }

    .song-list {
      padding-right: 15px;
      height: 90%;
      width: 100%;
      overflow-y: scroll;
      border: 1px solid #fff;
    }

    .song-list::-webkit-scrollbar {
      display: none;
    }

    .song-list-item {
      display: block;
      line-height: 35px;
      border-bottom: solid 1px #999;
      color: #fff;
      width: 100%;
    }

    .c-red {
      color: #ff6e87 !important;
    }

    .song-list-item > span {
      display: inline-flex;
      display: -webkit-inline-flex;
      display: -ms-inline-box;
      display: -moz-inline-box;
      align-items: center;
      padding-left: 10px;
      max-width: 50%;
      font-size: 18px;
    }

    .song-list-item > label {
      font-size: 12px;
      max-width: 30%;
    }

    .song-list-item > button {
      float: right;
      width: 35px;
      height: 35px;
      line-height: 35px;
      font-size: 20px;
      border: none;
      color: #DCDCDC;
      background-color: transparent;
    }

    .song-list-hidden {
      position: absolute;
      left: 0;
      bottom: 10px;
      width: 100%;
      border: none;
      background-color: transparent;
      color: #fff;
      font-size: 20px;
    }

    .songList-leave-active, .songList-enter-active {
      transition: all .5s ease;
    }

    .songList-enter, .songList-leave-to {
      transform: translateY(50%);
      opacity: 0;
    }

    /*tip style*/
    .com-tip {
      position: fixed;
      top: 50%;
      left: 50%;
      padding: 0 30px;
      margin-top: 0;
      transform: translate(-50%, -50%);
      background: rgba(55, 55, 55, .3);
      border-radius: 5px;
      color: #fff;
      font-size: 15px;
      line-height: 25px;
      z-index: 99;
    }

    .tip-enter-active {
      transition: all .3s ease;
    }

    .tip-leave-active {
      transition: all .8s ease;
    }

    .tip-enter, .tip-leave-to {
      margin-top: 30px;
      opacity: 0;
    }

    /*search-box style*/
    .search-main {
      position: fixed;
      top: 0;
      width: 50%;
      height: 100%;
      background-color: #000;
      opacity: .8;
      overflow: hidden;
    }

    .search-input {
      margin: 20px;
      padding-left: 10px;
      width: 70%;
      height: 30px;
      line-height: 30px;
      font-size: 18px;
      border: 1px solid #000;
      border-radius: 25px;
      outline: none;
    }

    .search-btn {
      margin: 20px 0;
      border: 1px solid #999;
      background-color: pink;
      line-height: 30px;
      font-size: 18px;
      color: #000;
      border-radius: 5px;
    }

    .result-list {
      margin: 10px auto;
      width: 90%;
      height: 550px;
      overflow-y: scroll;
      list-style: none;
      padding-right: 25px;
    }

    .result-list::-webkit-scrollbar {
      display: none;
    }

    .item {
      height: 35px;
      border-bottom: 1px solid #999;
      color: #fff;
    }

    .overflow-h {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .song-name {
      display: inline-block;
      width: 30%;
      word-spacing: inherit;
    }

    .singer {
      display: inline-block;
      width: 20%;
      word-spacing: inherit;
    }

    .album {
      display: inline-block;
      width: 20%;
      word-spacing: inherit;
    }

    .add-song, .play-song {
      padding: 0 10px;
      border: 1px solid #000;
      background-color: yellow;
      border-radius: 5px;
      line-height: 30px;
    }

    .search-close {
      position: absolute;
      bottom: 0;
      right: 10px;
      font-size: 25px;
      color: #fff;
      background-color: transparent;
      border: none;
    }

    .search-enter-active, .search-leave-active {
      transition: all .5s ease;
    }

    .search-enter, .search-leave-to {
      transform: translateX(-70%);
      opacity: 0;
    }
  </style>
</head>
<body>
<div id="app" class="main">
  <div class="bg-blur"  :style="`background-image:url(${currentSong.album_logo})`"></div>
  <button class="open-search" @click="openSearch" v-if="!showSearch">→</button>
  <div class="disc">
    <div class="song-img" :style="`background-image:url(${currentSong.album_logo})`" ref="rotate"></div>
    <!--<img :src="currentSong.album_logo" alt="" ref="songImg" style="visibility: hidden">-->
  </div>
  <div class="ctrl-box">
    <div class="last" @click="last"></div>
    <div :class="[isPlaying ? 'pause':'play']" @click="play"></div>
    <div class="next" @click="next"></div>
    <div class="voice-icon">
      <div @click="voiceCtrl">
        <div class="voice-icon-oh"></div>
        <div class="voice-icon-ov" v-if="voice!=0"></div>
        <div class="voice-icon-cv" v-if="voice==0"></div>
        <div class="demoSpan2"></div>
      </div>
      <input class="voice" ref="voiceRange" type="range" v-model="voice" :max="100" min="0">
    </div>
  </div>
  <div class="right-part">
    <p class="title">{{currentSong.song_name}}</p>
    <p class="artist">{{currentSong.artist_name}}</p>
    <div class="lyrics" ref="lyrics">
      <p v-for="(item,index) in currentLyrics" :class="{'pink': showPink(item,index)}">{{item.text}}</p>
    </div>
  </div>
  <div class="progress-bar">
    <span class="timer">{{percent | date}}</span>
    <input type="range" ref="range" v-model="percent" :max="songDuration" min="0" @click="rangeChange"/>
    <span class="timer">{{songDuration | date}}</span>
    <button class="menu-show" @click="menuCtrl">三</button>
  </div>
  <audio ref="audio" :src="currentSong.listen_file" @play="ready" @error="error" @timeupdate="updateTime"
         @ended="ended"></audio>
  <transition name="songList">
    <div class="song-list-box" v-if="showMenu">
      <div class="song-list">
        <a class="song-list-item" v-for="(item,index) in songList" :class="{'c-red': songIndex === index}"
           @click="playExistSong(index)">
          <span class="overflow-h">{{item.song_name}}</span>
          <label class="overflow-h">-{{item.artist_name}}</label>
          <button @click.stop="deleteSong(index)">x</button>
        </a>
      </div>
      <button class="song-list-hidden" @click="menuCtrl">↓</button>
    </div>
  </transition>
  <transition name="tip">
    <com-tip class="com-tip" :is-show.async="showTip" :text="tipText"></com-tip>
  </transition>
  <search-box :is-show="showSearch" :open-fun="openSearch" @push-song="pushNewSong"
              @play-song="playSong"></search-box>
</div>
<template id="search-box">
  <transition name="search">
    <div v-if="isShow" class="search-main">
      <input type="text" class="search-input" v-model="searchValue" placeholder="请输入歌曲/歌手"
             @keyup.enter="search(searchValue)">
      <button class="search-btn" @click="search(searchValue)">查询</button>
      <ul class="result-list">
        <li class="item" v-for="item in resultList">
          <span class="overflow-h song-name">{{item.song_name}}</span>
          <span class="overflow-h singer">{{item.artist_name}}</span>
          <span class="overflow-h album">{{item.album_name}}</span>
          <button class="add-song" title="点击添加到播放列表" @click="pushInList(item)">+</button>
          <button class="play-song" title="点击播放" @click="playNow(item)">播放</button>
        </li>
      </ul>
      <button class="search-close" @click="close">←</button>
    </div>
  </transition>
</template>
</body>
<!--<script src="https://cdn.bootcss.com/color-thief/2.0.1/color-thief.min.js"></script>-->
<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script>
  //    const colorThief = new ColorThief();
  function http(url) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    let destroy = function() {
      console.log('script is onload');
      document.head.removeChild(script);
    }
//        script.addEventListener("load", destroy, false);
    document.head.appendChild(script);
  }
  var callBack = function(result) {
    console.log(result);
    EventBus.$emit('callBack', result);
  };
  var EventBus = new Vue();
  var tip = {
    props: ['isShow', 'text'],
    template: '<div v-if="isShow">{{text}}</div>'
  };
  var searchBox = {
    template: '#search-box',
    props: {
      isShow: Boolean,
      openFun: Function
    },
    data(){
      return {
        resultList: [],
        searchValue: '',
      }
    },
    methods: {
      close() {
        this.openFun();
      },
      search(value){
//                let url = `https://api.xiami.com/web?v=2.0&app_key=1&key=${value}&page=1&limit=50&callback=callBack&r=search/songs`;
//                this.http(url);
        $.ajax({
          url: `http://localhost:3000/song?v=2.0&app_key=1&key=${value}&page=1&limit=50&callback=callBack&r=search/songs`,
          dataType: 'jsonp',
          data: '',
          jsonp: 'callback1',
          success: function(data) {
            if (res && res.data) {
              self.resultList = res.data.songs;
            }
          }
        })
      },
      http(url) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        let destroy = function() {
          console.log('script is onload');
          document.head.removeChild(script);
        }
        //script.addEventListener("load", destroy, false);
        document.head.appendChild(script);
      },
      pushInList(item){
        console.log('init push')
        this.$emit('push-song', item);
      },
      playNow(item){
        this.$emit('play-song', item);
      }
    },
    mounted(){
      let self = this;
      EventBus.$on('callBack', function(res) {
        if (res && res.data) {
          self.resultList = res.data.songs;
        }
      })
    }
  };
  new Vue({
    el: '#app',
    components: {
      'com-tip': tip,
      'search-box': searchBox
    },
    data() {
      return {
        isPlaying: false,
        currentSong: {},
        songIndex: 0,
        percent: 0,
        songDuration: 0,
        voice: 100,
        keyDowm: false,
        currentRowIndex: 0,
        showTip: false,
        showSearch: false,
        showMenu: false,
        currentLyrics: [{time: 0, text: '此歌曲暂无歌词~'}],
        tipText: 'o(>﹏<)o~无法获取歌曲信息',
        bgImg: 'http://img.xiami.net/images/album/img8/451408/563461507451408.jpg',
        songList: [{
          song_name: 'aLIEz',
          artist_name: '澤野弘之',
          album_logo: 'http://pic.xiami.net/images/album/img31/59831/7064167921410329023_1.jpg',
          listen_file: 'http://m128.xiami.net/831/59831/706416792/1773377276_15743273_l.mp3?auth_key=1516762800-0-0-ae075e2e74e8a6b47193922d65d9d60e',
          lyric: null
        }, {
          song_name: 'creep',
          artist_name: 'Radiohead',
          album_logo: 'http://img.xiami.net/images/album/img54/10454/1694751418202640.jpg',
          listen_file: 'http://m128.xiami.net/454/10454/56346/1079377_52077_l.mp3?auth_key=1516762800-0-0-87f30ce981385e09630d705e7be76a6c',
          lyric: null
        }, {
          song_name: 'All I Need',
          artist_name: 'Within Temptation',
          album_logo: 'http://img.xiami.net/images/album/img92/24292/3538581257326025.jpg',
          listen_file: 'http://m128.xiami.net/292/24292/353858/1769199707_2920725_l.mp3?auth_key=1516762800-0-0-024fb8daab0498328e706623b9f64d1f',
          lyric: null
        }, {
          song_name: 'Smoke on the Water',
          artist_name: 'Deep Purple',
          album_logo: 'http://img.xiami.net/images/album/img41/10141/517381371635791.jpg',
          listen_file: 'http://m128.xiami.net/1/141/10141/51738/1019071_296703_l.mp3?auth_key=1516762800-0-0-67e54b66643afe07bf82af588f8c570f',
          lyric: null
        }],
      }
    },
    methods: {
      ready(event) {
        this.songDuration = event.target.duration || '0';
      },
      showPink(item, index){
        let last = item.time, next = this.currentLyrics[index + 1] ? this.currentLyrics[index + 1].time : 999999;
        if (this.percent >= last && this.percent < next) {
          this.currentRowIndex = index;
          return true;
        }
      },
      openSearch(){
        this.showSearch = !this.showSearch;
      },
      menuCtrl(){
        this.showMenu = !this.showMenu;
      },
      playExistSong(index){
        this.songIndex = index;
        this.currentSong = this.songList[index];
        this.isPlaying = false;
        this.percent = 0;
        this.$nextTick(() => {
          this.play();
        })
      },
      deleteSong(index){
        this.songList.splice(index, 1);
      },
      alreadyExist(item){
        for (let i in this.songList) {
          if (this.songList[i].song_id === item.song_id) {
            return i;
          }
        }
        return false;
      },
      playSong(item){
        let temp = this.alreadyExist(item);
        if (temp === false) {
          this.songList.splice(this.songIndex + 1, 0, item);
          console.log(this.songList);
          this.next();
        } else {
          this.playExistSong(temp);
        }
      },
      pushNewSong(item){
        let temp = this.alreadyExist(item);
        if (temp === false) {
          this.songList.push(item);
        } else {
          this.openTip('此歌曲已存在~');
        }
      },
      error() {
        this.openTip();
        this.$refs.rotate.style.animationPlayState = 'paused';
      },
      openTip(value){
        this.tipText = value || 'o(>﹏<)o~无法获取歌曲信息';
        this.showTip = true;
        setTimeout(() => {
          this.showTip = false;
        }, 2000);
      },
      updateTime(event) {
        this.songDuration = event.target.duration;
        this.percent = event.target.currentTime;
      },
      ended() {
        this.isPlaying = false;
        this.songIndex++;
        if (this.songList.length === this.songIndex) this.songIndex = 0;
        this.currentSong = this.songList[this.songIndex];
        this.$nextTick(() => {
          this.play();
        })
      },
      play() {
        const audio = this.$refs.audio;
        if (this.isPlaying) {
          this.$refs.rotate.style.animationPlayState = 'paused';
          audio.pause();
          this.isPlaying = false;
        } else {
          audio.play();
          this.$refs.rotate.style.animationPlayState = 'running';
          this.isPlaying = true;
        }
      },
      next() {
        if (this.songIndex === this.songList.length - 1) this.songIndex = -1;
        this.songIndex++;
        this.currentSong = this.songList[this.songIndex];
        this.isPlaying = false;
        this.percent = 0;
        this.$nextTick(() => {
          this.play();
        })
      },
      last() {
        if (this.songIndex === 0) this.songIndex = this.songList.length;
        this.songIndex--;
        this.percent = 0;
        this.currentSong = this.songList[this.songIndex];
        this.isPlaying = false;
        this.$nextTick(() => {
          this.play();
        })
      },
      rangeChange() {
        this.$refs.audio.currentTime = this.percent;
      },
      voiceCtrl(){
        this.voice == 0 ? this.voice = 100 : this.voice = 0;
      },
      getLyric(url){
        let self = this;
        if (!url) {
          self.currentLyrics = [{time: 0, text: '此歌曲暂无歌词~'}];
          return;
        }
        ;
        $.ajax({
          type: 'GET',
          dataType: 'text',
          url: `http://localhost:3000/lyric?url=${url}`,
          success: function(data) {
            console.log(data);
            self.refactoringLyrics(data);
          },
          error: function() {
            self.currentLyrics = [{time: 0, text: '此歌曲暂无歌词~'}];
          }
        })
      },
      refactoringLyrics(lyric){
        let text = lyric.split('[offset:0]')[1];
        let textArr = text.split('\n');
        let lyricsArr = [], translate = [];
        textArr.forEach((item, index) => {
          let time = 0, text = '';
          if (item.indexOf('[x-trans]') > -1) {
            translate.push(item.split('[x-trans]')[1])
          } else if (item.trim() != '') {
            time = item.slice(1, 6).split(':');
            time = parseInt(time[0]) * 60 + parseInt(time[1]);
            text = item.slice(11);
            let arr = text.split('>');
            let str = arr.reduce((a, b) => {
              return a.split('<')[0] + b.split('<')[0]
            });
            let obj = {
              time: time,
              text: str
            };
            lyricsArr.push(obj);
          }
        });
        for (let i in translate) {
          lyricsArr[i].text = lyricsArr[i].text + '\n' + translate[i];
        }
        this.currentLyrics = lyricsArr;
      },
      changeColor(){
        let self = this;
        let colorArr = [];
        this.$refs.songImg.onload = function() {
          // todo 根据背景图片改变按钮颜色
          colorArr = colorThief.getPalette(self.$refs.songImg) || [];
          self.countColor(colorArr);
        }
      },
      countColor(colorArr){
        let tampColorArr = [];
        colorArr.forEach((item) => {
          for (let i in item) {
            tampColorArr.push(255 - item[i])
          }
        });
        let finalColor = parseInt(tampColorArr.reduce((a, b) => {
          return a + b
        }) / colorArr.length / 3);

        let play = document.getElementsByClassName('play')[0];
        if (parseInt(255 / finalColor) > 2) {
          //change color style
          // play.setAttribute('class', 'play black-play');
          //next.setAttribute('class','next black-next' )
        }
      },
    },
    created() {
      let tempArr = JSON.parse(localStorage.getItem('songList'));
      console.log(tempArr);
      if (tempArr && tempArr.length > 0) {
        this.songList = tempArr;
      }
      this.currentSong = this.songList[this.songIndex];
      this.currentLyrics = this.getLyric(this.currentSong.lyric);
    },
    mounted() {
//            this.changeColor();
      this.$refs.voiceRange.style.background = `linear-gradient(to right, #eb7470, #eb7470 ${this.voice}%, white ${this.voice}%, white)`;
      this.$refs.range.style.background = `linear-gradient(to right, #eb7470, #eb7470 ${(this.percent / this.songDuration) * 100}%, white ${(this.percent / this.songDuration) * 100}%, white)`;
      this.$nextTick(() => {
//                this.play();
      })
    },
    filters: {
      date(value) {
        if (!value)return '00:00';
        let min, sed;
        parseInt(value / 60) > 9 ? min = parseInt(value / 60) : min = '0' + parseInt(value / 60);
        (value % 60).toFixed(0) > 9 ? sed = (value % 60).toFixed(0) : sed = '0' + (value % 60).toFixed(0);
        return `${min}:${sed}`;
      }
    },
    watch: {
      percent() {
        this.$refs.range.style.background = `linear-gradient(to right, #eb7470, #eb7470 ${(this.percent / this.songDuration) * 100}%, white ${(this.percent / this.songDuration) * 100}%, white)`;
      },
      currentRowIndex() {
        console.log(this.$refs.lyrics.scrollHeight);
        this.$refs.lyrics.scrollTop = this.currentRowIndex * (this.$refs.lyrics.scrollHeight / this.currentLyrics.length);
      },
      voice() {
        this.$refs.audio.volume = this.voice / 100;
        this.$refs.voiceRange.style.background = `linear-gradient(to right, #eb7470, #eb7470 ${this.voice}%, white ${this.voice}%, white)`;
      },
      currentSong: {
        handler() {
          this.percent = 0;
          console.log(this.currentSong);
          this.getLyric(this.currentSong.lyric);
          document.title = `${this.currentSong.song_name}-${this.currentSong.artist_name}`;
        },
        deep: true
      },
      songList: {
        handler() {
          localStorage.setItem('songList', JSON.stringify(this.songList));
        },
        deep: true
      }
    }
  });
</script>
</html>
