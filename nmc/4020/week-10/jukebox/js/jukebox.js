let juke = document.querySelector("#juke");
function player(tune) {
  juke.innerHTML =
    "<audio controls autoplay src=" +
    tune +
    " type='audio/m4a'></audio><image src='uhhhh'/>";
}
