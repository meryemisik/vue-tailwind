<template>
    <div class="text-xl max-h-screen overflow-y-auto p-10 md:flex-grow text-xl">
      <div class="flex font-semibold gap-6 text-center items-center">
        <img
          src="../asset/icons/goToHome.svg"
          class="cursor-pointer"
          @click="goHome()"
        />
        <p class="">Go Home</p>
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
  