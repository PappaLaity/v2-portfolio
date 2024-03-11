<script>
import AboutMe from '@/components/about/AboutMe';
import AboutCounter from '@/components/about/AboutCounter';
import feather from 'feather-icons';
import Skills from "@/components/about/Skills.vue";

export default {
  name: 'About',
  components: {
    Skills,
    AboutMe,
    AboutCounter,
    // AboutServices,
  },
  data: () => {
    return {};
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
  methods: {},
};
</script>

<template>
  <div>
    <!-- About me -->
    <div class="container mx-auto">
      <AboutMe/>
    </div>

    <!-- About counter -->
    <AboutCounter/>

    <!-- About counter -->
    <div class="container mx-auto">
      <!--      <AboutServices/>-->
      <skills></skills>
    </div>
  </div>
</template>

<style scoped></style>
