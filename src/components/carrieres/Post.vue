<script>
export default {
  name: "Post",
  props: ["post"]
}
</script>

<template>

    <div class="relative w-full">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
           class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500">
        <path fill-rule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clip-rule="evenodd"/>
      </svg>
      <div class="ml-6 mt-6">
        <h4 class="font-bold text-blue-500 text-start">{{ post.title }}</h4>
        <p class="mt-2 max-w-screen-sm text-sm text-gray-500">{{ post.description }}</p>
        <span class="mt-1 block text-sm font-semibold text-blue-500">{{ post.periode }}</span>
      </div>
    </div>

  <!--    <div class="relative max-w-sm">-->
<!--  <div class="relative max-full text-ternary-dark dark:text-ternary-light">-->
<!--    <div class="mt-6 border-l-4 border-dotted px-4">-->
<!--      <div class="text-start mb-2 pt-2">-->
<!--        &lt;!&ndash;        Ajouter une hauteur un padding y une couleur &ndash;&gt;-->
<!--        Poste du profil-->
<!--      </div>-->
<!--      <div class="flex items-center justify-between py-2 px-3">-->
<!--        <div>-->
<!--          Entreprise & lien(site Institutionnel)-->
<!--        </div>-->
<!--        <div>-->
<!--          Periode-->
<!--        </div>-->
<!--      </div>-->
<!--      &lt;!&ndash;  Description&ndash;&gt;-->
<!--      <p class="text-start">-->
<!--        Lorem ipsum dolor sit amet consectetur, adipisicing elit Cumque quidem-->
<!--        id in consequuntur provident delectus dicta moles tiae velit perferendis ab necessitatibus cum illum quod-->
<!--        voluptatibus architecto similique-->
<!--      </p>-->
<!--      &lt;!&ndash;  Liste des Taches&ndash;&gt;-->
<!--      <ul class="text-start px-20 mt-3">-->
<!--        <li>qwerty</li>-->
<!--        <li>azerty</li>-->
<!--      </ul>-->
<!--      &lt;!&ndash;   Outils Utilises (ships)   &ndash;&gt;-->
<!--    </div>-->
<!--    <div class="absolute top-0 -ml-1.5 h-4 w-4 rounded-full bg-gray-600 dark:bg-amber-50"></div>-->
<!--  </div>-->

</template>

<style scoped>

</style>