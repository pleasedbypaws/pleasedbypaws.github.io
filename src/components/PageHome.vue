<template>
  <div class="wrapper">
    <h1>Private dog training curated just for <em>you</em>.</h1>
    <p>At Pleased by Paws, we go above and beyond generic group classes to provide a unique training experience tailored to your needs. Our private training takes place where you are: your home, your neighborhood, your park. From there, we create a personalized training plan that takes into account how your dog learns best. And we don’t leave it at that! We offer virtual follow-up sessions to assist with any challenges that may present themselves during the training process. </p>
    <img src="/photos/chomskyhome.jpg" height="600px">
  </div>
  <div class="flexy">
    <div class="two-block">
      <h3>Positive training helps build the bond between you and your dog, creating trust and the foundation for a harmonious relationship.</h3>
    </div>

    <div class="two-block">
      <h4>We strive to provide high-quality, one on one time focused on addressing the skills you want to teach your pooch; from sitting down to intense behavior modification for reactivity.</h4>
    </div>
  </div><br>
  <div class="contact"><a href="PageContact.vue">Contact Us</a></div>
</template>

<script>
export default {
  name: "PageHeader"
}
</script>

<style scoped>
  .flexy {
    display: flex;
  }
  .two-block {
    width: 50vw;
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
  }

  .contact a {
    padding: 0px 1rem;
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
</style>