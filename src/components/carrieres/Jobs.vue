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
  <div class="mt-8 ml-10 text-start text-2xl flex justify-start items-center">
    <div class="dark:bg-ternary-dark bg-ternary-light rounded-full px-4 py-4">
      <!--    Icon of Work -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-8 w-8">
        <path fill="#FFD43B"
              d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"/>
      </svg>
    </div>
    <!--    Title Experiences-->
    <span class="ml-3 text-ternary-dark dark:text-ternary-light ">
           Experiences
     </span>
  </div>
  <div class="px-6 md:px-20">
    <Post v-for="post in posts" :key="post.id" :post="post"></Post>
  </div>
</template>

<style scoped>

</style>
