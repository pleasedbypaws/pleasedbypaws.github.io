<template>
  <div class="wrapContent">

      <h1>{{ homeHeader }} <em>{{ homeYou }}</em></h1>
      <p>{{ homeDesc }}</p>
      <img src="/photos/chomskyhome.jpg">

    <div class="flexy">
      <div class="two-block">
        <h3>{{ homeBlurb1 }}</h3>
      </div>

      <div class="two-block">
        <h4>{{ homeBlurb2 }}</h4>
      </div>
    </div>

    <div class="contact">
      <a href="PageContact.vue">Contact Us</a>
    </div>

  </div>
</template>

<script>
export default {
  name: "PageHeader",
  data() {
    return {
      homeHeader: 'Private dog training curated just for ',
      homeYou: 'you.',
      homeDesc: 'At Pleased by Paws, we go above and beyond generic group classes to provide a unique training experience tailored to your needs. Our private training takes place where you are: your home, your neighborhood, your park. From there, we create a personalized training plan that takes into account how your dog learns best. And we don’t leave it at that! We offer virtual follow-up sessions to assist with any challenges that may present themselves during the training process. ',
      homeBlurb1: 'Positive training helps build the bond between you and your dog, creating trust and the foundation for a harmonious relationship.',
      homeBlurb2: 'We strive to provide high-quality, one on one time focused on addressing the skills you want to teach your pooch; from sitting down to intense behavior modification for reactivity.'
    }
  }
}
</script>

<style scoped>
  .flexy {
    display: flex;
  }

  .two-block {
    width: 50vw;
  }

  .wrapContent {
    position: relative;
    margin-left: 600px;
    margin-right: 600px;
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2rem;
  }

  .contact {
    font-size: 1.4rem;
    text-align: center;
    margin: 2rem 0;
  }

  .contact a {
    padding: 0 1rem;
  }

  h3 {
    text-align: center;
    padding: 1rem;
  }

  h4 {
    text-align: center;
    padding: 1rem;
    font-weight: normal;
  }

  p {
    text-align: center;
    padding-bottom: 50px;
  }

</style>