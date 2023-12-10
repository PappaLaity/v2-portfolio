<script>
export default {
  props: ['client'],
};
</script>

<template>
  <div>
    <!--    <a :href="client.url">-->
    <img
        :src="client.img"
        :alt="client.title"
        class="w-64 py-5 px-10 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-4 cursor-pointer dark:bg-secondary-light"
    />
    <div class="w-64">
      <span class="text-ternary-dark dark:text-ternary-light pr-16">
      {{ client.description }}
    </span>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
