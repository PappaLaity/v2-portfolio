<script>
export default {
  setup() {
    return {
      bios: [
        {
          id: 1,
          bio:
              "Hi Guys, I'm Papa laity NDIAYE (Pappa Laity). I'm a software engineer. " +
              "I am passionate about Information and Communication Technologies.  " +
              "I am constantly looking for new knowledge in various fields of IT. " +
              "I try to contribute in one way or another to the development of my community that I love to serve. " +
              "I love basketball, swimming, expeditions and above all being in communion with nature",

        },
        {
          id: 2,
          bio:
              "Graduated in Software Engineering and Data Management. I have acquired experience over time by occupying various positions. " +
              "Through various past companies, I gained experience in Front End and Back End Development mainly using language such as PHP, Javascript, JAVA. " +
              "Likewise with researchers and my own curiosity I acquired expertise in the field of research, particularly on Artificial Intelligence (AI) and the Internet of Things (IoT)." +
              "In addition to this, I acquire over time more leadership in project management, teamwork and problem solving.",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <!-- About profile image -->
    <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
      <img
          src="@/assets/images/laity-3.png"
          class="rounded-xl w-96"
          alt=""
      />
    </div>

    <!-- About details -->
    <div class="w-full sm:w-3/4 text-left">
      <p
          v-for="bio in bios"
          :key="bio.id"
          class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
      >
        {{ bio.bio }}
      </p>
    </div>
  </div>
</template>
