<template>
   <div class="container input-group">
      <input 
      class="form-control form-control-lg" 
      type="text" 
      name="message" 
      placeholder="Send Message!"
      v-model="message"
      @keydown="(e) => {
            if(e.key === 'Enter') {
               emit('sendFirstMessage', message)
               message = ''
            }
         }"
      >
      <button 
      class="btn btn-success btn-lg"
      type="button"
      @click="() => {
         emit('sendFirstMessage', message)
         message = ''
         }"
      >
      Send
      </button>
   </div>
</template>
<script setup>
import { ref } from 'vue';

const message = ref("");

const emit = defineEmits(['sendFirstMessage'])
</script>

