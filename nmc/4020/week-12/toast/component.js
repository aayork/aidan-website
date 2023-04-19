Vue.component("toast", {
  props: {
    toastoption: String,
    bgcolor: String,
  },
  template: `<div><button v-on:click="checkToast" >check the toast</button>
    <h3 :style="{ backgroundColor: bgcolor}">The toast is {{toastState}} </h3></div>`,
  data() {
    return { toastState: "burnt" };
  },
  methods: {
    checkToast() {
      this.toastState = "perfect";
    },
  },
});

var co = new Vue({
  el: "#co",
});
