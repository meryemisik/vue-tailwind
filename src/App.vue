<template>
  <div class="flex h-full items-stretch min-h-screen">
      <SideBar class="bg-gray-light-500 p-10 w-64" />
      <UserList class="p-10 md:flex-grow" :users="userList" />
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

    return {
      userList,
    };
  },
};
</script>
