<template>
  <nav class="flex justify-center items-center space-x-4 my-5">
    <router-link to="/" class="border border-slate-50 px-4 py-3 shadow-md hover:bg-slate-400 active:bg-red-700">Home</router-link>
    <router-link :to="{ name: 'About' }" class="border border-slate-50 px-4 py-3 shadow-md hover:bg-slate-400 active:bg-red-700">About</router-link>
    <router-link :to="{ name: 'Jobs' }" class="border border-slate-50 px-4 py-3 shadow-md hover:bg-slate-400 active:bg-red-700">Jobs</router-link>
  </nav>

  <div class="mt-4 text-center">
    <button class="border rounded-md hover:bg-gray-200 px-4 py-3" @click="prev">Previous page</button>
    <button class="border rounded-md hover:bg-gray-200 px-4 py-3" @click="next">Next Page</button>
    <button class="border rounded-md hover:bg-gray-200 px-4 py-3" @click="home">Go Homepage</button>
  </div>

  <div class="max-w-7xl mx-auto">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    prev() {
      this.$router.go(-1);
    },
    next() {
      this.$router.go(1);
    },
    home() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style></style>
