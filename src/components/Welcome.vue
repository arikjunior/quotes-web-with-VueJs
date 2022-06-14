<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="black-text">Collection of Quotes</h2>
        <p class="grey-text abc">
          <!-- Masukkan nama anda dan buatlah sebuah kutipan -->
          Enter your name and make a quote
        </p>
        <form @submit.prevent="enterChat">
          <label for="name">Your Name : </label>
          <input
            type="text"
            name="name"
            v-model="name"
            style="border-bottom: 2px solid red"
          />
          <p v-if="feedback" class="red-text">{{ feedback }}</p>
          <button class="btn pink buttons">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      name: null,
      feedback: null,
    };
  },
  methods: {
    enterChat() {
      // console.log(this.name);
      if (this.name) {
        this.$router.push({ name: "Chat", params: { name: this.name } });
      } else {
        this.feedback = "Mohon isi nama terlebih dahulu";
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.welcome {
  max-width: 400px;
  margin-top: 100px;
}
.welcome h2 {
  font-size: 35px;
}
.welcome p {
  padding-bottom: 50px;
}
.buttons {
  margin: 30px auto;
}
</style>
