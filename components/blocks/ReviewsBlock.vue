<template>
  <div class="reviews-block">
    <h3 class="title">
      Отзывы
    </h3>
    <div class="slider-wrap">
      <div class="arrow-wrap" @click="swiper.slidePrev()">
        <ArrowPrev />
      </div>
      <swiper
        :slides-per-view="1"
        @swiper="onSwiper"
      >
        <swiper-slide v-for="(slide, i) in items" :key="i">
          <div class="slide">
            <p>{{ slide.text }}</p>
            <p>{{ slide.author }}</p>
          </div>
        </swiper-slide>
      </swiper>
      <div class="arrow-wrap" @click="swiper.slideNext()">
        <ArrowPrev class="arrow-next" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

import ArrowPrev from 'images/arrow-prev.svg'
export default defineComponent({
  components: { ArrowPrev, Swiper, SwiperSlide },
  setup () {
    const swiper = ref()
    const onSwiper = swip => {
      swiper.value = swip
    }

    return {
      onSwiper,
      swiper
    }
  },
  data () {
    return {
      items: [
        {
          author: 'Сергей, владелец базы отдыха',
          text: `Искали покрытие, которое спокойно переживает зиму и не требует каждый год ремонта.
          Не травматичное, поскольку играть на нем будут как профессионалы, так и новички,
          приятное на вид - нам хотелось подобрать необычный цвет.
          В итоге долго искали покрытие, соответсвующее всем запросам и остановились на Mapei
          в исполненнии команды “Спортплощадка” и не пожалели - все наши ожидания оправданы и даже больше!`
        },
        {
          author: 'Даниил Олегович, тренер школы тенниса',
          text: `Покрытие амортизирует удары и снижает нагрузки на мышцы во время игры –
                для меня, как для тренера, это главное. Я не боюсь, что наши воспитанники
                получат травмы во время занятий. Есть возможность выбрать правильный
                темп игры: от быстрого - для профессионального уровня, до медленного - для начинающих,
                этот критерий и стал решающим. Выражаем благодарность
                за оперативность и профессионализм всей вашей команде.
                `
        },
        {
          author: 'Михаил, руководитель теннисного клуба',
          text: `Спустя год эксплуатации корта могу смело заявить,
          что новое покрытие явно не оставило равнодушным ни одного из наших членов клуба.
          Все отмечают удобство игры, комфорт, а самое главное после насыщенной тренировки наши гости
          ни разу не жаловались на боли в спине или коленях. Думаем сейчас и другой наш корт заменить на эту систему.`
        }
      ]
    }
  }
}
)
</script>

<style lang="scss" scoped>
@import '@/assets/mixins/fonts.scss';
.reviews-block {
  padding-block: 180px 110px;
  background: linear-gradient(rgba(31, 29, 29, 0.61), rgba(31, 29, 29, 0.61)), url('@/assets/images/courts.png');
  background-size: 100%;
  color: white;
  .title {
    @include RussoOne;
    font-size: 45px;
    line-height: 54px;
    margin-bottom: 130px;
    text-align: center;
  }
  .slider-wrap {
    display: flex;
    align-items: center;
    padding-inline: calc(var(--side-offset-secondary) + var(--side-offset-main));
    .slide {
      margin-inline: 43px;
      min-height: 240px;
      border: 1px solid white;
      border-radius: 27px;
      background: rgba(0, 0, 0, 0.14);
      padding: 40px 36px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      @include Roboto;
      font-size: 18px;
      line-height: 21px;
      font-weight: 400;
      text-align: center;
    }
  }
}

.arrow-wrap {
  flex-shrink: 0;
  width: 61px;
  height: 61px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid white;
  .arrow-next {
    transform: rotate(180deg);
  }
  cursor: pointer;
  transition: 0.3s background, 0.3s color;
  &:hover {
    transition: 0.3s background, 0.3s color;
    background: #cbcbcb;
    border-color: #cbcbcb;
    --svg-color: #4c292c;
  }
}
</style>
