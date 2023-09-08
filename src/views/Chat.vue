<template>

   <h1 style="color: white">Chat:</h1>
   <div class="container col-md-6 chat-bg shiny-border">
      <div v-for="msg of messages">
         <IncomingMessage v-if="msg.role === 'assistant'" :message="msg.message"></IncomingMessage>
         <br>
         <OutgoingMessage v-if="msg.role === 'user'" :message="msg.message"></OutgoingMessage>
      </div>
   </div>

   <div class="container mt-6">
      <SendMessageInput @send-message="sendUserMessage"/>
   </div>
</template>
<script setup>
import { ref } from 'vue';
import IncomingMessage from '../components/IncomingMessage.vue';
import OutgoingMessage from '../components/OutgoingMessage.vue';
import SendMessageInput from '../components/SendMessageInput.vue';
import { useFirstAnswerStore } from '../stores/firstAnswer'
import sendMessage from '../gpt/index';

const firstAnswerStore = useFirstAnswerStore()
const msg = ref(firstAnswerStore.firstAnswer)

const messages = ref([{"role": "assistant", "message": msg.value}])

const sendUserMessage = async (message)=>{
   messages.value.push({ "role": "user", "message": message })
   console.log("Mesaj gonderiliyor: ", message)
   const answer = await sendMessage(message)
   messages.value.push({ "role": "assistant", "message": answer })
}
</script>

<style scoped>
.chat-bg{
   background-color: black;
   height: 70vh;
   width: 60%;
}
.shiny-border {
  border: 2px solid transparent;
  border-color: white; /* Border image with a purple gradient */
  border-radius: 20px;
  padding: 20px; /* Add padding for spacing inside the div */ /* Text color */
  text-align: center; /* Center the text */
}

</style>
