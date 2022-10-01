let stare = document.getElementById("stars");
let moon2 = document.getElementById("moon2");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river5 = document.getElementById("river5");
let boat6 = document.getElementById("boat6");
let ghaith = document.querySelector(".gh");

window.onscroll = function () {
  let value = scrollY;
  stare.style.left = value + "px";
  moon2.style.top = value * 3 + "px";
  mountains3.style.top = value * 1 + "px";
  mountains4.style.top = value * 2 + "px";
  river5.style.top = value + "px";
  boat6.style.top = value + "px";
    boat6.style.left = value * 1 + "px";
    ghaith.style.fontSize = value + "px";
    if (scrollY >= 84) {
        ghaith.style.fontSize = 84 + "px";
        ghaith.style.position = "fixed";
        if (scrollY >= 540) {
          ghaith.style.display = "none";
        } else {
          ghaith.style.display = "block";
        }
    }

  if (scrollY >= 157) {
    document.querySelector(".main").style.background =
      "linear-gradient(#152d38  , #0c0e1b)";
  } else {
    document.querySelector(".main").style.background =
      "linear-gradient(#461443  , #0c0e1b)";
  }
};
