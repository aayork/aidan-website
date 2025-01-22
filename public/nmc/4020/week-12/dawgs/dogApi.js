new Vue({
  el: "#app",

  data() {
    return {
      info: null,
      moreData: [],
      imgMaker: [],
      whichDawg: "",
      selector: 0,
    };
  },
  mounted: function mounted() {
    this.showme("cocker");
  },

  methods: {
    async showme(index) {
      await axios
        .get("https://dog.ceo/api/breed/spaniel/" + index + "/images")
        .then((response) => (this.info = response.data));
      console.log(this.info);
      this.moreData = this.info.message;
      this.slider();
    },
    slider(num) {
      this.whichDawg = this.moreData[this.selector];
      if (num == 1) {
        this.selector++;
      }
      if (num == 0) {
        this.selector--;
      }
      if (this.selector < 0) {
        this.selector = this.moreData.length;
      }
      if (this.selector > this.moreData.length) {
        this.selector = 0;
      }
    },
  },
});
