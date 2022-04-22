<template>
  <h1 class="text-center text-3xl font-bold text-gray-500">Jobs</h1>
  <div v-for="job in data" :key="job.id" class="w-1/4 h-20 shadow-lg rounded-lg mx-auto">
    <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
      <h2>{{ job.title }}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "JobsView",
  data() {
    return {
      data: [
        { title: "Kouagou UI Designer", id: 1, details: "lorem" },
        { title: "Kouagou Web Developper", id: 2, details: "lorem" },
        { title: "Kouagou Vue Developper", id: 3, details: "lorem" },
      ],
    };
  },
};
</script>

<style></style>
