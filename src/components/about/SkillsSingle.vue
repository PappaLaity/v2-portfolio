<script>
export default {
  name: "SkillsSingle",
  props: ['skill'],
}
</script>

<template>

  <li class="flex items-center flex-col">
    <img :src="skill.url" alt=""
         class="rounded-full w-16 h-16 object-cover mb-2">
    <h5 class="font-semibold">{{ skill.libelle }}</h5>
  </li>

</template>

<style scoped>

</style>