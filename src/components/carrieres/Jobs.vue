<script>
import Post from "@/components/carrieres/Post.vue";
import posts from "@/data/postes";

export default {
  name: "Jobs",
  components: {
    Post
  },
  data: () => {
    return {
      posts,
    }

  }
}
</script>

<template>
  <div class="px-6 md:px-20">
    <Post v-for="post in posts" :key="post.id" :post="post"></Post>
  </div>
</template>

<style scoped>

</style>
