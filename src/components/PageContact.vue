<template>
  <div class="wrapContent">
    <div class="flexy">

      <div class="two-block">
        <h1>Contact Us</h1>
        <p>{{ contactBlurb }}</p>
        <h4>{{ contactEmail }}<br>{{ phoneNumber }}</h4>
        <p>{{ servingMessage }}</p>
      </div>

      <div class="two-block">
        <form class="contact-form" @submit.prevent="onSubmit">


          <h4><label for="fullName">Name:</label></h4>
          <input id="firstName" v-model="firstName" placeholder="First Name"><br><br>
          <input id="lastName" v-model="lastName" placeholder="Last Name">

          <h4><label for="emailAddress">Email Address:</label></h4>
          <input id="emailAddress" v-model="emailAddress" placeholder="Email Address">

          <h4><label for="contactMessage">Message:</label></h4>
          <textarea id="contactMessage" v-model="contactMessage" placeholder="This form is not finished and does nothing when you hit submit."></textarea><br>

          <input class="button" type="submit" value="Submit">
        </form>
        </div>
    </div>
  </div>
</template>

<script>
export default {
name: "PageContact",
  data () {
  return {
    contactForm: {
      firstName: '',
      lastName: '',
      emailAddress: '',
      contactMessage: ''
    },
    contactBlurb: 'Let’s chat about your dog! Contact us to learn more about our training and scheduling.',
    contactEmail: 'info@pleasedbypaws.com',
    phoneNumber: '(406) 212-1243',
    servingMessage: 'Serving the Greater Seattle Area'
  }
  },
  methods: {
  onSubmit() {
    this.$emit('contact-submitted', this.contactForm)
  }
  }
}
</script>

<style scoped>
.flexy {
  display: flex;
  justify-content: space-around;
}

.two-block {
  width: 60vw;
  margin-top: 5rem;
}

.wrapContent {
  position: relative;
  margin-left: 400px;
  margin-right: 400px;
}

h4 {
  color: #79222a;
  padding: 1rem 0;
}

form {
  margin-left: 5rem;
}

label {
  display: block;
}

input {
  padding: 0.4rem;
  border-style: solid;
  width: 100%;
  border-width: thin;
  border-color: #f78278;
  border-radius: 5px;
}

textarea {
  padding: 0.4rem;
  width: 100%;
  height: 10rem;
  border-style: solid;
  border-width: thin;
  border-color: #f78278;
  border-radius: 5px;
}
.button {
  background-color: #f78278;
  color: #fff;
  border-radius: 5px;
  margin-bottom: 10rem;
}
</style>