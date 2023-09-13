<template>
  <div class="max-h-screen p-10">
   
    <div class="flex font-semibold gap-6 text-center items-center">
      <p class="font-poppins text-xl">All Users</p>
    </div>
    <div class=" flex flex-wrap max-h-[100%] overflow-y-auto thin-scrollbar overflow-x min-w-[300px]">

      <div v-for="user in userList" :key="user.id" class="p-4 flex grow shrink w-full lg:max-w-[50%] xl:max-w-[33.3%]">
        <div
          class="flex bg-white border rounded-xl shadow p-4 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer w-[100%]"
          @click="selectUser(user)"
        >
          <div class="flex flex-col gap-4 flex-start w-full font-poppins">
            <div class="flex flex-start items-start gap-8 ">
              <div class="">
                <img
                src="../asset/image/profile.png"
                  class="h-full w-full rounded-full"
                />
              </div>
              <div class="flex flex-col justify-center  break-all ">
                <p class="text-lg text-black font-medium  truncate xs:w-32 lg:w-40">{{ user.name }}</p>
                <p class="text-test font-light text-sm truncate xs:w-32 lg:w-40">{{ user.email }}</p>
                <p class="text-test font-light text-sm truncate xs:w-32 lg:w-40">{{ user.phone }}</p>
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <div class="flex gap-3">
                <img src="../asset/icons/location.svg" />
                <p class="mt-2 text-[#313E50] text-sm font-medium">Location</p>
              </div>
              <div class="flex flex-col">
                <span class="text-[#5C6672] text-sm"
                  >{{ user.address.street }},{{ user.address.suite }}</span
                >
                <span class="text-[#5C6672] text-sm"
                  >{{ user.address.city }},{{ user.address.zipcode }}</span
                >
              </div>
            </div>
            <div class="">
              <div class="flex gap-3">
                <img src="../asset/icons/company.svg" />
                <p class="mt-2 text-[#313E50] text-sm font-medium">Company</p>
              </div>
              <span class="text-[#5C6672] text-sm">{{
                user.company.name
              }}</span>
            </div>
            <div class="">
              <div class="flex gap-3">
                <img src="../asset/icons/website.svg" />
                <p class="mt-2 text-[#313E50] text-sm font-medium">Website</p>
              </div>
              <span class="text-[#5C6672] text-sm">{{ user.website }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { mapGetters, mapMutations } from "vuex";
import axios from "axios";
import store from "../store/store";
import { useRouter } from 'vue-router'; 
export default {
  name: "UserList",
  props: {
    users: Array,
  },
  computed: {
    ...mapGetters({
      getSelectedTab: "getSelectedTab",
    }),
    ...mapMutations(["setSelectedUser"]),
  },
  setup() {
    const userList = ref([]);
    const selectedUser = ref(null);
    const router = useRouter();

    // LocalStorage'dan seçilen kullanıcıyı al
    const storedUser = localStorage.getItem("selectedUser");
    if (storedUser) {
      selectedUser.value = JSON.parse(storedUser);
    }

    const selectUser = (user) => {
      selectedUser.value = user;
      store.commit("setSelectedUser", user);
      localStorage.setItem("selectedUser", JSON.stringify(user));

      router.push("/todos");
    };
    onMounted(async () => {
      try {
          const test = await axios.get('https://jsonplaceholder.typicode.com/albums')
          console.log('test', test)
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        userList.value = response.data;
      } catch (error) {
        console.error("API isteği sırasında hata oluştu:", error);
      }
     
    });

    return {
      selectedUser,
      selectUser,
      userList,
    };
  },
};
</script>
<style>
.user-list > div:last-child {
  margin-bottom: 70px; 
}
</style>
