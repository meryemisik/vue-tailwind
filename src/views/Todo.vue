<template>
    <div class="text-xl max-h-screen p-10 ">
    <div class="flex font-semibold gap-6 text-center items-center">
      <img
        src="../asset/icons/goToHome.svg"
        class="cursor-pointer"
        @click="goHome()"
      />
      <p class="font-poppins">Go Home</p>
    </div>
      <div class="pt-[52px] max-h-screen overflow-y-auto thin-scrollbar">
        <div v-for="(item, index) in itemList" :key="index" class="h-12 relative block">
        <div
          class="left-[48px] top-[14px] absolute text-[#485B69] text-sm font-normal leading-tight font-roboto not-italic"
        >
          {{ item.text }}
        </div>
        <div
          class="w-12 h-12 left-0 top-0 absolute justify-center items-center inline-flex"
        >
          <div
            class="w-12 h-12 p-[11px] rounded-full justify-center items-center flex"
          >
            <input
              type="checkbox"
              class="w-6 h-6 relative accent-violet-900"
              :class="isActive === true ? 'bg-red' : 'bg-white'"
              @change="changeCheck($event)"
            />
          </div>
        </div>
      </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import { useStore } from "vuex";
  export default {
    name: "TodosList",
    props: {
      users: Array,
    },
    setup() {
      const router = useRouter();
      const store = useStore();
      const isActive = ref(false);
  
      const itemList = ref([
        { text: " Curabitur tempor quis eros tempus lacinia." },
        { text: " Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque." },
        { text: " Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut. " },
        { text: " Curabitur tempor quis eros tempus lacinia. Nam bibendum" },
        { text: " Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam." },
        { text: " Curabitur tempor quis eros tempus lacinia. Nama convallis. Sed ut." },
        { text: " Curabitur tempor quis eros tempus lacinia. Nam bibend Sed ut. " },
        { text: " Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque Sed ut. " },
        { text: " Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque Sed ut. " },
        { text: " Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque Sed ut. " },
        { text: " Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque Sed ut. " },
        { text: " Curabitur tempor quis eros tempus lacinia. Nam bibendum " },
        { text: " Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque Sed ut." },
        { text: "  Curabitur tempor quis eros tempus lacinia. Sed ut ." },
        { text: " Curabitur tempor quis eros tempus lacinia. Nam bibendum Sed ut " },
        { text: "  Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque Sed ut " },
        { text: "  Curabitur tempor quis eros tempus lacinia. Sed ut ." },
        { text: " Curabitur tempor quis eros tempus lacinia. Nam bibendum Sed ut " },
        { text: "  Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque Sed ut " }

      ]);
  
      router.beforeEach((to, from, next) => {
        if (to.path === "/") {
          store.commit("setSelectedUser", null);
          localStorage.clear();
        }
        next();
      });
  
      const goHome = () => {
        store.commit("setSelectedUser", null);
        localStorage.clear();
        router.push("/");
      };
  
      const changeCheck = (e) => {
        isActive.value = e.target.checked;
      };
  
      return {
        goHome,
        changeCheck,
        isActive,
        itemList,
      };
    },
  };
  </script>
  