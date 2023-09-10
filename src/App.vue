<template>
  <div class="flex max-h-full items-stretch max-h-screen">
      <SideBar :selectedUser="selectedUser" class="max-h-screen"/>
      <router-view/>
    </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";
import { mapGetters } from "vuex"; // Vuex state'ini kullanmak için

export default {
  name: "App",
  components: {
    SideBar,
  },
  computed: {
    ...mapGetters({
      selectedUser : 'getSelectedUser'
    }), // Vuex state'ini computed prop olarak kullanma
  },
};
</script>
