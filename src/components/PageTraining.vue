<template>
  <div class="wrapContent">

    <h1>{{ trainHeader }}</h1>

    <div class="flexy">
      <div class="three-block">
        <img src="/photos/priya2.jpg" style="">
        <h3>{{ option1 }}</h3>
        <p>{{ option1Text }}</p>
        <p>{{ option1TextCont }}</p>
      </div>

      <div class="three-block">
        <img src="/photos/puppy.jpeg">
        <h3>{{ option2 }}</h3>
        <p>{{ option2Text }}</p>
        <p>{{ option2TextCont }}</p>
        <p>{{ option2TextCont2 }}</p>
      </div>

      <div class="three-block">
        <img src="/photos/wfh.jpeg">
        <h3>{{ option3 }}</h3>
        <p>{{ option3Text }}</p>
        <p>{{ option3TextCont }}</p>
        <p>{{ option3TextCont2 }}</p>
      </div>
    </div>

    <div class="contact">
      <router-link to="/contact">Contact</router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: "PageHeader",
  data () {
    return {
      trainHeader: 'What We Offer',
      option1: '1 Hour Private Training',
      option1Text: 'Offered on an as-needed basis or in packages of 3 at a discounted rate, our one hour private training sessions are designed to address the behaviors you want to work on. Some of the most common challenges we help with are: jumping, barking, loose leash walking, separation anxiety, dog and leash reactivity, and more.',
      option1TextCont: 'All training sessions are followed up in email format with notes on what was practiced during the session, tips on training progression, and links to any additional resources that you may find helpful. We do this because we believe in continued support after training. We’re here for you.',
      option2: 'The Puppy Plan',
      option2Text: 'The puppy plan is offered for puppies who are just starting out with their training! For 5 weeks, we work with you and your pup for 30 minute sessions, teaching basic obedience and good manners to help them get the best start in life they can!',
      option2TextCont: 'Basic commands we teach include, but are not limited to: sit, down, touch, name recognition, stay, recall, loose leash walking, leave it, and drop it. We also assist with potty training, crate training, and general puppy management.',
      option2TextCont2: 'The puppy plan is also offered to older dogs who may need a refresher or were never taught the basics. Please contact us for more information and to see if this plan is right for your older dog!',
      option3: '30 Minute Virtuals',
      option3Text: 'We also provide short, 30-minute virtual training sessions for those who may be too busy for full hour long sessions. This is a great option for someone who wants tips or advice on training they’re already working on, for current clients who want to check-in on their progress, or for those who just prefer to do things online!',
      option3TextCont: 'However, some training is done best in person. If this is your first time booking with Pleased by Paws, please contact us first to see if a virtual is the right fit for you.',
      option3TextCont2: 'If you want a longer virtual training session, 30-minute add-ons are available for an additional cost.'
    }
  }
}
</script>

<style scoped>
.flexy {
  display: flex;
  justify-content: space-around;
}

.three-block {
  width: 33vw;
  margin: 0 2rem;
}

.wrapContent {
  margin-left: 400px;
  margin-right: 400px;
}

img {
  display: block;
  width: 100%;
  height: auto;
}

h1 {
  margin-top: 5rem;
}

h3 {
  text-align: center;
  margin: 1rem 0;
}

p {
  text-align: center;
  padding-bottom: 30px;
}

.contact {
  font-size: 1.4rem;
  text-align: center;
  margin: 2rem 0;
}

.contact a {
  padding: 0 1rem;
}

</style>