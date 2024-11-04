<template>
  <div class="form-block position-relative">

  <div class="text wsection">
    <h1>Нужна <span style="text-decoration: underline 5px #487B6C">помощь?</span></h1>
    <p>Оставьте свои данные — мы перезвоним и решим вопрос. Помните, оставляя контакты вы даете согласие на обработку персональных данных.</p>
  </div>
    <form action="" class="form wsection">
      <div class="position-relative">
        <input class="long" id="i1" placeholder="Женя">
        <label for="i1">Имя</label>
      </div>
      <div class="d-flex align-items-center">
        <div class="position-relative">
          <input class="short" id="i2" placeholder="+7 000 000 00 00">
          <label for="i2">Телефон</label>
        </div>
        <button class="btn-form">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.8371 10.6629C16.471 10.2968 16.471 9.7032 16.8371 9.33709C17.2032 8.97097 17.7968 8.97097 18.1629 9.33709L23.1629 14.3371C23.529 14.7032 23.529 15.2968 23.1629 15.6629L18.1629 20.6629C17.7968 21.029 17.2032 21.029 16.8371 20.6629C16.471 20.2968 16.471 19.7032 16.8371 19.3371L20.2367 15.9375H8.125C7.60723 15.9375 7.1875 15.5178 7.1875 15C7.1875 14.4822 7.60723 14.0625 8.125 14.0625H20.2367L16.8371 10.6629Z" fill="black"/>
          </svg>
        </button>
      </div>
    </form>
    <img src="/imgs.svg" alt="">
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.form-block{
  padding: 70px 90px;
  background: #10BB87;
  border-radius: 28px;
  max-width: 960px;
  margin: 100px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 74px;
  z-index: 2;
  .text{
    h1{
      font-weight: 600;
      font-size: 36px;
      color: white;
    }
    p{
      font-size: 14px;
      color: #487B6C;
    }
  }
  .form{
    display: flex;
    flex-direction: column;
    gap: 50px;
    .long{
      width: 344px;
    }
    .short{
      width: 276px;
    }
    input{
      border: none;
      box-shadow: 0px 4px 7px 0px #00000026;
      border-radius: 10px;
      padding: 12px 15px;
    }
    label{
      font-size: 12px;
      font-weight: 500;
      color: #487B6C;
      position: absolute;
      top: -30px;
      left: 0;
    }
    button{
      border: none;
      background: white;
      width: 40px;
      height: 40px;
      border-radius: 10px;
    }
    .d-flex{
      gap: 30px;
    }

  }
  img{
    position: absolute;
    right: 0;
    top: 25px;
    z-index: -1;
  }
}
@media (max-width: 800px) {
  .form-block{
    padding: 70px 0 !important;
    border-radius: 0 !important;
    overflow: hidden;
    img{
      top: 50px !important;
      right: -50px !important;
    }
  }
  .text{
  }
  .form{
  }
}
@media (max-width: 350px) {
  .form-block{
    grid-template-columns: repeat(1, 1fr);
    gap: 50px;
    img{
      top: 170px !important;
    }
    .form{
      .long{
        width: 90%;
      }
      .short{
        width: 100%;
      }
    }
    .text{
      h1{
        font-size: 20px;
      }
      p{
        font-size: 12px;
      }
    }
  }
}
</style>