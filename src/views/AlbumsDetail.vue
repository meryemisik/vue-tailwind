<template>
  <div class="text-xl max-h-screen p-10">
    <div class="flex font-semibold gap-6 text-center items-center">
      <img
        src="../asset/icons/goToHome.svg"
        class="cursor-pointer"
        @click="goHome()"
      />
      <p class="">Go Albums</p>
    </div>
  

    <div class="user-list flex flex-wrap max-h-screen thin-scrollbar overflow-y-auto">
        <div v-for="i in 12" :key="i" class="p-4">
          <div
            class="flex bg-white border rounded-xl shadow p-4 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer w-fit-content"
          >
          <div class="flex flex-start" >
                <div class="w-[160px]">
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
export default {
  name: "AlbumsDetail",
  setup() {
    const router = useRouter();
    const goHome = () => {
      router.push("/albums");
    };
    return {
      goHome,
    };
  },
};
</script>
