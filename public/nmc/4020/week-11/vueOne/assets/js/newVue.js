var header = new Vue({
  el: "#header",
  data: {
    yourName: "Aidan",
    description: "I drive stick shift.",
    linkOne: "Introduction",
    link2: "My Portfolio",
    link3: "About Me, OK??",
    link4: "Contact",
    link5: "My List",
    link6: "Conditional",
    avatar: "images/avatar.jpg",
  },
});

var portfolio = new Vue({
  el: "#portfolio",
  data: {
    portfolioTitle: "Something here about my portfolio title",
    image1: "images/one.jpg",
    imgText1: "Image One",
    image2: "images/two.jpg",
    imgText2: "Image Two",
    image3: "images/three.jpg",
    imgText3: "Image Three",
    image4: "images/four.jpg",
    imgText4: "Image Four",
    image5: "images/five.jpg",
    imgText5: "Image Five",
    image6: "images/six.jpg",
    imgText6: "Image Six",
    image7: "images/seven.jpg",
    imgText7: "Image Seven",
    portCaption: "Uhh this is a portfolio and stuff.",
  },
});

var about = new Vue({
  el: "#about",
  data: {
    aboutMeTitle: "ABOUT ME!!!",
    banner: "images/newbanner.jpg",
    randomParagraph: "Here's a random photo of Spain",
  },
});

var contact = new Vue({
  el: "#contact",
  data: {
    title: "Reach Out",
    paragraph: "feel free to contact me!",
    name: "Put your name here please.",
    email: "and your email goes here!",
    message: "message here!!",
    send: "Send",
  },
});

var list = new Vue({
  el: "#list",
  data: {
    favorites: ["Mellow Mushroom", "Cali n Titos", "Zaxbys", "Taco Bell"],
  },
});

var conditional = new Vue({
  el: "#conditional",
  data: {
    teacherName: "",
  },
});

var getcolor = new Vue({
  el: "#function",
  data: {
    bgColor: "",
    colors: ["red", "green", "blue"],
  },
  methods: {
    changeColor(color) {
      this.bgColor = color;
    },
  },
});
