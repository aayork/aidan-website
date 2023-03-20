var classmates = document.querySelector("#classmates");

$.getJSON(
  "https://raw.githubusercontent.com/emuel/api/master/5110",
  function (data) {
    for (i = 0; i < data.length; i++) {
      classmates.innerHTML +=
        "<div style='width: 400px; padding:10px' <h3>" +
        data[i].stu_name +
        " " +
        data[i].last_name +
        "</h3><img src='https://" +
        data[i].domain +
        "/images/me.jpg'></div>";
    }
  }
);
