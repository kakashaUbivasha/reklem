<template>
  <div class="product">
  <div class="image">
    <img :src="image" alt="image">
    <span class="discount">{{discount}}</span>
    <div class="tullbar">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
    <h2>{{title}}</h2>
    <button class="btn-product">
      <span class="text1">Выбрать вид</span>
      <span class="text2">Вид</span>
      <span class="plus-icon">
        <span>
        </span>
        <span>
        </span>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  props:{
    image:{
      type: String,
      required: true
    },
    title:{
      type: String,
      required: true
    },
    discount:{
      type: String,
      required: true
    },
  }
}
</script>

<style lang="scss" scoped>
.plus-icon {
  position: relative;
  width: 12px;
  span {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px; /* Толщина линий */
    background-color: black; /* Цвет плюсика */
  }
  span:nth-child(2) {
    transform: rotate(90deg) translateY(-30%);
  }
}
.btn-product{
  display: flex;
  gap: 10px;
  align-items: center;
  box-shadow: 0px 4px 7px 0px #00000026;
  border-radius: 10px;
  padding: 12px 30px;
  border: none;
  position: absolute;
  bottom: 0;
  .text2{
    display: none;
  }
}
.product{
  cursor: pointer;
  position: relative;
  height: 312px;
  h2{
    font-size: 14px;
    font-weight: 600;
    max-width: 192px;
    margin-top: 20px;
  }
  .image{
    background: #F2F2F2;
    border-radius: 24px;
    width: 192px;
    height: 192px;
    position: relative;
    img{
      max-height: 120px;
      max-width: 120px;
      position: absolute;
      left: 20%;
      top: 16%;
    }
    span{
      color: white;
      background: #10BB87;
      border-radius: 14px;
      padding: 0 12px;
      position: absolute;
      bottom: 12px;
      left: 15px;
    }
  }
}
.product:hover{
  .image{
    box-shadow: 0px 9px 25px 0px #0000002B;
    span{
      display: none;
    }
    .tullbar{
      gap: 5px;
    }
  }
  .btn-product{
    background: #10BB87;
    span{
      color: white;
    }
    .plus-icon{
      span{
        background-color: white;
      }
    }
  }
}
@media (max-width: 600px) {
  .product{
    height: 234px;
    width: 120px;
    .image{
      width: 120px !important;
      height: 120px !important;
      img{
        width: 70px;
        height: 70px;
        left: 26%;
      }
    }
    .discount{
      display: none;
    }

  }
  .text1{
    display: none;
  }
  .text2{
    display: block !important;
  }
  h2{
    font-size: 12px !important;
    margin-top: 10px !important;
  }
  .btn-product{
    padding: 7px 25px;
  }
}
</style>