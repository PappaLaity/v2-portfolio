<script>
import AboutServiceSingle from "@/components/about/AboutServiceSingle.vue";

export default {
  components: {
    AboutServiceSingle,
  },
  data: () => {
    // Check image for 225X225
    return {
      // Kind of Realisation that I Can do instead of Client
      clientsHeading: 'Services',
      clients: [
        {
          id: 1,
          title: 'Web',
          img: require('@/assets/images/brands/web.png'),
          description: `Gestion et Mise en place de plateforme web. De l'Analyse des besoins
              à la livraison, Maintenance & Suivi. \n
               Front End: (Html, CSS, Js - Vue 3)
               Back End: (PHP, Laravel - JEE)`
        },
        {
          id: 2,
          title: 'Mobile',
          img: require('@/assets/images/brands/mobile.png'),
          description: "Conception et Integration Application Mobile." +
              "Natif: JAVA, Kotlin - Cross Platform: Flutter (DART)"
        },
        {
          id: 3,
          title: 'Intelligence Artificielle',
          img: require('@/assets/images/brands/ia.png'),
          description: "Mise en place de Structure De Donnees, " +
              "Traitement de Donnees et Extraction de Connaissances (Python)"

        },
        {
          id: 4,
          title: 'Internet des Objets',
          img: require('@/assets/images/brands/iot.png'),
          description: "Decouvertes des Technologies IoT. Experimentation de Capteurs " +
              "et Deploiement sur le Reseau LoRa"

        }
      ],
    };
  },
};
</script>

<template>
  <div class="mt-10 sm:mt-20">
    <p
        class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
    >
      {{ clientsHeading }}
    </p>
    <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 sm:mt-14 gap-2">
      <AboutServiceSingle
          v-for="client in clients"
          :key="client.id"
          :client="client"
      />
    </div>
  </div>
</template>
