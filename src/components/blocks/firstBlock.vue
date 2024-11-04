<template>
  <div class="wsection mt-20 ">
    <div style="border-bottom: 1px solid #F2F2F2" class="d-flex gap-8 pb-5 justify-content-center one">
      <div class="d-flex flex-column gap-4 textblock">
        <h2> <span style="text-decoration: underline #ffa630">Пара слов </span>о нас,
          производстве
          и брендинге
        </h2>
        <p>
          В своём стремлении улучшить пользовательский опыт мы упускаем, что ключевые особенности структуры проекта.
        </p>
        <p>
          В своём стремлении улучшить пользовательский опыт мы упускаем, что ключевые особенности структуры проекта опыт мы упускаем, что ключевые особенности структуры проекта.
        </p>
        <modal-button
        :text="'О компании'"
        />
      </div>
      <div class="pictures">
        <img src="/клавиатура.png" alt="">
        <img src="/Кружка%201.png" alt="">
      </div>
    </div>
    <div class="options">
      <ul>
        <li>
          <div class="options-item">
            <span><img src="/cloud.svg" alt=""></span>
            <h3>Онлайн конструктор</h3>
            <p>С конструктором создавайте свои уникальные дизайны</p>
          </div>
        </li>
        <li>
          <div class="options-item">
            <span><img src="/cloack.svg" alt=""></span>
            <h3>Принт за 24 часа</h3>
            <p>Некоторые заказы можем произвести быстрее суток</p>
          </div>
        </li>
        <li>
          <div class="options-item">
            <span><img src="/razor.svg" alt=""></span>
            <h3>Быстрая доставка</h3>
            <p>Сотрудничаем с быстрыми и надежными службами</p>
          </div>
        </li>
        <li>
          <div class="options-item">
            <span><img src="/trash.svg" alt=""></span>
            <h3>Только ОПТ</h3>
            <p>Работаем на большие объемы брендинга</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ModalButton from "../modalButton.vue";

export default {
  components: {ModalButton}

}
</script>

<style lang="scss" scoped>
.pictures{
  width: 1613px;
  height: 480px;
  background: #ffa630;
  border-radius: 28px;
  overflow: hidden;
  img:nth-child(1){
    width: 513px;
    height: 165px;
    transform: rotate(-25deg);
    margin-top: 70px;
    margin-left: 30px;
  }
  img:nth-child(2){
    margin-left: 220px;
    transform: rotate(25deg);
    margin-top: 50px;
  }
}
h2{
  font-weight: 600;
  font-size: 36px;
}
.options{
  margin-top: 100px;

  ul{
    display: flex;
    justify-content: center;
    gap: 50px;
    li{
      width: 100%;
      .options-item{
        position: relative;
        height: 150px;
        img{
          height: 50px;
          margin-bottom: 10px;
        }
        h3{
          font-size: 14px;
          font-weight: 600;
        }
        p{
          position: absolute;
          bottom: 0;
          font-size: 14px;
          color: #b3b3b3;
        }
      }
    }
  }
}
@media (max-width: 1065px){

  .pictures{
    width: 322px;
    height: 480px;
    background: #ffa630;
    border-radius: 28px;
    overflow: hidden;
    img:nth-child(1){
      margin-top: 70px;
      margin-left: -60px;
    }
    img:nth-child(2){
      margin-left: 220px;
      transform: rotate(25deg);
      margin-top: 50px;
    }
  }
  .textblock{
    max-width: 350px;
  }
  .gap-8{
    gap: 3em;
  }
  .options{

      p{
        font-size: 12px !important;
        top: 100px !important;
      }

          } }
@media (max-width: 500px) {
  h2{
    font-size: 20px;
  }
  p{
    font-size: 12px;
  }
  .gap-4{
    gap: 0.5em !important;
  }
  .one{
    flex-direction: column-reverse;
  }
  .pictures{
    width: 330px;
    height: 330px;
    img:nth-child(1){
      width: 337px;
      height: 108px;
      margin-top: 55px;
      margin-left: 28px;
    }
    img:nth-child(2){
      width: 106px;
      height: 87px;
      margin-left: 150px;
    }
  }
  .wsection{
    margin: 0 10px;
  }
  .options{
    margin-top: 70px;
    ul{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>