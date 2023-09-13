<template>
  <div class="text-xl max-h-screen p-10">
    <div class="flex font-semibold gap-6 text-center items-center">
      <img src="../asset/icons/goToHome.svg" class="cursor-pointer" @click="goAlbums()" />
      <p class="font-poppins">Go Albums</p>
    </div>
    <div class="max-h-[100%] flex flex-wrap mt-[32px]">
      <div class="">
        <div class="w-full flex gap-8 items-start">
          <img src="../asset/image/album9.png" class="object-contain w-full" />
          <img src="../asset/image/album10.png" class="object-contain w-full" />
          <img src="../asset/image/album11.png" class="object-contain w-full" />
          <img src="../asset/image/album1.png" class="object-contain w-full" />
          <img src="../asset/image/album7.png" class="object-contain w-full" />
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
    const goAlbums = () => {
      router.push("/albums");
    };
    return {
      goAlbums,
    };
  },
};
</script>
