<template>
  <div class="text-xl max-h-screen p-10">
    <div class="flex font-semibold gap-6 text-center items-center">
      <img src="../asset/icons/goToHome.svg" class="cursor-pointer" @click="goHome()" />
      <p class="font-poppins">Go Home</p>
    </div>
    <div class="max-h-[100%] overflow-y-auto thin-scrollbar flex flex-wrap justify-evenly">
      <div v-for="(i, index) in 12" :key="i" class="p-4 flex-initial w-full lg:max-w-[50%] xl:max-w-[33.3%]"
        @click="this.$router.push('albums/detail')">
        <div
          class="bg-white border rounded-xl shadow p-4 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer min-w-[100%]">
          <div class="flex flex-col gap-4 flex-start w-full">
            <div class="flex flex-start">
              <div class="flex-grow-0 flex-shrink-0 w-1/2 p-0">
                <img v-if="index % 2 == 0" src="../asset/image/album1.png" class="object-cover w-full h-28" />
                <img v-else src="../asset/image/album5.png" class="object-cover w-full h-28" />
                <img v-if="index % 3 == 0" src="../asset/image/album10.png" class="object-cover w-full h-28" />
                <img v-else src="../asset/image/album11.png" class="object-cover w-full h-28" />
              </div>
              <div class="flex-grow-0 flex-shrink-0 w-1/2 p-0">
                <img v-if="index % 4 == 0" src="../asset/image/album2.png" class="object-cover w-full h-28" />
                <img v-else src="../asset/image/album4.png" class="object-cover w-full h-28" />
                <img v-if="index % 5 == 0" src="../asset/image/album7.png" class="object-cover w-full h-28" />
                <img v-else src="../asset/image/album3.png" class="object-cover w-full h-28" />
              </div>
            </div>
            <div class="text-black text-sm font-roboto">
              Non esse culpa molestiae omnis sed ol...
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
