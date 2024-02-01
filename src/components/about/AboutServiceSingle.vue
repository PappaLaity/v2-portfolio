<script>
export default {
  props: ['client'],
};
</script>

<template>
  <div class="w-42 sm:w-64 p-2 bg-ternary-light dark:bg-ternary-dark rounded-lg">
    <!--    <a :href="client.url">-->
    <img
        :src="client.img"
        :alt="client.title"
        class="py-4 px-10 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-4 cursor-pointer dark:bg-secondary-light"
    />
    <div class="text-center">
      <span class="text-ternary-dark dark:text-ternary-light text-center">
      {{ client.description }}
    </span>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
