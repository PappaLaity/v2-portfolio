<script>
import Button from '../reusable/Button.vue';
import FormInput from '../reusable/FormInput.vue';
import FormTextarea from '../reusable/FormTextarea.vue';
import emailjs from 'emailjs-com';
import {ref} from 'vue';

export default {
  components: {Button, FormInput, FormTextarea},
  setup() {
    const form = ref(null);
    const inputFieldReset = ref(null);
    const public_key = "dxtkSq2UcXEK16P4i";
    const service_id = "service_8e69o1s";
    const template_id = "template_7d3n7kt";

    emailjs.init(public_key);

    // Integrer un swal sur le formulaire
    const sendMail = () => {
      emailjs.sendForm(service_id, template_id, form.value)
          .then(() => {
            alert('Message sent!')
            inputFieldReset.value = " ";
          }, (error) => {
            alert('Message not sent', error);
          });
    }
    return {
      form,
      inputFieldReset,
      sendMail
    }
  }
}

</script>

<template>
  <div class="w-full md:w-1/2">
    <div
        class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
    >
      <p
          class="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8"
      >
        Contact Form
      </p>
      <form ref="form" @submit.prevent="sendMail" class="form font-general-regular space-y-7">
        <FormInput label="Full Name" inputIdentifier="from_name" :val="inputFieldReset"/>
        <FormInput
            label="Email"
            inputIdentifier="reply_to"
            inputType="email"
            :val="inputFieldReset"
        />
        <FormInput label="Subject" inputIdentifier="subject" :val="inputFieldReset"/>
        <FormTextarea label="Message" textareaIdentifier="message" :val="inputFieldReset"/>

        <div>
          <Button
              title="Send Message"
              class="px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
              type="submit"
              aria-label="Send Message"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
