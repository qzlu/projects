<template>
    <div v-show="show">
        <div class="modal-mask" ></div>
        <div class="modal-dialog">
            <slot></slot>
            <div class="colse" @click="close"></div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        show:Boolean
    },
    methods:{
        close () {
            this.$emit('update:show',false)
        }
    }
}
</script>
<style>
.modal-mask {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0.5;
  overflow: hidden;
  z-index: 9000;
  color: #fff;
}
.modal-dialog {
  width: 975px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  margin-top: -90px;
  z-index: 9999;
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
  font-size: 28px; 
}
.colse{
    width: 72px;
    height: 72px;
    position: absolute;
    bottom: -90px;
    left: 50%;
    margin-left: -50px;
    background: url('../assets/images/close.png') center no-repeat;
    background-size: 100% 100%
}
</style>


