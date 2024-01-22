<script>
import Jobs from "@/components/carrieres/Jobs.vue";
// import Etudes from "@/components/carrieres/Etudes.vue";

export default {
  name: 'Carrieres',
  components: {
    // Etudes,
    Jobs
  }
}
</script>

<template>
  <!--  <div class="md:flex md:items-center md:justify-between">-->
  <div>
    <div class="container mx-auto">
      <Jobs/>
    </div>
    <!--    <div class="sm:max-w-sm md:max-w-xs container mx-auto">-->
    <div class="container mx-auto">
      <!--            <Etudes/>-->
    </div>
  </div>
</template>

<style scoped>

</style>