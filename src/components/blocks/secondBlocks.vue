<template>
  <div class="position-relative mt-5 overflow-x-hidden pb-6">
    <div class="first">
      <div class="header">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <img src="/public/cup.png" alt="">
    </div>
    <div class="second">
      <div class="header">
        <span></span>
        <span></span>
      </div>
      <ul>
        <li>
          <img src="/public/arrow.svg" alt="">
        </li>
        <li class="white-arrows">
          <img src="/public/white-arrow.svg" alt="">
        </li>
        <li>
          <img src="/public/галлерея.svg" alt="">
        </li>
        <li>
          <img src="/public/какая-то%20хуйня.svg" alt="">
        </li>
        <li>
          <img src="/public/хуйня2.svg" alt="">
        </li>
        <li>
          <img src="/public/хуйня3.svg" alt="">
        </li>
        <li>
          <img src="/public/хуйня4.svg" alt="">
        </li>
      </ul>
    </div>
    <div class="third">
      <div class="text-third d-flex flex-column gap-5">
        <h3>Разместите <span style="text-decoration: underline 5px #487B6C;">свое</span>
          изображение
          как хотите</h3>
        <div class="d-flex flex-column gap-1">
          <p>В своём стремлении улучшить пользовательский опыт мы упускаем, что ключевые особенности.</p>
          <div class="btn-third">
            <p>Открыть конструктор</p>
            <p>Доступно через компьютер</p>
            <svg class="" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3032 2.6105C13.4314 2.80458 13.41 3.06832 13.2392 3.23917L7.11091 9.36743C7.04809 9.43025 6.96967 9.47519 6.88372 9.49765L4.33143 10.1643C4.24819 10.1861 4.16238 10.1856 4.08176 10.1651C3.99605 10.1433 3.9162 10.0988 3.85152 10.0341C3.72601 9.90858 3.67645 9.72592 3.72131 9.55418L4.38798 7.00189C4.40762 6.92669 4.44448 6.85241 4.49547 6.79414L10.6464 0.646447C10.7003 0.592604 10.7652 0.552307 10.8357 0.527754C10.8881 0.50955 10.9435 0.5 11 0.5C11.1326 0.5 11.2598 0.552678 11.3535 0.646447L13.2392 2.53206C13.2636 2.55647 13.2849 2.58278 13.3032 2.6105ZM12.1785 2.88562L11 1.70711L5.32122 7.38588L4.90456 8.98106L6.49974 8.56439L12.1785 2.88562Z" fill="black"/>
              <path d="M12.0942 10.4402C12.2765 8.8818 12.3345 7.31252 12.2682 5.74719C12.265 5.67225 12.2932 5.59932 12.3463 5.54628L13.0018 4.89073C13.0824 4.81013 13.2201 4.86129 13.2277 4.97503C13.351 6.8348 13.3042 8.70302 13.0875 10.5564C12.9298 11.9047 11.8469 12.9614 10.5055 13.1113C8.19445 13.3696 5.80556 13.3696 3.49451 13.1113C2.15314 12.9614 1.07025 11.9047 0.912545 10.5564C0.636187 8.19351 0.636187 5.80649 0.912545 3.44362C1.07025 2.09527 2.15314 1.03859 3.49451 0.888675C5.24767 0.692732 7.04564 0.645432 8.82043 0.746774C8.93481 0.753305 8.98696 0.891717 8.90595 0.972729L8.24424 1.63443C8.19178 1.6869 8.11984 1.71507 8.04568 1.71257C6.5614 1.66251 5.06703 1.71915 3.60558 1.88249C2.71884 1.98159 2.00852 2.68134 1.90578 3.55979C1.63844 5.84547 1.63844 8.15452 1.90578 10.4402C2.00852 11.3187 2.71884 12.0184 3.60558 12.1175C5.84281 12.3675 8.15719 12.3675 10.3944 12.1175C11.2812 12.0184 11.9915 11.3187 12.0942 10.4402Z" fill="black"/>
            </svg>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.pb-6{
  padding-bottom: 300px;
}
.first{
  width: 450px;
  height: 300px;
  box-shadow: 0px 10px 40px 0px #00000026;
  border-radius: 17px;
  margin-top: 300px;
  background: white;
  position: absolute;
  left: 22%;
  top: -26%;
  .header{
    border-top-right-radius: 7px;
    border-top-left-radius: 7px;
    height: 24px;
    background: linear-gradient(180deg, #4D4D4D 0%, #262626 100%);
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 5px;
    span{
      width: 10px;
      height: 10px;
      border-radius: 50%;

    }
    span:nth-child(1){
      background: #FF2F54;
      margin-left: 15px;
    }
    span:nth-child(2){
      background: #FFA630;
    }
    span:nth-child(3){
      background: #10BB87;
    }
  }
  img{
    width: 200px;
    height: 200px;
    margin-left: 120px;
    margin-top: 40px;
  }
}
.second{
  width: 70px;
  box-shadow: 0px 10px 40px 0px #00000026;
  border-radius: 7px;
  position: absolute;
  z-index: 1;
  top: 40%;
  left: 25%;
  background: white;
  .header{
    border-top-right-radius: 7px;
    border-top-left-radius: 7px;
    height: 24px;
    background: linear-gradient(180deg, #4D4D4D 0%, #262626 100%);
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 5px;
    span{
      width: 10px;
      height: 10px;
      border-radius: 50%;

    }
    span:nth-child(1){
      background: #FF2F54;
      margin-left: 15px;
    }
    span:nth-child(2){
      background: #FFA630;
    }

  }
  ul{
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    padding-left: 0;
    padding-top: 25px;

    li{
      display: flex;
      justify-content: center;
      align-items: center;

    }
  }

}
.white-arrows{
  width: 24px;
  height: 24px;
  margin: 0 auto;
  border-radius: 7px;
  background: #FFA630;

}
.third{
  background: #10BB87;
  display: flex;
  justify-self: end;
  padding: 45px 200px;
  width: 1180px;
  border-top-left-radius: 28px;
  h3{
    font-size: 36px;
    font-weight: 600;
    color: white;
  }
  .text-third{
    width: 352px;
    p{
      color: #487B6C;
      font-size: 14px;
      line-height: 20px;
    }
  }
  .btn-third{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: white;
    width: 215px;
    padding: 12px 0;
    cursor: pointer;
    border-radius: 12px;
    p{
      text-align: center;
      margin-bottom: 0;
      color: black;
    }
    p:nth-child(2){
      display: none;
    }
  }
}
.third::after{
  content: url("/pattern.svg");
  position: absolute;
  right: 0;
}
@media (max-width: 1366px){
  .third{
    width: 902px;
    padding: 45px 265px;
  }
  .third::after{
    right: -20%;
  }
  .first{
    left: 10%;
  }
  .second{
    left: 14%;
    top: 44%;
  }
  .pb-6{
    padding-bottom: 200px;
  }
}
@media (max-width: 800px){
  .third{
    margin-top: 250px;
    padding-top: 200px;
    display: block;
    .text-third{
      margin: 0 230px;
    }
    .btn-third{
      p:nth-child(1){
        display: none;
      }
      p:nth-child(2){
        display: flex;
        color: #b3b3b3;
      }
    }
  }
  .second{
    left: 75%;
    top: 10%;
  }
  .third::after{
    content: url("/pattern2.svg");
    background-position: left;
    right: 60%;
    top: 45%;
    transform: scaleX(-1);
  }
}
@media (max-width: 350px) {
  .first{
    width: 300px;
    height: 300px;
    top: -17%;
    left: 7%;
    img{
      margin: 30px 50px;
    }
  }
  .second{
    left: 28%;
    top: 24%;
  }
  .third{
    width: 100%;
    padding: 300px 0 50px 0;
    border-radius: 0;
    .text-third{
      margin: 0 10px;
      h3{
        font-size: 20px;
        text-align: left;
        margin-right: 75px;
      }
    }
  }
  .third::after{
    display: none;
  }
  .gap-5{
    gap: 1em !important;
  }
  .mt-5{
    margin-top: -35px !important;
  }
  .pb-6{
    padding-bottom: 100px;
  }
}
</style>