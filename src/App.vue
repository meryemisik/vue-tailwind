<template>
  <div class="flex flex-wrap w-full h-screen">
      <SideBar :selectedUser="selectedUser" class="w-2/12 bg-[#F5F5F5]  rounded shadow-lg"/>
      <router-view class="overflow-hidden w-10/12 border-3 border-sky-500"/>
    </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    SideBar,
  },
  computed: {
    ...mapGetters({
      selectedUser : 'getSelectedUser'
    }),
  },
};
</script>
