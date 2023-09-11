<template>
  <div class="text-xl max-h-screen p-10 w-full">
    <div class="flex font-semibold gap-6 text-center items-center">
      <img
        src="../asset/icons/goToHome.svg"
        class="cursor-pointer"
        @click="goHome()"
      />
      <p class="">Go Home</p>
    </div>
   
    <div class="flex flex-wrap max-h-screen thin-scrollbar overflow-y-auto " >
      <div v-for="i in 12" :key="i" class="p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div
          class="flex bg-white border rounded-xl shadow p-4 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer w-fit-content" @click="this.$router.push('/albums/detail')"
        >
        <div class="flex flex-start" >
              <div class=" h-auto w-[160px]">
                <img src="../asset/image/album1.png" class="object-contain"/>
                <img src="../asset/image/album4.png" class="object-contain"/>
              </div>
              <div class="h-auto w-[160px]">
                <img src="../asset/image/album3.png" class="object-contain"/>
                <img src="../asset/image/album2.png" class="object-contain"/>
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
