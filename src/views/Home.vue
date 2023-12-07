<script>
import AppBanner from '../components/shared/AppBanner';
// import ProjectsGrid from '../components/projects/ProjectsGrid.vue';

export default {
  name: 'Home',
  components: {
    AppBanner,
    // ProjectsGrid,
    // Button,
  },
};
</script>

<template>
  <div class="container mx-auto">
    <!-- Banner -->
    <AppBanner class="mb-5 sm:mb-8"/>
  </div>
</template>

<style scoped></style>
