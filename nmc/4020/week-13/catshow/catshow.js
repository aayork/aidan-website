Vue.component("cats", {
  template: `<div style="text-align: center; padding: 10px; border-radius: 10px; background-color: lightgray;  margin: 10px;"><h2>{{thename}}</h2>
  <p>Origin: {{origin}}</p>
  <p style="margin-left: 40px; text-align:center; width:500px">Description: {{description}}</p>
  <p>Temperament: {{temperament}}</p>
  <h3>Adaptability Score: {{adapt}}</h3>
  <h3>Child Friendly Score: {{child_friendly}}</h3>
  <h3>Dog Friendly Score: {{dog_friendly}}</h3>
  <h3>Energy Level Score: {{energy_level}}</h3>
  <h3>Grooming Score: {{grooming}}</h3>
  <h3>Health Issues Score: {{health_issues}}</h3>
  <button v-on:click="slideshow()">slideshow</button><br /><br /><img style="width: 600px; border-radius: 10px" :src="image.url" /><br /></div>`,
  props: {
    whichcat: String,
  },
  data() {
    return {
      image: "",
      thename: "",
      allofit: [],
      i: 0,
      adapt: 0,
      child_friendly: 0,
      dog_friendly: 0,
      energy_level: 0,
      grooming: 0,
      health_issues: 0,
      description: "",
      temperament: "",
      origin: "",
    };
  },
  created() {
    this.loadNextImage(this.whichcat);
  },
  methods: {
    async loadNextImage(breedID) {
      try {
        axios.defaults.headers.common["x-api-key"] =
          "5707ff43-c0b5-456f-864a-78a03c24ea46";
        let response = await axios.get(
          "https://api.thecatapi.com/v1/images/search?breed_ids=" + breedID,
          {
            params: {
              limit: 10,
              size: "full",
            },
          }
        );
        //grabs the id in order to target new url for more data

        let theid = response.data[0].id;
        //response2 is a new variable that uses the id to get data from a URL with additional information
        let response2 = await axios.get(
          "https://api.thecatapi.com/v1/images/" + theid,
          {}
        );
        this.adapt = response2.data.breeds[0].adaptability;
        this.origin = response2.data.breeds[0].origin;
        this.temperament = response2.data.breeds[0].temperament;
        this.description = response2.data.breeds[0].description;
        this.child_friendly = response2.data.breeds[0].child_friendly;
        this.dog_friendly = response2.data.breeds[0].dog_friendly;
        this.energy_level = response2.data.breeds[0].energy_level;
        this.grooming = response2.data.breeds[0].grooming;
        this.health_issues = response2.data.breeds[0].health_issues;
        this.thename = response2.data.breeds[0].name;
        this.allofit = response.data;
      } catch (err) {
        console.log(err);
      }
      this.slideshow();
    },
    async slideshow() {
      if (this.i >= this.allofit.length) {
        this.i = 0;
      }
      this.image = this.allofit[this.i];
      this.i++;
    },
  },
});

var cat = new Vue({
  el: "#cat",
});
