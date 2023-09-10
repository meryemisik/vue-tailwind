<template>
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center z-50">
      <div class="modal-overlay"></div>
  
      <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div class="modal-content py-4 text-left px-6">
          <!-- Modal içeriği buraya gelecek -->
          <slot></slot>
        </div>
  
        <div class="modal-footer px-6 py-4">
          <button
            @click="closeModal"
            class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { defineEmits } from "vue";
  
  export default {
    props: {
      showModal: Boolean,
    },
    setup(props) {
      const emit = defineEmits();
  
      const closeModal = () => {
        emit("close");
      };
  
      return {
        closeModal,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Modal stilleri buraya gelecek */
  </style>
  