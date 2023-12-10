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
  <div class="flex h-screen items-center justify-center px-6 md:px-20">
    <div class="space-y-6 border-l-2 border-dashed border-gray-600">
      <Post v-for="post in posts" :key="post.id" :post="post"></Post>
    </div>
  </div>
</template>

<style scoped>

</style>
