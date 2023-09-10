<template>
  <aside class="w-[260px] max-h-screen">
    <div
      class="h-full w-[260px] py-8 left-0 top-0 absolute bg-neutral-100 border-r border-zinc-300 flex-col justify-between items-center gap-[763px] inline-flex"
    >
      <div
        v-if="!selectedUser"
        class="w-[259px] bg-white justify-start items-center gap-8 inline-flex"
      >
        <div class="w-1.5 h-10 bg-violet-900 rounded-tr-md rounded-br-md"></div>
        <div class="justify-start items-center gap-3 flex">
          <div class="w-6 h-6 relative">
            <img src="../asset/icons/users.svg" />
          </div>

          <div class="w-[90.43px] text-violet-900 text-lg font-normal">
            Users
          </div>
        </div>
      </div>
      <div class="w-[258px] relative" v-else>
        <div
          class="h-[68px] left-[16px] top-0 absolute flex-col justify-start items-start gap-5 inline-flex"
        >
          <div class="w-[211px] h-12 relative">
            <div class="w-[159px] h-12 left-0 top-0 absolute">
              <div class="h-[2] w-[2]">
                <img
                  src="../asset/image/profile.png"
                  class="h-12 w-12 rounded-full"
                />
              </div>
              <div class="w-[99px] h-[43px] left-[60px] top-[1px] absolute">
                <div
                  class="left-0 top-0 absolute text-slate-800 text-lg font-medium"
                >
                  <span class="block truncate">{{ selectedUser.name }}</span>
                </div>
                <div
                  class="left-0 top-[29px] absolute justify-start items-center gap-[3px] inline-flex"
                >
                  <div class="text-gray-500 text-sm font-light underline">
                    {{ selectedUser.email }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-[228px] h-[0px] border border-zinc-300"></div>
        </div>
        <div
          class="left-0 top-[124px] absolute flex-col justify-start items-start gap-6 inline-flex"
        >
          <div
            class="w-[260px] justify-start items-center gap-8 inline-flex cursor-pointer"
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
                class="w-[90.43px] text-black text-lg font-normal"
                :class="
                  selectedTab === 'todos'
                    ? 'text-violet-900'
                    : 'text-black  text-opacity-40'
                "
              >
                Todos
              </div>
            </div>
          </div>
          <div
            class="w-[260px] justify-start items-center gap-8 inline-flex cursor-pointer"
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
                class="w-[90.43px] text-lg font-normal"
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
            class="w-[260px] justify-start items-center gap-8 inline-flex cursor-pointer"
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
                class="w-[90.43px] text-lg font-normal"
                :class="
                  selectedTab === 'albums'
                    ? 'text-violet-900'
                    : 'text-black  text-opacity-40'
                "
              >
                Albums
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
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
