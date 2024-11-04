<template>
  <div class="pointer btn-custom" @click="handleClick">
  <p>{{text}}</p>
  </div>
</template>

<script>
import { openModal } from '../modalState.js';
export default {
  props:{
    text:{
      type: String,
      default: 'Оставить заявку'
    }
  },
  methods: {
    handleClick() {
      console.log()
      openModal();
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-custom {
  width: 161px;
  height: 40px;
  background: #10BB87;
  border-radius: 10px;
  box-shadow: 0 9px 25px -4px #487B6C80;
  display: flex;
  align-items: center;
  justify-content: center;
}

p {
  color: white;
  font-size: 12px;
  font-weight: 600;
  padding-top: 13px;
}
@media (max-width: 350px) {
  .btn-custom{
    width: 120px;
  }
}
</style>