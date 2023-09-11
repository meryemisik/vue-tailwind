<template>
  <div class="text-xl max-h-screen  p-10 md:flex-grow text-xl">
    <div class="flex font-semibold gap-6 text-center items-center">
      <img
        src="../asset/icons/goToHome.svg"
        class="cursor-pointer"
        @click="goHome()"
      />
      <p class="">Go Home</p>
    </div>

    <div
      class="user-list flex flex-wrap max-h-screen thin-scrollbar"
    >
      <div class="p-4 grow shrink basis-1/3">
        <div
          class="flex bg-white border rounded-xl shadow p-4 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer"
        >
          <div class="flex flex-col gap-4 flex-start w-full">
            <div class="flex flex-start gap-8">
              <div class="h-24 w-24">
                Meryem
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
