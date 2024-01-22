<script>
export default {
  name: "Post",
  props: ["post"],
}
</script>

<template>
  <div
      class="bg-gray-50 dark:bg-ternary-dark hover:bg-blue-200 dark:hover:bg-gray-600 hover:cursor-pointer rounded-lg pb-4">
    <div class="text-ternary-dark dark:text-ternary-light">
      <div class="mt-6 px-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-start pt-4">
            <div>
              <a :href="post.link_company" target="_blank"
              ><img
                  :src="post.logo_company"
                  class="w-12 rounded-full"
                  alt="Logo"
              />
              </a>
            </div>
            <div class="text-start pt-2 mx-4">
              <div class="text-2xl">{{ post.title }}</div>
              <div class="text-sm italic">
                {{ post.lieu }}
              </div>
            </div>
          </div>
          <div class="text-start pl-16 pt-4 italic">
            {{ post.periode }}
          </div>
        </div>
        <div class="mb-4 pl-16 text-start">

          <!--  Description-->
          <p>
            {{ post.description }}
          </p>
          <!--  Liste des Taches-->
          <ul class=" mt-3">
            <li v-for="rol in post.role" :key="rol.id"
            >
              {{ rol.libelle }}
            </li>
          </ul>
          <!--   Outils Utilises (ships)   -->
          <div>
            <p class="py-2 space-x-1 space-y-1">
              <span
                  v-for="tips in post.skills" :key="tips.id"
                  class="inline-block px-2 py-1 rounded-lg bg-gray-300 dark:bg-gray-800"
              >{{ tips.tip }}
              </span>
            </p>
          </div>
        </div>

      </div>

    </div>
  </div>

</template>

<style scoped>

</style>
