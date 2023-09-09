<template>
  <div>
    <h2>All User</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="user in users" :key="user.id" class="p-4">
        <div class="flex bg-white border rounded shadow p-4">
          <div class="flex flex-col gap-4 flex-start">
            <div class="flex flex-start gap-8">
                <div class="h-24 w-24"> <!-- Sabit boyut ekledik -->
                <img src="../asset/icons/userProfile.svg" class="h-full w-full"/> <!-- Ekran boyutu değiştikçe sabit boyut korunur -->
              </div>
              <div class="flex flex-col justify-center">
                <p class="text-lg text-black font-medium">{{ user.name }}</p>
                <p class="text-test font-light text-sm">{{ user.email }}</p>
                <p class="text-test font-light text-sm">{{ user.phone }}</p>
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <div class="flex gap-8">
                <img src="../asset/icons/location.svg" />
                <p class="mt-2 text-[#313E50] text-sm font-medium">Location</p>
              </div>
              <div class="flex flex-col">
                <span class="text-[#5C6672] text-sm">{{ user.address.street }},{{ user.address.suite }}</span>
                <span class="text-[#5C6672] text-sm">{{ user.address.city }},{{ user.address.zipcode }}</span>
              </div>
            </div>
            <div class="">
              <div class="flex gap-8">
                <img src="../asset/icons/company.svg" />
                <p class="mt-2 text-[#313E50] text-sm">Company</p>
              </div>
              <span class="text-[#5C6672] text-sm">{{ user.company.name }}</span>
            </div>
            <div class="">
              <div class="flex gap-8">
                <img src="../asset/icons/website.svg" />
                <p class="mt-2 text-[#313E50] text-sm">Website</p>
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
export default {
  name: "UserList",
  props: {
    users: Array,
  },
};
</script>

<style scoped>
/* UserList için özel stil tanımlamaları burada yapabilirsiniz. */
</style>
