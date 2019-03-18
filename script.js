var slider = document.getElementById("slider");
var output = document.getElementById("output");

slider.oninput = function() {
  output.innerHTML = this.value + "%";
}
output.innerHTML = slider.value + "%";

document.getElementById("terrible").addEventListener("click",
function () {
    slider.value = 5;
    output.innerHTML = slider.value + "%";
  }
);
document.getElementById("bad").addEventListener("click",
function () {
    slider.value = 10;
    output.innerHTML = slider.value + "%";
  }
);
document.getElementById("satisfactory").addEventListener("click",
function () {
    slider.value = 15;
    output.innerHTML = slider.value + "%";
  }
);document.getElementById("good").addEventListener("click",
function () {
    slider.value = 20;
    output.innerHTML = slider.value + "%";
  }
);document.getElementById("great").addEventListener("click",
function () {
    slider.value = 25;
    output.innerHTML = slider.value + "%";
  }
);

