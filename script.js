var slider = document.getElementById("slider");
var output = document.getElementById("output");
var price = document.getElementById("price");
var final = document.getElementById("final-tip");
var finalbill = document.getElementById("final-bill")
let tip = 15;
let bill = 0;
let tiptotal = 0;
let billtotal = 0;

slider.oninput = function() {
  tip = this.value;
  tiptotal = tip * bill / 100; 
  billtotal = Number(bill) + Number(tiptotal);
  output.innerHTML = tip + "%";
  final.innerHTML = "$" + tiptotal.toFixed(2);
  finalbill.innerHTML = "$" + billtotal.toFixed(2);
}

price.oninput = function() {
  bill = this.value;
  tiptotal = tip * bill / 100; 
  billtotal = Number(bill) + Number(tiptotal);
  final.innerHTML = "$" + tiptotal.toFixed(2);
  finalbill.innerHTML = "$" + billtotal.toFixed(2);
}

//trigger tip percentage from emoji faces
document.getElementById("terrible").addEventListener("click",
function () {
    slider.value = 5;
    tip = 5;
    output.innerHTML = tip + "%";
    tiptotal = tip * bill / 100; 
    billtotal = Number(bill) + Number(tiptotal);
    final.innerHTML = "$" + tiptotal.toFixed(2);
    finalbill.innerHTML = "$" + billtotal.toFixed(2);
  }
);
document.getElementById("bad").addEventListener("click",
function () {
    slider.value = 10;
    tip = 10;
    output.innerHTML = tip + "%";
    tiptotal = tip * bill / 100; 
    billtotal = Number(bill) + Number(tiptotal);
    final.innerHTML = "$" + tiptotal.toFixed(2);
    finalbill.innerHTML = "$" + billtotal.toFixed(2);
  }
);
document.getElementById("satisfactory").addEventListener("click",
function () {
    slider.value = 15;
    tip = 15;
    output.innerHTML = tip + "%";
    tiptotal = tip * bill / 100; 
    billtotal = Number(bill) + Number(tiptotal);
    final.innerHTML = "$" + tiptotal.toFixed(2);
    finalbill.innerHTML = "$" + billtotal.toFixed(2);
  }
);
document.getElementById("good").addEventListener("click",
function () {
    slider.value = 20;
    tip = 20;
    output.innerHTML = tip + "%";
    tiptotal = tip * bill / 100; 
    billtotal = Number(bill) + Number(tiptotal);
    final.innerHTML = "$" + tiptotal.toFixed(2);
    finalbill.innerHTML = "$" + billtotal.toFixed(2);
  }
);
document.getElementById("great").addEventListener("click",
function () {
    slider.value = 25;
    tip = 25;
    output.innerHTML = tip + "%";
    tiptotal = tip * bill / 100; 
    billtotal = Number(bill) + Number(tiptotal);
    final.innerHTML = "$" + tiptotal.toFixed(2);
    finalbill.innerHTML = "$" + billtotal.toFixed(2);
  }
);
