<script>
import Jobs from "@/components/carrieres/Jobs.vue";
import Etudes from "@/components/carrieres/Etudes.vue";

export default {
  name: 'Carrieres',
  components: {
    Etudes,
    Jobs
  }
}
</script>

<template>
  <div class=" container mx-auto">

    <div class="grid sm:grid sm:grid-cols-2 sm:gap-2">
      <Jobs/>
      <Etudes/>
    </div>
    <!-- Banner -->
    <!-- Section Entreprise - Project et Skills   -->
  </div>
</template>

<style scoped>

</style>