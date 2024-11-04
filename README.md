<template>
  <div v-if="isModalOpen" class="position-fixed modal-overlay z-3">
    <div v-if="isSubmitted" class="thank-you-block">
      <img src="/razor.svg" alt="">
      <h2 class="">Ваша заявка успешно отправлена!</h2>
      <p class="">Благодарим за заявку!</p>
    </div>
    <div v-else class="form-block position-fixed">
      <button class="position-absolute btn-close" @click="closeModal">
      </button>
        <div class="text">
          <h1>Нужна <span style="text-decoration: underline 5px #487B6C">помощь?</span></h1>
          <p>Оставьте свои данные — мы перезвоним и решим вопрос. Помните, оставляя контакты вы даете согласие на обработку персональных данных.</p>
        </div>
        <form @submit.prevent="submitCode" action="" class="form">
          <div class="position-relative">
            <input v-model="name" class="" id="i1" placeholder="Ваше имя">
            <label for="i1">Имя</label>
          </div>
          <div class="position-relative">
            <vue-tel-input v-model="phone" mode="international"></vue-tel-input>
          </div>
          <button @click="" class="my-btn">
            Отправить
          </button>
        </form>
      </div>
    </div>
</template>

<script>
import { isModalOpen, closeModal } from '../modalState.js';
import { VueTelInput } from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';

export default {
  components: {VueTelInput},
  data() {
    return {
      name: '',
      phone: '',
      iti: null,
      isSubmitted: false,
    }
  },
  computed: {
    isModalOpen() {
      return isModalOpen.value;
    }
  },
  methods: {
    closeModal,
    async submitCode() {
      try {
        const formData = {
          name: this.name,
          phone: this.phone
        };

        const response = await fetch('https://www.npmjs.com/package/intl-tel-input/v/18.0.0', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });

      }
      catch (error) {
        console.error(this.phone);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-close{
  top: 20px;
  right: 20px;
  color: #969EAA;

}
.modal-overlay{
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-block{
  padding: 70px 90px;
  background: #ffffff;
  border-radius: 7px;
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 74px;
  z-index: 2;
  width: 960px;
  height: 355px;
  top: 25vh;
  right: 25vw;
  .text{
    h1{
      font-weight: 600;
      font-size: 36px;
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
    .my-btn{
      box-shadow: 0px 9px 25px -4px #487B6C80;
      color: white;
      background: #10BB87;
      border-radius: 10px;
      width: 100%;
    }
    input{
      border: 1px solid #f4f4f4;
      box-shadow: 0px 4px 7px 0px #0000000D;
      border-radius: 10px;
      padding: 12px 15px;
      width: 100%;
    }
    label{
      font-size: 12px;
      font-weight: 500;
      color: #487B6C;
      position: absolute;
      top: -32px;
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
.thank-you-block{
  padding: 70px 90px;
  background: #ffffff;
  border-radius: 7px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  z-index: 2;
  width: 960px;
  height: 355px;
  top: 25vh;
  right: 25vw;
  img{
    width: 60px;
    height: 82px;
  }
  h2{
    font-weight: 600;
    font-size: 36px;
    color: #1e1e1e;
  }
  p{
    font-size: 14px;
    font-weight: 400;
    color: #487B6C;
  }
}
</style>