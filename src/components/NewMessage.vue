<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
      <label for="new-message">New Qoutes (enter to submit): </label>
      <input
        type="text"
        name="new-message"
        v-model="newMessage"
        style="border-bottom: 2px solid red"
      />
      <p class="red-text">{{ feedback }}</p>
    </form>
  </div>
</template>

<script>
import db from "@/firebase/init";

export default {
  name: "NewMessage",
  props: ["name"],
  data() {
    return {
      newMessage: null,
      feedback: null,
    };
  },
  methods: {
    addMessage() {
      //   console.log(this.newMessage, this.name, Date.now());
      if (this.newMessage) {
        db.collection("messages")
          .add({
            content: this.newMessage,
            name: this.name,
            timestamp: Date.now(),
          })
          .catch((err) => {
            console.log(err);
          });
        this.newMessage = null;
        this.feedback = null;
      } else {
        this.feedback = "Silahkan tulis pesan terlebih dahulu";
      }
    },
  },
};
</script>