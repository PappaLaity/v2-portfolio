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
  <div>
    <div class="container mx-auto">
      <Jobs/>
    </div>
    <div class="container mx-auto">
      <Etudes/>
    </div>
  </div>
</template>

<style scoped>

</style>