<template>
  <aside class="w-[260px] max-h-screen">
    <div
      v-if="!selectedUser"
      class="h-full w-[260px] py-8 left-0 top-0 absolute bg-neutral-100 border-r border-zinc-300 flex-col justify-between items-center gap-[763px] inline-flex"
    >
      <div
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
    </div>
    <div
      v-else
      class="h-full w-[260px] py-8 left-0 top-0 absolute bg-neutral-100 border-r border-zinc-300 flex-col justify-between items-center gap-[763px] inline-flex"
    >
      <div
        class="w-[259px] bg-white justify-start items-center gap-8 inline-flex"
      >
        <div class="w-1.5 h-10 bg-violet-900 rounded-tr-md rounded-br-md"></div>
        <div class="justify-start items-center gap-3 flex">
          <div class="w-6 h-6 relative">
            <img src="../asset/icons/todo.svg" />
          </div>

          <div class="w-[90.43px] text-violet-900 text-lg font-normal">
            Todos
          </div>
        </div>
      </div>
    </div>

    <!-- <div >
          <h3>Selected User</h3>
          <p>Name: {{ selectedUser.name }}</p>
          <p>Email: {{ selectedUser.email }}</p>
        </div> -->
  </aside>
</template>

<script>
export default {
  name: "SideBar",
  props: {
    selectedUser: Object, // selectedUser adında bir özellik ekliyoruz
  },
};
</script>
