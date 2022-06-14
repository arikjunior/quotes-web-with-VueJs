<template>
  <div class="chat container">
    <h2 class="center black-text">Create Quotes</h2>
    <!-- <h2>Chat {{ this.name }}</h2> -->
    <div class="card">
      <div class="card-content">
        <ul class="messages">
          <p>All Quotes</p>
          <li v-for="message in messages" :key="message.id">
            <span class="red lighten-1 spasi">{{ message.name }} says </span
            ><br />
            <span class="black-text text-darken spasi2"
              >"{{ message.content }}"
            </span>
            <span class="grey-text time spasi3">{{ message.timestamp }} </span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <!--  -->
        <NewMessage :name="name" />
      </div>
    </div>
  </div>
</template>


<script>
import NewMessage from "@/components/NewMessage";
import db from "@/firebase/init";
import moment from "moment";
export default {
  name: "Chat",
  props: ["name"],
  components: {
    NewMessage,
  },
  data() {
    return {
      messages: [],
    };
  },
  created() {
    let ref = db.collection("messages").orderBy("timestamp");
    ref.onSnapshot((snapshot) => {
      // console.log(snapshot.docChanges());
      snapshot.docChanges().forEach((change) => {
        if (change.type == "added") {
          let doc = change.doc;
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: moment(doc.data().timestamp).format("lll"),
          });
        }
      });
    });
  },
};
</script>
<style>
.chat h2 {
  font-size: 2.6em;
  margin-bottom: 40px;
}
.chat span {
  font-size: 1.4em;
}
.chat .time {
  display: block;
  font-size: 0.9em;
}
.messages {
  max-height: 300px;
  overflow: auto;
}
.messages::-webkit-scrollbar {
  width: 3px;
}
.messages::-webkit-scrollbar-track {
  background: #ddd;
}
.messages::-webkit-scrollbar-thumb {
  background: #aaa;
}
.messages li {
  text-align: left;
  margin-left: 270px;
  border: 1px solid rgb(73, 71, 71, 0.8);
  width: 500px;
  border-radius: 20px;
  margin-top: 20px;
}
.messages li .spasi {
  margin: 0 5px;
  padding: 0 10px;
  border-radius: 20px;
}
.messages li .spasi2 {
  display: inline-block;
  padding: 0 20px;
  font-style: italic;
}

.messages li .spasi3 {
  text-align: center;
}
</style>