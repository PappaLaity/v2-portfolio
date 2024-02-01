<script>
export default {
  name: "Etude",
  props: ["etude"]
}
</script>

<template>
  <div class="dark:bg-ternary-dark bg-gray-50 border-1 px-4 py-4 rounded-lg h-64 w-48 hover:bg-gray-400
  dark:hover:bg-gray-600">
    <!-- Logo Structures de formations-->
    <div class="flex items-center justify-center">
      <a :href="etude.link_company" target="_blank">
        <img :src="etude.logo_company" alt="" srcset="" class="h-8 w-8 sm:h-16 sm:w-16">
      </a>
    </div>
    <span class="text-sm italic dark:text-ternary-light text-ternary-dark">
        {{ etude.company_name }}
      </span>
    <div class="mt-2 p-2 text-center dark:text-ternary-light text-ternary-dark">
      <p>{{ etude.diploma }} {{ etude.title }}</p>
    </div>
    <div class="p-1 italic text-ternary-dark dark:text-ternary-light">
      <span>{{ etude.periode }}</span>
    </div>
  </div>
</template>

<style scoped>

</style>