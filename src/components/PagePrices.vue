<template>
  <div class="flexy">
    <div class="two-block">
      <h2>Pricing</h2>
    </div>
    <div class="two-block">
      <h3>$110*</h3>
      <h4>One Hour Private Training</h4>
      <p>Schedule a one-hour private training session and we come to you. Afterward, we follow up with written guidelines of what was discussed and practiced. 30-minute add on time is also available if you want a longer session.</p>
      <h3>$285*</h3>
      <h4>Package Deal: 3 Private Sessions</h4>
      <p>Don’t think that one hour is enough for you? We offer a discounted package deal of 3 private sessions that can be scheduled as needed.</p>
      <h3>$250</h3>
      <h4>The Puppy Plan</h4>
      <p>Do you have a new puppy that’s ready to get started with training? Then this package deal is for you! The puppy plan includes 5 half-hour, in-person sessions where we learn basic commands such as sit, down, loose leash walking, and no jumping. </p>
      <h3>$50*</h3>
      <h4>Half Hour Virtual Check In</h4>
      <p>Don’t think that you need a whole hour? We can do a 30-minute check-in online to discuss your concerns and cover basic training concepts. This is also a great option if you’ve already done the hour long sessions and want a refresher or additional tips on what you’ve learned.</p>
      <p>* Discounts available for rescue or foster dogs.</p>
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