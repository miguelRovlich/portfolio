<template>
<div>
  <h1>Estemos en contacto</h1>
  <form>
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="10"
      label="Name"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
     <v-textarea
          v-model="message"
          name="input-7-1"
          label="Message"
          required
          value="Default style"
          hint="Hint text"
        ></v-textarea>

    <v-btn
      class="mr-4"
      @click="submit"
      color="green"
    >
      Send message
    </v-btn>
    <v-btn @click="clear">
      Clear
    </v-btn>
    <v-alert 
    v-if="isSended"
    dense
    dismissible
    elevation="7"
    outlined
    prominent
    text
    :type="type"
    >{{submitStatus}}</v-alert>
  </form>
</div>
</template>
<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],
    validations: {
      name: { required, maxLength: maxLength(20) },
      email: { required, email },
      message: { required },
    },

    data: () => ({
      name: '',
      email: '',
      message: '',
      submitStatus: '',
      isSend: false,
      type: 'success',
    }),

    computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('El nombre no puede tener mas de 20 caracteres')
        !this.$v.name.required && errors.push('El nombre es requerido.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('E-mail debe ser válido.')
        !this.$v.email.required && errors.push('E-mail es requerido')
        return errors
      },
      messageErrors () {
        const errors = []
        if (!this.$v.message.$dirty) return errors
        !this.$v.message.required && errors.push('El mensaje es requerido.')
        return errors
      },
    },

    methods: {
      submit () {
        this.$v.$touch()
        fetch('https://formspree.io/f/mrgjlyyn', {
        method: 'POST',
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          message: this.message,
        }),
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          this.submitStatus = 'Enviado con exito'
          this.type = 'success'
          this.isSend = true
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              this.submitStatus = data["errors"].map(error => error["message"]).join(", ")
              this.type = 'error'
              this.isSend = true
            } else {
              this.submitStatus = "Oops! hubo un problema enviando tu formulario"
              this.type = 'error'
              this.isSend = true
            }
          })
        }
      }).catch(error => {
        this.submitStatus = "Oops! hubo un problema enviando tu formulario"
        this.type = 'error'

        this.isSend = true

        console.error(error)
      });

      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.message = ''
        this.isSend = false
      },
    },
  }
</script>
<style lang="">
    
</style>