<template>
  <div>
    <h2>What We Offer</h2>
  </div>
  <div class="flexy">
    <div class="three-block">
      <img src="/logo.png" style="width: 30vw">
      <h2>1 Hour Private Training</h2>
      <p>Offered on an as-needed basis or in packages of 3 at a discounted rate, our one hour private training sessions are designed to address the behaviors you want to work on. Some of the most common challenges we help with are: jumping, barking, loose leash walking, separation anxiety, dog and leash reactivity, and more.</p>
      <p>All training sessions are followed up in email format with notes on what was practiced during the session, tips on training progression, and links to any additional resources that you may find helpful. We do this because we believe in continued support after training. We’re here for you.</p>
    </div>
    <div class="three-block">
      <img src="/logo.png" style="width: 30vw">
      <h2>The Puppy Plan</h2>
      <p>The puppy plan is offered for puppies who are just starting out with their training! For 5 weeks, we work with you and your pup for 30 minute sessions, teaching basic obedience and good manners to help them get the best start in life they can!</p>
      <p>Basic commands we teach include, but are not limited to: sit, down, touch, name recognition, stay, recall, loose leash walking, leave it, and drop it. We also assist with potty training, crate training, and general puppy management.</p>
      <p>The puppy plan is also offered to older dogs who may need a refresher or were never taught the basics. Please <router-link to="Contact">contact us</router-link> for more information and to see if this plan is right for your older dog!</p>
    </div>
    <div class="three-block">
      <img src="/logo.png" style="width: 30vw">
      <h2>30 Minute Virtuals</h2>
      <p>We also provide short, 30-minute virtual training sessions for those who may be too busy for full hour long sessions. This is a great option for someone who wants tips or advice on training they’re already working on, for current clients who want to check-in on their progress, or for those who just prefer to do things online!</p>
      <p>However, some training is done best in person. If this is your first time booking with Pleased by Paws, please <router-link to="/contact">contact us</router-link> first to see if a virtual is the right fit for you.</p>
      <p>If you want a longer virtual training session, 30-minute add-ons are available for an additional cost.</p>
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
.three-block {
  width: 33vw;
}
</style>