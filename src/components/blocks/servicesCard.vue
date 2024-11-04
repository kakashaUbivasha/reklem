<template>
  <div class="card-services">
    <img :src="image" alt="image">
    <h3>{{title}}</h3>
    <p>{{text}}</p>
    <button class="btn-services">
        <span>
          Подробнее
        </span>
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.97982 1.68688C5.78456 1.49162 5.78456 1.17504 5.97982 0.979775C6.17508 0.784513 6.49167 0.784513 6.68693 0.979775L9.35359 3.64644C9.54886 3.8417 9.54886 4.15829 9.35359 4.35355L6.68693 7.02022C6.49167 7.21548 6.17508 7.21548 5.97982 7.02022C5.78456 6.82495 5.78456 6.50837 5.97982 6.31311L7.79293 4.49999H1.33337C1.05723 4.49999 0.833374 4.27614 0.833374 3.99999C0.833374 3.72385 1.05723 3.49999 1.33337 3.49999H7.79293L5.97982 1.68688Z" fill="black"/>
        </svg>
    </button>
  </div>
</template>

<script>
export default {
  props:{
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
  }
}
</script>

<style lang="scss" scoped>
.card-services{
  height: 218px;
  position: relative;
  max-width: 200px;
  h3{
    font-weight: 600;
    font-size: 14px;
    margin: 10px 0;
  }
  p{
    font-size: 14px;
    color: #b3b3b3;
  }
  .btn-services{
    padding: 9px 29px;
    box-shadow: 0px 4px 7px 0px #00000026;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    border: none;
    border-radius: 10px;
  }
}
@media (max-width: 800px) {
  .btn-services{
    bottom: -30px !important;
  }
}
@media (max-width: 350px) {

  .btn-services{
    padding: 7px 15px !important;
  }
}
</style>