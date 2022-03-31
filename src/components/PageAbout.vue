<template>
  <div class="wrapContent">

    <section>
      <div class="flexy">

        <div class="two-block">
          <img src="/photos/priya.jpg">
        </div>

        <div class="two-block">
          <h1>{{ trainingHeader }}</h1>
          <p>{{ trainingText1 }}</p>
          <p>{{ trainingText2 }}</p>
        </div>
      </div>

    </section>

    <section>
      <div class="flexy">
        <div class="two-block">
          <h1>{{ aboutHeader }}</h1>
          <p>{{ aboutText1 }}</p>
          <p>{{ aboutText2 }}</p>
        </div>

        <div class="two-block">
          <img src="/photos/elaine.jpg">
        </div>

      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "AboutPage",
  data () {
    return {
      trainingHeader: 'Our Training Beliefs',
      trainingText1:'At Pleased by Paws, we practice force-free, positive dog training methods to help shape a confident, trusting companion that strives to please you. We believe that positive reinforcement is a powerful tool that can teach any dog to take pause and behave appropriately; from learning sit for the first time to modifying behavior such as reactivity and separation anxiety.',
      trainingText2: 'We also believe that dogs learn best by practicing their skills in the environments they’ll be in the most. That’s why we don’t do classes in a studio—instead, we come to you: your home, your neighborhood, your park. Designed to uphold consistency (that’s how dogs learn best!) we practice real life scenarios so your pooch has the best possible setup for success.',
      aboutHeader: 'Meet the Trainer',
      aboutText1: 'Founder and owner of Pleased by Paws, Elaine grew up in Northwest Montana surrounded by family dogs. She first became interested in dog behavior and training in 2012 when she adopted a pit bull mix with reactivity issues. Since then, she’s volunteered her time at the Charlotte Edkins Humane Society and worked as a trainer at West Seattle Wonder Dogs, before starting Pleased by Paws in 2020.',
      aboutText2: 'Elaine is studying for her CCPDT-KA certification and is a member of The American Pet Dog Society. She is a strong advocate for responsible pet ownership, positive training methods, and for having a strong foundation built on trust and respect between pet and parent.'
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

img {
  display: block;
  margin: 1rem 2rem;
}

h1 {
  text-align: center;
  font-family: 'Poppins-Regular';
  padding-bottom: 50px;
}

p {
  text-align: center;
  padding-bottom: 30px;
}

</style>