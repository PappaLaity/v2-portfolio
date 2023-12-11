<script>
import feather from 'feather-icons';
import ContactForm from '@/components/contact/ContactForm.vue';
import ContactDetails from '@/components/contact/ContactDetails.vue';

export default {
  components: {
    ContactForm,
    ContactDetails,
  },
  data: () => {
    return {
      contacts: [
        {
          id: 1,
          name: 'Keur Massar, Dakar, Senegal',
          icon: 'map-pin',
        },
        {
          id: 2,
          name: 'pappalaity@gmail.com',
          icon: 'mail',
        },
        {
          id: 3,
          name: '00 221 77 491 97 31',
          icon: 'phone',
        },
      ],
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
  methods: {},
};
</script>

<template>
  <div
      class="container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10"
  >
    <!-- Contact form -->
    <ContactForm/>

    <!-- Contact details -->
    <ContactDetails :contacts="contacts"/>
  </div>
</template>
