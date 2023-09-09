<template>
  <div class="flex h-full items-stretch min-h-screen">
      <SideBar :selectedUser="selectedUser" class="max-h-screen"/>
      <UserList class="max-h-screen overflow-y-auto p-10 md:flex-grow"  :users="userList"
      @update:selectedUser="updateSelectedUser" />
    </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import SideBar from "./components/SideBar.vue";
import UserList from "./components/UsersList.vue";

export default {
  name: "App",
  components: {
    SideBar,
    UserList,
  },
  setup() {
    const userList = ref([]);
    const selectedUser = ref(null);
    onMounted(async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log("respo", response);
        userList.value = response.data;
      } catch (error) {
        console.error("API isteği sırasında hata oluştu:", error);
      }
    });
    const updateSelectedUser = (user) => {
      selectedUser.value = user;
    };

    return {
      userList,
      selectedUser,
      updateSelectedUser,
    };
  },
};
</script>
