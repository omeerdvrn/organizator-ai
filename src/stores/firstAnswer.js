import { defineStore } from "pinia"
import { ref } from "vue"
export const useFirstAnswerStore = defineStore('firstAnswer', () => {
   const firstAnswer = ref('')
   function setFirstAnswer(answer) {
     firstAnswer.value = answer
   }
 
   return { firstAnswer, setFirstAnswer }
 })