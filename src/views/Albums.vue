<template>
  <div class="text-xl max-h-screen p-10">
    <div class="flex font-semibold gap-6 text-center items-center">
      <img
        src="../asset/icons/goToHome.svg"
        class="cursor-pointer"
        @click="goHome()"
      />
      <p class="font-poppins">Go Home</p>
    </div>
    <div class="flex flex-wrap max-h-screen overflow-y-auto thin-scrollbar">
      <div v-for="i in 12" :key="i" class="p-4 flex-grow flex-shrink-0 flex-basis-1/3 min-w-100 sm:flex-basis-1/2 md:flex-basis-1/1">
        <div
          class="bg-white border rounded-xl shadow p-4 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer min-w-[100%]"
        >
          <div class="flex flex-col gap-4 flex-start w-full">
            <div class="flex flex-start">
            <div class="flex-grow-0 flex-shrink-0 w-1/2 p-0">
              <img src="../asset/image/album1.png" class="object-contain w-full"/>
              <img src="../asset/image/album4.png" class="object-contain w-full"/>
            </div>
            <div class="flex-grow-0 flex-shrink-0 w-1/2 p-0">
              <img src="../asset/image/album3.png" class="object-contain w-full"/>
              <img src="../asset/image/album2.png" class="object-contain w-full"/>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  name: "AlbumsList",
  props: {
    users: Array,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    router.beforeEach((to, from, next) => {
      if (to.path === "/") {
        store.commit("setSelectedUser", null);
        localStorage.clear();
      }
      next();
    });
    const goHome = () => {
      store.commit("setSelectedUser", null);
      localStorage.clear();
      router.push("/");
    };
    return {
      goHome,
    };
  },
};
</script>
