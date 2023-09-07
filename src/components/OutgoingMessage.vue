<template>
   <div>
      <div class="outgoing-message">
         <div class="outgoing-message-box">
            <p>{{ props.message }}</p>
         </div>
         <img class="img img-fluid" src="/pp.jpeg" alt="">
      </div>
   </div>
</template>
<script setup>
const props = defineProps(['message'])
</script>
<style scoped >
img{
   height: 50px;
   width: fit-content;
   border-radius: 50%;
   margin-left: 1%;
}
.outgoing-message{
   float:right;
   display: inline-flex;
   margin-right: 8%;
}
.outgoing-message-box{
   /* simple message box */
   padding: 1%;
   border: 2px solid;
   background-color: rgb(215, 213, 132); /* Border image with a purple gradient */
   border-radius: 20px;
   box-shadow: 1 1 1 1;
   text-align:center;
   justify-content: center;
   align-items: center;
   min-width: 100%;
   width: fit-content;
   height: min-content;
}

</style>
