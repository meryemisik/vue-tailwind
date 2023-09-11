<template>
  <div class="text-xl max-h-screen overflow-y-auto p-10 md:flex-grow">
    <div class="flex font-semibold gap-6 text-center items-center">
      <img
        src="../asset/icons/goToHome.svg"
        class="cursor-pointer"
        @click="goHome()"
      />
      <p class="">Go Home</p>
    </div>
    <div class="pt-[52px]">
      <div
        v-for="(post, index) in postList"
        :key="index"
        class="border-b py-[20px] px-[32px] flex flex-col gap-3"
      >
        <div
          class="w-[498px] text-[#26303E] text-lg font-medium leading-tight tracking-tight"
        >
          {{ post.title }}
        </div>
        <div
          class="text-black text-opacity-70 text-sm font-normal leading-tight tracking-tight"
          v-html="getFirst30Words(post.body)"
        ></div>
        <div class="flex justify-end">
          <div
            class="text-[#26303E] text-opacity-70 text-sm font-normal leading-tight tracking-tight flex items-center gap-6"
          >
            See More
            <img
              src="../asset/icons/detail.svg"
              class="cursor-pointer"
              @click="openModal(index)"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto">
      <div class="flex justify-center">
        <div
          v-show="isModalOpen"
          class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
        >
          <Modal
            :post="selectedPost"
            :isOpen="isModalOpen"
            @update:isOpen="isModalOpen = $event"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import Modal from "../components/Modal.vue";

export default {
  name: "PostsList",
  props: {
    users: Array,
  },
  components: {
    Modal,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const postList = [
      {
        title: "Post 1 Title",
        body: "Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 <br> response in Kerala with Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 <br> response in Kerala with Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 <br> response in Kerala with Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 <br> response in Kerala with Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 <br> response in Kerala with Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 <br> response in Kerala withBody Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 <br> response in Kerala with Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 <br> response in Kerala withBody Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 <br> response in Kerala with Chief Minister Shri Pinarayi Vijayan and <br> Health Minister of Kerala, Ms. Veena George <br> Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 <br> response in Kerala with Chief Minister Shri Pinarayi Vijayan and <br> Health Minister of Kerala, Ms. Veena George <br> Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 <br> response in Kerala with Chief Minister Shri Pinarayi Vijayan and <br> Health Minister of Kerala, Ms. Veena George drfgthujıkolpşlpkojı hugyftrdrf tgyhujıkolpl kojıhug ytfrdesrtyuıopğpoıuy ertyuıopoı uytreyuıopoıuy tresrtyuıopoıu ytrerty uıopghghnvnhb",
      },
      {
        title: "Post 2 Title",
        body: "Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 <br> response in Kerala with Chief Minister Shri Pinarayi Vijayan and <br> Health Minister of Kerala, Ms. Veena George <br> Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 <br> response in Kerala with Chief Minister Shri Pinarayi Vijayan and <br> Health Minister of Kerala, Ms. Veena George <br> Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 <br> response in Kerala with Chief Minister Shri Pinarayi Vijayan and <br> Health Minister of Kerala, Ms. Veena George",
      },
      {
        title: "Post 3 Title",
        body: "Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 <br> response in Kerala with Chief Minister Shri Pinarayi Vijayan and <br> Health Minister of Kerala, Ms. Veena George <br> Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 <br> response in Kerala with Chief Minister Shri Pinarayi Vijayan and <br> Health Minister of Kerala, Ms. Veena George <br> Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 <br> response in Kerala with Chief Minister Shri Pinarayi Vijayan and <br> Health Minister of Kerala, Ms. Veena George",
      },
      {
        title: "Post 4 Title",
        body: "Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 <br> response in Kerala with Chief Minister Shri Pinarayi Vijayan and <br> Health Minister of Kerala, Ms. Veena George <br> Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 <br> response in Kerala with Chief Minister Shri Pinarayi Vijayan and <br> Health Minister of Kerala, Ms. Veena George <br> Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 <br> response in Kerala with Chief Minister Shri Pinarayi Vijayan and <br> Health Minister of Kerala, Ms. Veena George",
      },
      {
        title: "Post 5 Title",
        body: "Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 <br> response in Kerala with Chief Minister Shri Pinarayi Vijayan and <br> Health Minister of Kerala, Ms. Veena George <br> Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 <br> response in Kerala with Chief Minister Shri Pinarayi Vijayan and <br> Health Minister of Kerala, Ms. Veena George <br> Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 <br> response in Kerala with Chief Minister Shri Pinarayi Vijayan and <br> Health Minister of Kerala, Ms. Veena George",
      },
      {
        title: "Post 6 Title",
        body: "Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 <br> response in Kerala with Chief Minister Shri Pinarayi Vijayan and <br> Health Minister of Kerala, Ms. Veena George <br> Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 <br> response in Kerala with Chief Minister Shri Pinarayi Vijayan and <br> Health Minister of Kerala, Ms. Veena George <br> Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 <br> response in Kerala with Chief Minister Shri Pinarayi Vijayan and <br> Health Minister of Kerala, Ms. Veena George",
      },
    ];

    const selectedPost = ref(null);
    const isModalOpen = ref(false);

    const openModal = (index) => {
      selectedPost.value = postList[index];
      isModalOpen.value = true;
    };

    const closeModal = () => {
      isModalOpen.value = false;
    };
    const getFirst30Words = (body) => {
      const words = body.split(' ').slice(0, 29).join(' ');
      return words;
    }

    const goHome = () => {
      store.commit("setSelectedUser", null);
      localStorage.clear();
      router.push("/");
    };

    return {
      goHome,
      postList,
      openModal,
      closeModal,
      selectedPost,
      isModalOpen,
      getFirst30Words
    };
  },
};
</script>
