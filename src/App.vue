<template>
  <div class="flex flex-wrap w-full h-screen">
      <SideBar :selectedUser="selectedUser" class="w-2/12 bg-[#F5F5F5]  rounded shadow-lg"/>
      <router-view class="overflow-hidden w-10/12 border-3 border-sky-500"/>
    </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "App",
  components: {
    SideBar,
  },
  setup() {
    const store = useStore();
    const selectedUser = computed(() => store.getters.getSelectedUser);
    const router = useRouter()
    let currentUrl = window.location.pathname;
    currentUrl = currentUrl.replace(/\//g, '');

    store.commit("setSelectedTab", currentUrl);
    router.push('/'+ currentUrl)

    return {
      selectedUser,
    };
  },
};
</script>
