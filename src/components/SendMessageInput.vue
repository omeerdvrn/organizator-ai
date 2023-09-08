<template>
   <div class="container col-7">
      <div class="container input-group">
         <input 
         class="form-control form-control-lg" 
         type="text" 
         name="message" 
         placeholder="Send Message!"
         v-model="message"
         @keydown="(e) => {
            if(e.key === 'Enter') {
               emit('sendMessage', message)
               message = ''
            }
         }"
         >
         <button 
         class="btn btn-success btn-lg"
         type="button"
         @click="emit('sendMessage', message)"
         >
         Send
      </button>
   </div>
   </div>
</template>
<script setup>
import { ref } from 'vue';

const message = ref("");

const emit = defineEmits(['sendMessage'])
</script>
<style>

</style>

