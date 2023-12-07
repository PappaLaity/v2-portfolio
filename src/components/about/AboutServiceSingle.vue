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
    <span class="text-white">
      {{ client.description }}
    </span>
    <!--    </a>-->
  </div>
</template>

<style lang="scss" scoped></style>
