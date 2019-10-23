<template>
  <div id="app" :class="{'no-arrow': noArrow}">
    <audio loop autoplay preload>
      <source src="./assets/bgs-GOT.mp3" type="audio/mp3">
    </audio>
    <div class="control"
      ref="ctrl"
      :class="{off: !isPlaying}"
      @click="isPlaying ? stop() : play()"
      ></div>
    <swiper :options="swiperOption" ref="homeSwiper">
      <swiper-slide class="slide-01">
        <slide-01></slide-01>
      </swiper-slide>
      <swiper-slide class="slide-02">
        <slide-02></slide-02>
      </swiper-slide>
      <swiper-slide class="slide-03">
        <slide-03></slide-03>
      </swiper-slide>
      <swiper-slide class="slide-04">
        <slide-04></slide-04>
      </swiper-slide>
      <swiper-slide class="slide-05">
        <slide-05></slide-05>
      </swiper-slide>
      <swiper-slide class="slide-06">
        <slide-06></slide-06>
      </swiper-slide>
      <swiper-slide class="slide-07">
        <slide-07></slide-07>
      </swiper-slide>
      <swiper-slide class="slide-08">
        <slide-08></slide-08>
      </swiper-slide>
      <swiper-slide class="slide-09">
        <slide-09></slide-09>
      </swiper-slide>
      <swiper-slide class="slide-10">
        <slide-10></slide-10>
      </swiper-slide>
      <swiper-slide class="slide-11">
        <slide-11></slide-11>
      </swiper-slide>
      <swiper-slide class="slide-12">
        <slide-12></slide-12>
      </swiper-slide>
      <swiper-slide class="slide-13">
        <slide-13></slide-13>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Slide01 from './components/Slide01'
import Slide02 from './components/Slide02'
import Slide03 from './components/Slide03'
import Slide04 from './components/Slide04'
import Slide05 from './components/Slide05'
import Slide06 from './components/Slide06'
import Slide07 from './components/Slide07'
import Slide08 from './components/Slide08'
import Slide09 from './components/Slide09'
import Slide10 from './components/Slide10'
import Slide11 from './components/Slide11'
import Slide12 from './components/Slide12'
import Slide13 from './components/Slide13'
export default {
  components: {
    swiper, swiperSlide, Slide01, Slide02, Slide03, Slide04, Slide05, Slide06, Slide07, Slide08, Slide09, Slide10, Slide11, Slide12, Slide13
  },
  data () {
    const self = this
    return {
      isPlaying:false,
      noArrow: false,
      swiperOption: {
        initialSlide: 0,
        direction: 'vertical',
        on: {
          slideChange () {
            self.noArrow = this.isEnd
          }
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.homeSwiper.swiper
    }
  },
  methods: {
    play () {
      const audio = document.querySelector('audio')
      if (!this.isPlaying) {
        this.isPlaying = true
        return audio.play()
      }
    },
    stop () {
      const audio = document.querySelector('audio')
      if (this.isPlaying) {
        this.isPlaying = false
        audio.pause()
      }
    }
  },
  mounted () {
    this.play().catch(err => {
      this.isPlaying = false
    })
  }
}
</script>

<style lang="scss">
@import './scss/docs.scss'
</style>
