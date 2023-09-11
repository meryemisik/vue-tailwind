<template>
    <div
      v-if="isOpen"
      class="container mx-auto h-[610px]"
    >
      <div class="px-[32px] py-[36px] bg-white rounded-3xl">
        <div class="flex items-center justify-between">
          <div
            class="text-2xl text-[#26303E] font-medium leading-tight tracking-wide"
          >
            {{ post.title }}
          </div>
          <img
            src="../asset/icons/cancel.svg"
            class="cursor-pointer"
            @click="closeModal"
          />
        </div>
        <div class="mt-[12px]">
          <div class="flex">
            <p class=" p-[20px] w-[484px] text-black text-opacity-70 text-sm font-normal leading-tight tracking-tight overflow-auto max-h-[300px] thin-scrollbar" v-html="post.body"></p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, defineProps } from "vue";
  
  export default {
    props: {
      post: Object,
      isOpen: Boolean,
    },
    setup(props, { emit }) {
      const closeModal = () => {
        emit("update:isOpen", false);
      };
  
      return {
        closeModal,
      };
    },
  };
  </script>
  