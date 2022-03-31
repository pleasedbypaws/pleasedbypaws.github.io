<template>
  <div class="wrapContent">

    <div class="flexy">

      <div class="two-block">
        <h1>{{ pricesHeader }}</h1>
      </div>

      <div class="two-block">

        <h2>{{ price1 }}</h2>
        <h4>{{ training1 }}</h4>
        <p>{{ training1Text }}</p>

        <h2>{{ price2 }}</h2>
        <h4>{{ training2 }}</h4>
        <p>{{ training2Text }}</p>

        <h2>{{ price3 }}</h2>
        <h4>{{ training3 }}</h4>
        <p>{{ training3Text }}</p>

        <h2>{{ price4 }}</h2>
        <h4>{{ training4 }}</h4>
        <p>{{ training4Text }}</p>

        <p><em>{{ discountText }}</em></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  data () {
    return {
      pricesHeader: 'Pricing',
      price1: '$110*',
      training1: 'One Hour Private Training',
      training1Text: 'Schedule a one-hour private training session and we come to you. Afterward, we follow up with written guidelines of what was discussed and practiced. 30-minute add on time is also available if you want a longer session.',
      price2: '$285*',
      training2: 'Package Deal: 3 Private Sessions',
      training2Text: 'Don’t think that one hour is enough for you? We offer a discounted package deal of 3 private sessions that can be scheduled as needed.',
      price3: '$350',
      training3: 'The Puppy Plan',
      training3Text: 'Do you have a new puppy that’s ready to get started with training? Then this package deal is for you! The puppy plan includes 5 hour-long, in-person sessions where we learn basic commands such as sit, down, loose leash walking, and no jumping.',
      price4: '$50*',
      training4: 'Half Hour Virtual Check In',
      training4Text: 'Don’t think that you need a whole hour? We can do a 30-minute check-in online to discuss your concerns and cover basic training concepts. This is also a great option if you’ve already done the hour long sessions and want a refresher or additional tips on what you’ve learned.',
      discountText: '* Discounts available for rescue or foster dogs.'

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

h4 {
  margin: 1rem 0;
}

p {
  margin-top: 0.5rem;
  margin-bottom: 2rem;
}

</style>