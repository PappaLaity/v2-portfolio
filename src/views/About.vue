<script>
import AboutMe from '@/components/about/AboutMe';
import AboutCounter from '@/components/about/AboutCounter';
import AboutServices from '@/components/about/AboutServices.vue';
import feather from 'feather-icons';

export default {
  name: 'About',
  components: {
    AboutMe,
    AboutCounter,
    AboutServices,
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
      <AboutServices/>
    </div>
  </div>
</template>

<style scoped></style>
