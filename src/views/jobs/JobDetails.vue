<template>
  <h1 class="text-center font-bold text-gray-500 text-3xl">Job Details</h1>
  <p class="text-center">The route parameter is {{ id }}</p>
</template>

<script>
export default {
  name: "JobDetails",
  props: ["id"],
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>

<style></style>
