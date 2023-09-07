<script setup>
import sendMessage from '../gpt'
import router from '../router'
import SendFirstMessageInput from '../components/SendFirstMessageInput.vue';
import { useFirstMessageStore } from '../stores/firstMessage'
import { useFirstAnswerStore } from '../stores/firstAnswer'


const firstMessageStore = useFirstMessageStore()
const firstAnswerStore = useFirstAnswerStore()

const sendFirstMessage = async (message)=>{
  console.log("Mesaj gonderiliyor: ", message)
  const answer = await sendMessage(message)
  firstMessageStore.setFirstMessage(message)
  firstAnswerStore.setFirstAnswer(answer)
  router.push('chat')
}
</script>

<template>
    <div class="container shiny-border mt-5 mb-0">
      <h1 class="container text-truncate whiteText">Welcome! <br> I am your AI Organizator from <strong style="color: yellow">Muffin Organization</strong></h1>
      <br>
      <div class="container mt-5">
        <SendFirstMessageInput 
        @send-first-message="sendFirstMessage"
        />
      </div>
    </div>
</template>

<style>
.whiteText{
  color: white
}

.shiny-border {
  border: 2px solid transparent;
  border-color: white; /* Border image with a purple gradient */
  border-radius: 20px;
  padding: 20px; /* Add padding for spacing inside the div */
  color: white; /* Text color */
  text-align: center; /* Center the text */
  justify-content: center;
  align-items: center;
}
</style>


