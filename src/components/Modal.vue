<template>
  <div
    class="xs:w-[100%] w-[55%] mx-auto h-[609px] px-8 py-9 bg-white rounded-3xl flex-col justify-start items-start gap-2.5 inline-flex"
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
    <div class="flex flex-col lg:flex-row">
      <div
        class="break-words text-black text-opacity-70 text-sm font-normal leading-tight tracking-tight w-full lg:w-1/2"
      >
        <p
          v-if="post"
          class="p-[20px] text-black text-opacity-70 text-sm font-normal leading-tight tracking-tight overflow-auto max-h-[300px] xs:max-h-[200px] thin-scrollbar"
          v-html="post.body"
        ></p>
      </div>
      <div
        class="md:max-h-[400] lg:max-h-full s:max-h-[300px] xs:max-h-[300px] lg:pl-6 pb-8 bg-white lg:border-l lg:ml-[4px] border-zinc-300 flex-col justify-start items-start gap-5 inline-flex w-full lg:w-1/2 lg:mt-[0px] xs:mt-[30px]"
      >
        <div class="text-slate-800 text-xl font-semibold leading-loose">
          Comments
        </div>
        <div
          class="overflow-auto thin-scrollbar max-h-[400px] flex flex-col gap-10"
        >
          <div
            v-for="(comment, index) in comments"
            :key="index"
            class="w-full md:flex-col justify-start items-start"
          >
            <section class="bg-white antialiased">
              <div class="max-w-2xl mx-auto px-4">
                <article class="text-base bg-white rounded-lg">
                  <footer class="flex justify-between items-center mb-2">
                    <div class="flex items-center">
                      <p
                        class="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold"
                      >
                        <img
                          v-if="index % 2 == 0"
                          src="../asset/image/commentProfile.svg"
                          class="mr-2 w-12 h-12 rounded-full"
                        />
                        <img
                          v-else
                          src="../asset/image/commentProfile2.png"
                          class="mr-2 w-12 h-12 rounded-full"
                        />

                        {{ comment.author }}
                      </p>
                    </div>
                  </footer>
                  <p class="font-roboto text-[#5C6672] text-sm leading-5">
                    {{ comment.text }}
                  </p>
                </article>
              </div>
            </section>
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
      {
        author: "Leyla Selim",
        text: " Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vest...",
      },
      {
        author: "Jhon DOE",
        text: " Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut ",
      },
      {
        author: "Leyla Selim",
        text: " Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vest...",
      },
      {
        author: "Jhon DOE",
        text: " Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut ",
      },
      {
        author: "Leyla Selim",
        text: " Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vest...",
      },
      {
        author: "Jhon DOE",
        text: " Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut ",
      },
    ];
    return {
      closeModal,
      comments,
    };
  },
};
</script>
