<template>
  <div  class="fourth-block wsection">
    <div class="first">
      <div class="title-block">
        <h3>Популярные услуги</h3>
        <span>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.22475 1.10861C6.98067 0.864536 6.98067 0.468808 7.22475 0.22473C7.46882 -0.0193477 7.86455 -0.0193477 8.10863 0.22473L11.442 3.55806C11.686 3.80214 11.686 4.19787 11.442 4.44195L8.10863 7.77528C7.86455 8.01936 7.46882 8.01936 7.22475 7.77528C6.98067 7.5312 6.98067 7.13547 7.22475 6.8914L9.49114 4.625H1.41669C1.07151 4.625 0.791687 4.34518 0.791687 4.00001C0.791687 3.65483 1.07151 3.37501 1.41669 3.37501H9.49114L7.22475 1.10861Z" fill="#487B6C"/>
          </svg>
        </span>
      </div>
      <div class="services">
      <div v-for="card in cards" class="">
        <services-card
            :title="card.title"
            :text="card.text"
            :image="card.image"/>
      </div>
      </div>
    </div>
    <div class="second">
      <div class="title-block">
        <h3>Основные категории</h3>
        <span>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.22475 1.10861C6.98067 0.864536 6.98067 0.468808 7.22475 0.22473C7.46882 -0.0193477 7.86455 -0.0193477 8.10863 0.22473L11.442 3.55806C11.686 3.80214 11.686 4.19787 11.442 4.44195L8.10863 7.77528C7.86455 8.01936 7.46882 8.01936 7.22475 7.77528C6.98067 7.5312 6.98067 7.13547 7.22475 6.8914L9.49114 4.625H1.41669C1.07151 4.625 0.791687 4.34518 0.791687 4.00001C0.791687 3.65483 1.07151 3.37501 1.41669 3.37501H9.49114L7.22475 1.10861Z" fill="#487B6C"/>
          </svg>
        </span>
      </div>
      <div class="categories">
        <div class="card">
          <span class="img"><img src="/public/c1.svg">
          </span>
          <span class="title">Кружки</span>
        </div>
        <div class="card">
          <span class="img"><img src="/public/c2.svg">
        </span>
          <span class="title">HDD</span>
        </div>
        <div class="card">
          <span class="img"><img src="/public/c3.svg">
          </span>
          <span class="title">Термосы</span>
        </div>
        <div class="card">
          <span class="img"><img src="/public/c4.svg">
        </span>
          <span class="title">SSD</span>
        </div>
        <div class="card">
          <span class="img"><img src="/public/c5.svg">
          </span>
          <span class="title">Аксессуары</span>
        </div>
        <div class="card">
          <span class="img"><img src="/public/c6.svg">
          </span>
          <span class="title">Текстиль</span>
        </div>
        <div class="card">
          <span class="img"><img src="/public/c7.svg">
          </span>
          <span class="title">Канцелярия</span>
        </div>
        <div class="card">
          <span class="img"><img src="/public/c8.svg">
          </span>
          <span class="title">Упаковка</span>
        </div>
        <div class="card">
          <span class="img"><img src="/public/c9.svg">
          </span>
          <span class="title">Флеш-карты</span>
        </div>
        <div class="card">
          <span class="img"><img src="/public/c10.svg">
          </span>
          <span class="title">Xiaomi</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServicesCard from "./servicesCard.vue";

export default {
  components: {ServicesCard},
data(){
  return{
    cards:[
      {image: '/services1.svg', title: 'Гравировка', text: 'Нанесем на изделия логотип, рисунок или надпись'},
      {image: '/services2.svg', title: 'Шелкография', text: 'Изображения высоко качества на любых материалах'},
      {image: '/services3.svg', title: 'Тиснение', text: 'Нанесения рельефного рисунка'},
      {image: '/services4.svg', title: 'Тампопечать', text: 'Перенос изображения с помощью силиконового валика'},
    ]
  }
}
}
</script>

<style lang="scss" scoped>
.fourth-block{
  margin-top: 100px;
  .first{
    display: flex;
    flex-direction: column;
    justify-content: center;
    .services{
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 60px;
    }
  }
}
.second{
  margin-top: 150px;

}
.title-block{
  text-align: start;
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 70px;

  h3{
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
  }
  span{
    padding: 6px 12px;
    box-shadow: 0px 4px 7px 0px #00000026;
    border-radius: 10px;
  }
}
@media (min-width: 801px) {
  .categories {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    justify-self: center;

    .card {
      border: none;
      &:nth-child(2n + 1) {
        grid-column: span 1;
      }
      &:nth-child(2n) {
        grid-column: span 1;
        margin-top: 50px;
        transform: translateY(calc(100% + 20px));
      }

      .img {
        width: 96px;
        height: 96px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f2f2f2;
        border-radius: 21px;
      }

      .title {
        text-align: center;
        font-weight: 600;
        font-size: 14px;
      }
    }
  }
}
@media (max-width: 800px){
  .first{
    margin: 0 35px;
  }
  .categories{
    display: grid;
    grid-template-columns: repeat(5, 1fr) !important;
    justify-self: center;
    gap: 55px;
    .card{
      border: none;
      .img {
        width: 96px;
        height: 96px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f2f2f2;
        border-radius: 21px;
      }

      .title {
        text-align: center;
        font-weight: 600;
        font-size: 14px;
      }
    }
  }
}
@media (max-width: 350px) {
  .title-block{
    gap: 0;
    justify-content: space-between;
    h3{
      font-size: 18px;
    }
  }
  .first{
    margin: 0;
    .services{
      grid-template-columns: repeat(2,1fr) !important;
      gap: 20px !important;
      row-gap: 60px !important;
    }
  }
  .card-services{
    height: 200px;
  }
  .categories{
    overflow: hidden;
    grid-template-columns: repeat(3, 1fr) !important;
    gap: 10px;
    .card:nth-child(n + 4):nth-child(-n + 10){
    display: none;
    }
  }
}
</style>
