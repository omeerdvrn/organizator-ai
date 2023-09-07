import { defineStore } from "pinia"
import { ref } from "vue"
export const useFirstMessageStore = defineStore('firstMessage', () => {
   const firstMessage = ref('')
   function setFirstMessage(message) {
     firstMessage.value = message
   }
 
   return { firstMessage, setFirstMessage }
 })