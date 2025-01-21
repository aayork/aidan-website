var cats = new Vue({
  el: "#meow",
  data: {
    imageUrl: "",
    counter: 0,
    cats: [
      {
        breeds: [],
        categories: [
          {
            id: 3,
            name: "funny",
          },
        ],
        id: "8r",
        url: "https://cdn2.thecatapi.com/images/8r.gif",
        width: 500,
        height: 375,
      },
      {
        breeds: [],
        id: "ii",
        url: "https://cdn2.thecatapi.com/images/ii.jpg",
        width: 591,
        height: 720,
      },
      {
        breeds: [],
        id: "kh",
        url: "https://cdn2.thecatapi.com/images/kh.jpg",
        width: 500,
        height: 375,
      },
      {
        breeds: [],
        categories: [
          {
            id: 7,
            name: "ties",
          },
        ],
        id: "10f",
        url: "https://cdn2.thecatapi.com/images/10f.jpg",
        width: 333,
        height: 500,
      },
      {
        breeds: [],
        id: "16r",
        url: "https://cdn2.thecatapi.com/images/16r.jpg",
        width: 640,
        height: 427,
      },
      {
        breeds: [],
        categories: [
          {
            id: 9,
            name: "dream",
          },
        ],
        id: "1pt",
        url: "https://cdn2.thecatapi.com/images/1pt.jpg",
        width: 500,
        height: 332,
      },
      {
        breeds: [],
        id: "1te",
        url: "https://cdn2.thecatapi.com/images/1te.gif",
        width: 166,
        height: 141,
      },
      {
        breeds: [],
        id: "27v",
        url: "https://cdn2.thecatapi.com/images/27v.jpg",
        width: 1024,
        height: 768,
      },
      {
        breeds: [],
        id: "333",
        url: "https://cdn2.thecatapi.com/images/333.gif",
        width: 100,
        height: 75,
      },
      {
        breeds: [],
        id: "33q",
        url: "https://cdn2.thecatapi.com/images/33q.gif",
        width: 500,
        height: 281,
      },
      {
        breeds: [],
        categories: [
          {
            id: 1,
            name: "hats",
          },
        ],
        id: "363",
        url: "https://cdn2.thecatapi.com/images/363.jpg",
        width: 971,
        height: 1024,
      },
      {
        breeds: [],
        id: "3ee",
        url: "https://cdn2.thecatapi.com/images/3ee.jpg",
        width: 500,
        height: 332,
      },
      {
        breeds: [],
        id: "428",
        url: "https://cdn2.thecatapi.com/images/428.jpg",
        width: 1728,
        height: 1296,
      },
      {
        breeds: [],
        id: "4gp",
        url: "https://cdn2.thecatapi.com/images/4gp.gif",
        width: 350,
        height: 254,
      },
      {
        breeds: [],
        id: "4rn",
        url: "https://cdn2.thecatapi.com/images/4rn.jpg",
        width: 427,
        height: 640,
      },
    ],
  },
  methods: {
    showpic() {
      this.imageUrl = this.cats[this.counter].url;

      this.counter++;
      console.log(this.imageUrl);
      if (this.counter == this.cats.length) {
        this.counter = 0;
      }
    },
  },
});
