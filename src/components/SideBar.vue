<template>
  <div class="w-2/12 bg-[#F5F5F5] rounded shadow-lg border-r border-zinc-300 pt-[32px]">
    <ul class="text-sm w-full">
      <li>
        <div
          v-if="!selectedUser"
          class="w-full bg-white justify-start items-center gap-8 inline-flex"
        >
          <div
            class="w-1.5 h-10 rounded-tr-md rounded-br-md bg-violet-900"
          ></div>
          <div class="justify-start items-center gap-3 flex">
            <div class="w-6 h-6 relative">
              <img src="../asset/icons/users.svg" />
            </div>

            <div
              class="w-[90.43px] text-violet-900 text-lg font-normal hidden  md:flex font-poppins"
            >
              Users
            </div>
          </div>
        </div>
        <div v-else class="px-3 h-12">
          <div
            class="h-[68px] absolute flex-col justify-start items-start inline-flex"
          >
            <div class="h-[2] w-[2]">
              <img
                src="../asset/image/profile.png"
                class="h-12 w-12 rounded-full"
              />
            </div>
            <div
              class="w-[99px] h-[43px] left-[60px] top-[1px] absolute hidden  md:flex"
            >
              <div
                class="left-0 top-0 absolute text-slate-800 text-lg font-medium"
              >
                <span class="block truncate break-words font-poppins font-medium">{{ selectedUser.name }}</span>
              </div>
              <div
                class="left-0 top-[29px] absolute justify-start items-center gap-[3px] inline-flex"
              >
                <div class="text-gray-500 text-sm font-light underline break-words font-josefin">
                  {{ selectedUser.email }}
                </div>
              </div>
            </div>
          </div>
          <div
            class="font-poppins left-0 top-[124px] absolute flex-col justify-start items-start gap-6 inline-flex w-2/12"
          >
            <div
              class="w-full justify-start items-center gap-8 inline-flex cursor-pointer"
              :class="{ active: selectedTab === 'todos' }"
              @click="selectTab('todos')"
            >
              <div
                class="w-1.5 h-10 rounded-tr-md rounded-br-md"
                :class="selectedTab === 'todos' ? 'bg-violet-900' : ''"
              ></div>
              <div class="justify-start items-center gap-3 flex">
                <div class="w-6 h-6 relative">
                  <img src="../asset/icons/todo.svg" />
                </div>
                <div
                  class="text-black text-lg  hidden  md:flex "
                  :class="
                    selectedTab === 'todos'
                      ? 'text-violet-900'
                      : 'text-opacity-40'
                  "
                >
                  Todos
                </div>
              </div>
            </div>
            <div
              class="w-full justify-start items-center gap-8 inline-flex cursor-pointer"
              :class="{ active: selectedTab === 'posts' }"
              @click="selectTab('posts')"
            >
              <div
                class="w-1.5 h-10 rounded-tr-md rounded-br-md"
                :class="selectedTab === 'posts' ? 'bg-violet-900' : ''"
              ></div>
              <div class="justify-start items-center gap-3 flex">
                <div class="w-6 h-6 relative">
                  <img src="../asset/icons/posts.svg" />
                </div>
                <div
                  class="text-lg text-[#485B69] font-normal leading-tight  not-italic hidden  md:flex"
                  :class="
                    selectedTab === 'posts'
                      ? 'text-violet-900'
                      : 'text-black  text-opacity-40'
                  "
                >
                  Posts
                </div>
              </div>
            </div>
            <div
              class="w-full justify-start items-center gap-8 inline-flex cursor-pointer"
              :class="{ active: selectedTab === 'albums' }"
              @click="selectTab('albums')"
            >
              <div
                class="w-1.5 h-10 rounded-tr-md rounded-br-md"
                :class="selectedTab === 'albums' ? 'bg-violet-900' : ''"
              ></div>
              <div class="justify-start items-center gap-3 flex">
                <div class="w-6 h-6 relative">
                  <img src="../asset/icons/albums.svg" />
                </div>
                <div
                  class=" text-lg font-normal hidden  md:flex"
                  :class="
                    selectedTab === 'albums'
                      ? 'text-violet-900'
                      : 'text-black  text-opacity-40'
                  "
                >
                  Album
                </div>
              </div>
            </div>
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

    const selectedTab = computed(() => store.state.selectedTab);
    const selectedUser = computed(() => store.state.selectedUser);

    const selectTab = (tabName) => {
      store.commit("setSelectedTab", tabName);
      router.push("/" + tabName);
    };

    const selectUser = (user) => {
      store.commit("setSelectedUser", user);
      router.push("/todo");
    };

    return {
      selectedTab,
      selectedUser,
      selectTab,
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
