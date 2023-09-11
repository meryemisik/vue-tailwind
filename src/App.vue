<template>
  <div class="flex max-h-screen">
      <SideBar :selectedUser="selectedUser"/>
      <router-view class="max-w-[calc(100%-260px)]  overflow-hidden"/>
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
