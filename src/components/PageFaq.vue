<template>
  <div class="wrapContent">

    <div class="flexy">

      <div class="two-block">
        <h1>{{ faqHeader }}</h1>
      </div>

      <div class="two-block">
        <h3>{{ question1 }}</h3>
        <p>{{ question1Text }}</p>
        <h3>{{ question2 }}</h3>
        <p>{{ question2Text }}</p>
        <h3>{{ question3 }}</h3>
        <p>{{ question3Text }}</p>
        <h3>{{ question4 }}</h3>
        <p>{{ question4Text }}</p>
        <h3>{{ question5 }}</h3>
        <p>{{ question5Text }}</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  data () {
    return {
      faqHeader: 'FAQs',
      question1: 'Where do I start as a first time client?',
      question1Text: 'If you’re ready to move ahead to start training with Pleased by Paws (hooray!), we ask that you reach out to use to schedule a free, thirty minute intake session. This will ensure that we are a good client-trainer fit, and we can answer any questions you may have. Once we decide to move forward, we create a personalized training plan for you and your pooch.',
      question2: 'What’s your service area?',
      question2Text: 'We serve the greater Seattle area, from Lynnwood down to Renton, and even over to West Seattle! Unsure if this means you? Chances are, your neighborhood is covered - reach out to us to check. If not, we’re flexible and can either do a virtual session or come to another arrangement that fits your needs.',
      question3: 'Do you offer discounts?',
      question3Text: 'Yes! We offer discounts for rescue and foster dogs. We also offer various discounts throughout the year, so keep your eyes out for those.',
      question4: 'Can you train more than one dog per session?',
      question4Text: 'Absolutely! However, that time will be split between the dogs, and if one dog needs more work than the other, we may end up spending the majority of the session working with that one pooch. We recommend booking separate sessions for each dog, depending on the amount of training needed.',
      question5: 'My dog is aggressive towards people! Can you help?',
      question5Text: 'Unfortunately not. Human aggression requires intense behavior modification and may need medication from your vet depending on the severity of the aggression. If you’re struggling with this kind of aggression, please reach out and we’re happy to refer you to a specialist.',

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
  width: 50vw;
}

.wrapContent {
  margin-left: 400px;
  margin-right: 400px;
}

p {
  margin-top: 0.5rem;
  margin-bottom: 2rem;
}
</style>