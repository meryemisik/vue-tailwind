<template>
  <div class="flex max-h-full items-stretch max-h-screen">
      <SideBar :selectedUser="selectedUser" class="max-h-screen max-w-6"/>
      <router-view class="w-[calc(100%-260px)]"/>
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
