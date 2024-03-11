<script>
import AppBanner from '../components/shared/AppBanner';
import AboutServices from "@/components/about/AboutServices.vue";
// import ProjectsGrid from '../components/projects/ProjectsGrid.vue';

export default {
  name: 'Home',
  components: {
    AboutServices,
    AppBanner,
  },
};
</script>

<template>
  <div class="container mx-auto">
    <!-- Banner -->
    <AppBanner class="mb-5 sm:mb-8"/>
  </div>
  <div class="container mx-auto">
    <AboutServices/>
  </div>
</template>

<style scoped></style>
