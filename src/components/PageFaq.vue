<template>
  <div class="flexy">
    <div class="two-block">
      <h2>FAQs</h2>
    </div>
    <div class="two-block">
      <h3>Where do I start as a first time client?</h3>
      <!-- Copy below needs updating, as there's no calendar-->
      <p>If you’re ready to move ahead to start training with Pleased by Paws (hooray!), we ask that you schedule a first time client intake session through our calendar. If you have any questions, you can contact us first either by phone, email, or through our handy <router-link to="/contact">contact us</router-link> form. Once we have a training plan in place, all sessions will be booked and paid through our calendar.</p>
      <h3>What’s your service area?</h3>
      <p>We serve the greater Seattle area, from Lynnwood down to Renton, and even over to West Seattle! Unsure if this means you? Chances are, your neighborhood is covered - reach out to us to check. If not, we’re flexible and can either do a virtual session or come to another arrangement that fits your needs.</p>
      <h3>Do you offer discounts?</h3>
      <p>Yes! We offer discounts for rescue and foster dogs. Send us an email at <a href="mailto:info@pleasedbypaws.com?subject=Coupon%20Code%20Inquiry">info@pleasedbypaws.com</a> for the coupon code. We also offer various discounts throughout the year, so keep your eyes out for those.</p>
      <h3>Can you train more than one dog per session?</h3>
      <p>Absolutely! However, that time will be split between the dogs, and if one dog needs more work than the other, we may end up spending the majority of the session working with that one pooch. We recommend booking separate sessions for each dog, depending on the amount of training needed.</p>
      <h3>My dog is aggressive towards people! Can you help?</h3>
      <p>Unfortunately not. Human aggression requires intense behavior modification and may need medication from your vet depending on the severity of the aggression. If you’re struggling with this kind of aggression, please reach out and we’re happy to refer you to a specialist.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeader"
}
</script>

<style scoped>
.flexy {
  display: flex;
  justify-content: space-around;
}
.two-block {
  width: 50vw;
}
</style>