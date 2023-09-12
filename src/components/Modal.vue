<template>
  <div
    class="w-[55%] mx-auto h-[609px] px-8 py-9 bg-white rounded-3xl flex-col justify-start items-start gap-2.5 inline-flex"
  >
    <div class="flex items-center justify-between w-full">
      <div
        v-if="post"
        class="text-2xl text-[#26303E] font-medium leading-tight tracking-wide"
      >
        {{ post.title }}
      </div>
      <div class="w-6 h-6">
        <img
          src="../asset/icons/cancel.svg"
          class="cursor-pointer"
          @click="closeModal"
        />
      </div>
    </div>
    <div class="h-[503px] relative flex">
      <div
        class="break-words eft-[20px] top-[20px] absolute text-black text-opacity-70 text-sm font-normal leading-tight tracking-tight"
      >
        <p
          v-if="post"
          class=" p-[20px] w-[484px] text-black text-opacity-70 text-sm font-normal leading-tight tracking-tight overflow-auto max-h-[300px] thin-scrollbar"
          v-html="post.body"
        ></p>
      </div>
      <div
        class="px-6 pb-8 left-[532px] top-0 absolute bg-white border-l border-zinc-300 flex-col justify-start items-start gap-5 inline-flex "
      >
        <div class="text-slate-800 text-xl font-semibold leading-loose">
          Comments
        </div>
        <div class="overflow-auto thin-scrollbar max-h-[400px] flex flex-col gap-2">
          <div v-for="(comment, index) in comments" :key="index" class="w-full  md:flex-col justify-start items-start md:flex ">
          <div class="md:justify-start md:items-center gap-4 inline-flex">
            
            <div class="w-12 h-12 relative bg-white rounded-[50px] border border-zinc-300">

              <img v-if="index % 2 == 0" src="../asset/image/commentProfile.svg"/>
              <img v-else src="../asset/image/commentProfile2.png" class="rounded-full"/>
            </div>
            <div class="md:flex-col justify-start items-start gap-3 inline-flex p-[20px]">
              <div class="text-[#26303E] text-sm font-medium leading-[14px]  font-poppins tracking-[0.28px]">
                {{ comment.author }}
              </div>
              <div class="md:w-[306px] text-gray-500 text-sm font-normal leading-tight">
                {{ comment.text }}
              </div>
            </div>
          </div>
        </div>
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

    const comments = [
      { author: "Leyla Selim", text: " Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vest..." },
      { author: "Jhon DOE", text: " Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut " },
      { author: "Leyla Selim", text: " Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vest..." },
      { author: "Jhon DOE", text: " Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut " },
      { author: "Leyla Selim", text: " Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vest..." },
      { author: "Jhon DOE", text: " Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut " },

    ];
    return {
      closeModal,
      comments
    };
  },
};
</script>
