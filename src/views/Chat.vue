<template>
   <div class="container col-md-6 chat-bg shiny-border">
      <IncomingMessage :message="msg"></IncomingMessage>
      <br>
      <OutgoingMessage message="siktir"></OutgoingMessage>
   </div>
</template>
<script setup>
import { ref } from 'vue';
import IncomingMessage from '../components/IncomingMessage.vue';
import OutgoingMessage from '../components/OutgoingMessage.vue';
import { useFirstAnswerStore } from '../stores/firstAnswer'

const firstAnswerStore = useFirstAnswerStore()
const msg = ref(firstAnswerStore.firstAnswer)
</script>

<style scoped>
.chat-bg{
   background-color: black;
   height: 70vh;
   width: 60%;
   margin-bottom: 15%
}
.shiny-border {
  border: 2px solid transparent;
  border-color: white; /* Border image with a purple gradient */
  border-radius: 20px;
  padding: 20px; /* Add padding for spacing inside the div */ /* Text color */
  text-align: center; /* Center the text */
}

</style>
