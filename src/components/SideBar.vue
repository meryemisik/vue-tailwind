<template>
  <div class="w-2/12 bg-[#F5F5F5] rounded shadow-lg border-r border-zinc-300 pt-[32px]">
    <ul class="text-sm w-full">
      <li>
        <div v-if="!selectedUser" class="w-full bg-white justify-start items-center gap-8 inline-flex">
          <div class="w-1.5 h-10 rounded-tr-md rounded-br-md bg-violet-900"></div>
          <div class="justify-start items-center gap-3 flex">
            <div class="w-6 h-6 relative">
              <img src="../asset/icons/users.svg" />
            </div>

            <div class="w-[90.43px] text-violet-900 text-lg font-normal hidden  md:flex font-poppins">
              Users
            </div>
          </div>
        </div>
        <div v-else class="px-3 h-12">
          <div class="h-[68px] absolute flex-col justify-start items-start inline-flex">
            <div class="h-[2] w-[2]">
              <img src="../asset/image/profile.png" class="h-12 w-12 rounded-full" />
            </div>
            <div class="w-[99px] h-[43px] left-[60px] top-[1px] absolute hidden  md:flex">
              <div class="left-0 top-0 absolute text-slate-800 text-lg font-medium">
                <span class="block truncate md:w-16 lg:w-32 break-words font-poppins font-medium">{{ selectedUser.name
                }}</span>
              </div>
              <div class="left-0 top-[29px] absolute justify-start items-center gap-[3px] inline-flex">
                <div
                  class="text-gray-500 text-sm font-light underline break-words font-josefin truncate md:w-16 lg:w-32 ">
                  {{ selectedUser.email }}
                </div>
              </div>
            </div>
            <div class="w-full h-[0px] border border-zinc-300 mt-[20px]"></div>
          </div>
          <div
            class="font-poppins left-0 top-[124px] absolute flex-col justify-start items-start gap-6 inline-flex w-2/12">
            <router-link to="/todos" class="w-full justify-start items-center gap-8 inline-flex cursor-pointer " active-class="active-tab">
              <div class="w-1.5 h-10 rounded-tr-md rounded-br-md active-bg"></div>
              <div class="justify-start items-center gap-3 flex">
                <div class="w-6 h-6 relative">
                  <img src="../asset/icons/todo.svg" />
                </div>
                <div class="text-lg font-normal leading-tight not-italic hidden md:flex active-title text-[#485B69] text-opacity-40"
                 >
                  Todos
                </div>
              </div>
            </router-link>
            <router-link to="/posts" class="w-full justify-start items-center gap-8 inline-flex cursor-pointer " active-class="active-tab">
              <div class="w-1.5 h-10 rounded-tr-md rounded-br-md active-bg"></div>
              <div class="justify-start items-center gap-3 flex">
                <div class="w-6 h-6 relative">
                  <img src="../asset/icons/posts.svg" />
                </div>
                <div class="text-lg font-normal leading-tight not-italic hidden md:flex active-title text-[#485B69] text-opacity-40"
                 >
                  Posts
                </div>
              </div>
            </router-link>


            <router-link to="/albums" class="w-full justify-start items-center gap-8 inline-flex cursor-pointer " active-class="active-tab">
              <div class="w-1.5 h-10 rounded-tr-md rounded-br-md active-bg"></div>
              <div class="justify-start items-center gap-3 flex">
                <div class="w-6 h-6 relative">
                  <img src="../asset/icons/albums.svg" />
                </div>
                <div class="text-lg font-normal leading-tight not-italic hidden md:flex active-title text-[#485B69] text-opacity-40"
                 >
                  Albums
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  name: "SideBar",
  setup() {
    const router = useRouter();
    const store = useStore();

    const selectedUser = computed(() => store.state.selectedUser);


    const selectUser = (user) => {
      store.commit("setSelectedUser", user);
      router.push("/todo");
    };

    return {
      selectedUser,
      selectUser,
    };
  },
};
</script>

<style scoped>
.active {
  background-color: white;
}
</style>
