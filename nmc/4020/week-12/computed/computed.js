var computed = new Vue({
  el: "#compute",
  data: {
    firstName: "Aidan",
    lastName: "York",
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
  },
});
