const apiKey = "wOWLhNznTlcKdrbWRdoLVpt8aM0fFEjbZbns9lV1";

const container = document.querySelector(".slideshow-container");

fetch(
  `https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // add this line to print the contents of the data object

    const slide = document.createElement("div");
    slide.classList.add("mySlides");

    const solKey = data.sol_keys[0];
    const solData = data[solKey];

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const date = new Date(solData.First_UTC);
    const dateString = date.toLocaleDateString("en-US", options);

    const html = `
      <h2>Sol ${solKey}</h2>
      <p>Date: ${dateString}</p>
      <p>High temperature: ${solData.AT.mx} °C</p>
      <p>Low temperature: ${solData.AT.mn} °C</p>
      <p>Wind speed: ${solData.HWS.av} m/s</p>
      <p>Pressure: ${solData.PRE.av} Pa</p>
    `;

    slide.innerHTML = html;
    container.appendChild(slide);
  })
  .catch((error) => console.error(error));
