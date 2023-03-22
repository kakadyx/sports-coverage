<template>
  <div class="form-block">
    <h3 class="title">
      Рассчитать стоимость покрытия корта
    </h3>
    <div class="form">
      <input placeholder="Имя" type="text">
      <input placeholder="Телефон" type="text">
      <input placeholder="Площадь покрытия" type="text">
      <button class="green-button">
        Отправить
      </button>
    </div>
    <div class="decoration">
      <ArrowBottom class="arrow" />
      <BlockIndicator :active-index="3" />
      <hr>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ArrowBottom from 'images/arrow-bottom.svg'
import BlockIndicator from '~/components/common/BlockIndicator.vue'
export default defineComponent({
  components: { ArrowBottom, BlockIndicator },
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/mixins/fonts.scss';

.form-block {
  position: relative;
  background: linear-gradient(rgba(43, 43, 43, 0.63), rgba(43, 43, 43, 0.63)), url('@/assets/images/form-bg.png');
  background-size: 100%;
  padding-block: 135px 190px;
  padding-inline: calc(var(--side-offset-main) + var(--side-offset-secondary));
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  @include RussoOne;
  font-size: 38px;
  line-height: 46px;
  text-align: center;
  color: white;
  margin-bottom: 50px;
}
.form {
  display: flex;
  gap: 15px;

  & > * {
    width: 232px;
    border-radius: 10px;
    outline: none;
    border: none;
    height: 57px;
  }
  input {
    @include Roboto;
    font-size: 16px;
    line-height: 19px;
    padding: 20px 27px;
  }
  button {
    @include Roboto;
    font-size: 19px;
    line-height: 22px;
    background: #6b9f32;
    color: white;
    cursor: pointer;
    transition: 0.3s background-color;
    &:hover {
      transition: 0.3s background-color;
      background: #577239;
    }
  }
}
.decoration {
  position: absolute;
  top: 0;
  bottom: 0;
  right: var(--side-offset-main);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  --svg-color: white;
  align-items: center;
  hr {
    height: 152px;
    width: 1px;
    background: white;
    margin: 0;
    border: none;
  }
}
</style>
