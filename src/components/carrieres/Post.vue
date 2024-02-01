<script>
export default {
  name: "Post",
  props: ["post"],
}
</script>

<template>
  <div
      class="bg-gray-50 dark:bg-ternary-dark hover:bg-gray-400 dark:hover:bg-gray-600 hover:cursor-pointer rounded-lg pb-4">
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
              <div class="text-xl">{{ post.title }} at <a :href="post.link_company"
                                                          target="_blank" class="text-lg">{{ post.company_name }}</a>
              </div>
              <div class="text-sm italic">
                {{ post.lieu }}
              </div>
            </div>
          </div>
          <div class="text-start pl-16 pt-4 italic">
            {{ post.periode }}
          </div>
        </div>
        <div class="mb-1 pl-16 text-start">

          <!--  Description-->
          <p>
            {{ post.description }}
          </p>
          <!--  Liste des Taches-->
          <ul class="list-disc mt-3">
            <li v-for="role in post.role" :key="role.id"
            >
              {{ role.libelle }}
            </li>
          </ul>
        </div>
        <!--   Outils Utilises (ships)   -->
        <div class="mb-3 md:pl-16 text-start">
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

</template>

<style scoped>

</style>
