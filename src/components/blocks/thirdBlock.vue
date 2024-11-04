<template>
  <div class="wsection third-block position-relative">
    <h1>Популярные и новые <span style="text-decoration: underline #ffa630">товары</span></h1>
    <swiper
        :slides-per-view="slidesPerView"
        :space-between="0"
        :navigation="false"
        :breakpoints="{
        320: { slidesPerView: 2 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 }
      }"
        class="products"
    >
      <swiper-slide v-for="(product, index) in products" :key="index">
        <product-card
            :title="product.title"
            :discount="product.discount"
            :image="product.image"
        />
      </swiper-slide>
    </swiper>
    <span class="arrow">
      <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.732983 0.231232C1.04363 -0.0770772 1.54728 -0.0770772 1.85793 0.231232L6.10035 4.44176C6.41099 4.75007 6.41099 5.24993 6.10035 5.55824L1.85793 9.76877C1.54728 10.0771 1.04363 10.0771 0.732983 9.76877C0.422339 9.46046 0.422339 8.96059 0.732983 8.65228L4.41294 5L0.732983 1.34772C0.422339 1.03941 0.422339 0.53954 0.732983 0.231232Z" fill="#487B6C"/>
    </svg> </span>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import ProductCard from "../productCard.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    ProductCard,
  },
  data() {
    return {
      products: [
        { image: "/public/стакан.png", title: 'Кружка под сублимацию "Стандарт"', discount: "от 75₽" },
        { image: "/public/Ручка%204.png", title: "Эко-ручка", discount: "от 5₽" },
        { image: "/public/чехол.png", title: "Чехол-крышка для телефона iPhone 8+", discount: "от 85₽" },
        { image: "/public/флешка.png", title: 'Флеш-карта "Элегант"', discount: "от 175₽" },
        { image: "/public/стакан.png", title: 'Кружка под сублимацию "Стандарт"', discount: "от 75₽" },
        { image: "/public/Ручка%204.png", title: "Эко-ручка", discount: "от 5₽" },
      ],
      slidesPerView: 4, // количество карточек по умолчанию на большом экране
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper{
  padding-bottom: 100px;
}
.third-block{
  margin-top: 150px;
  border-bottom: 2px solid #f2f2f2;
  .products{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 70px;
  }
  h1{
    font-size: 36px;
    font-weight: 600;
    line-height: 44px;
    text-align: start;
    max-width: 480px;
  }
  .arrow{
    padding: 10px 17px;
    box-shadow: 0px 4px 7px 0px #00000026;
    color: #487B6C;
    position: absolute;
    right: -5%;
    top: 50%;
    border-radius: 10px;
    cursor: pointer;
  }
}
@media (max-width: 800px) {
  .third-block{
    margin: 0 35px;
  }
  .arrow{
    display: none;
  }
}
@media (max-width: 350px) {
  .third-block{
    margin: 0 10px;
    .products{
      margin-top: 50px;
    }
  }
  h1{
    font-size: 20px !important;
  }
  .swiper-slide{
    width: 150px !important;
  }
}
</style>