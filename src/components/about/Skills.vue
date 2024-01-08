<script>

import skills from "@/data/skills";
import SkillsSingle from "@/components/about/SkillsSingle.vue";

export default {
  name: "Skills",
  components: {SkillsSingle},
  data: () => {
    return {
      languages: skills.languages,
      framework: skills.framework,
      database: skills.database,
      tools: skills.tools,
      os: skills.OS
    }
  },
}
</script>

<template>
  <!-- component -->
  <div class="mt-10 sm:mt-20 text-ternary-dark dark:text-ternary-light">
    <div class="px-1 py-4">
      <h3 class="font-bold text-2xl font-sans">Skills</h3>
    </div>
    <div>
      <div class="px-2 py-2 text-start">
        <span class="font-bold text-2xl font-sans">{{ languages.title }}</span>
      </div>
      <ul class="grid grid-cols-3 md:grid-cols-6 gap-2 px-1 pt-2">
        <SkillsSingle v-for="language in languages.list" :key="language.id" :skill="language"/>
      </ul>
    </div>
    <div>
      <div class="px-2 py-2 text-start">
        <span class="font-bold text-2xl font-sans">{{ framework.title }}</span>
      </div>
      <ul class="grid grid-cols-3 md:grid-cols-6 gap-2 px-1 pt-2">
        <SkillsSingle v-for="frame in framework.List" :key="frame.id" :skill="frame"/>
      </ul>
    </div>
    <div>
      <div class="px-2 py-2 text-start">
        <span class="font-bold text-2xl font-sans">{{ database.title }}</span>
      </div>
      <ul class="grid grid-cols-3 md:grid-cols-6 gap-2 px-1 pt-2">
        <SkillsSingle v-for="db in database.List" :key="db.id" :skill="db"/>
      </ul>
    </div>
    <div>
      <div class="px-2 py-2 text-start">
        <span class="font-bold text-2xl font-sans">{{ tools.title }}</span>
      </div>
      <ul class="grid grid-cols-3 md:grid-cols-6 gap-2 px-1 pt-2">
        <SkillsSingle v-for="tool in tools.List" :key="tool.id" :skill="tool"/>

      </ul>
    </div>

    <div>
      <div class="px-2 py-2 text-start">
        <span class="font-bold text-2xl font-sans">{{ os.title }}</span>
      </div>
      <ul class="grid grid-cols-3 md:grid-cols-6 gap-2 px-1 pt-2">
        <SkillsSingle v-for="system in os.List" :key="system.id" :skill="system"/>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>