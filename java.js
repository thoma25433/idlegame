var point = 0;
var pointPerSecond = 0;
var gen1Cost = 0;
var gen1s = 0;
var gen2Cost = 500;
var gen2s = 0;
var gen3Cost = 3000;
var gen3s = 0;
var prestigeLevel = 0;
var prestigeCost = 10000;



function prestige() {

}

function save() {
  var save = {
    point: point,
    gen1s: gen1s,
    gen1Cost: gen1Cost,
    pointPerSecond: pointPerSecond,
    gen2Cost: gen2Cost,
    gen2s: gen2s,
    gen3Cost: gen3Cost,
    gen3s: gen3s,
  }
  localStorage.setItem("save",JSON.stringify(save));
}

function load() {
  var savegame = JSON.parse(localStorage.getItem("save"));
  if (typeof savegame.point !== "undefined") point = savegame.point;
  if (typeof savegame.pointPerSecond !== "undefined") pointPerSecond = savegame.pointPerSecond;
  if (typeof savegame.gen1s !== "undefined") gen1s = savegame.gen1s;
  if (typeof savegame.gen1Cost !== "undefined") gen1Cost = savegame.gen1Cost;
  if (typeof savegame.gen2s !== "undefined") gen2s = savegame.gen2s;
  if (typeof savegame.gen2Cost !== "undefined") gen2Cost = savegame.gen2Cost;
  if (typeof savegame.gen3s !== "undefined") gen3s = savegame.gen3s;
  if (typeof savegame.gen3Cost !== "undefined") gen3Cost = savegame.gen3Cost;
}

function delSave() {
  localStorage.removeItem("save")
}

setInterval(function() {
  point += pointPerSecond;
  document.getElementById("showPoint").innerText = point;
  document.getElementById("gen1num").innerText = gen1s;
  document.getElementById("gen1price").innerText = gen1Cost;
  document.getElementById("showpsec").innerText = pointPerSecond;
  // save()
}, 1000)

function buygen1() {
  if (point >= gen1Cost) {
    point -= gen1Cost;
    document.getElementById("showPoint").innerText = point;
    gen1s++;
    document.getElementById("gen1num").innerText = gen1s;
    gen1Cost += 1;
    gen1Cost *= 1.5;
    gen1Cost = Math.round(gen1Cost);
    document.getElementById("gen1price").innerText = gen1Cost;
    pointPerSecond += 1;
    document.getElementById("showpsec").innerText = pointPerSecond;
  } else {
    alert("You don't have enough points!")
  }
}
function buygen2() {
  if (point >= gen2Cost) {
    point -= gen2Cost;
    document.getElementById("showPoint").innerText = point;
    gen2s++;
    document.getElementById("gen2num").innerText = gen2s;
    gen2Cost *= 1.2;
    gen2Cost = Math.round(gen2Cost);
    document.getElementById("gen2price").innerText = gen2Cost;
    pointPerSecond += 3;
    document.getElementById("showpsec").innerText = pointPerSecond;
  } else {
    alert("You don't have enough points!")
  }
}
function buygen3() {
  if (point >= gen3Cost) {
    point -= gen3Cost;
    document.getElementById("showPoint").innerText = point;
    gen3s++;
    document.getElementById("gen3num").innerText = gen3s;
    gen3Cost *= 1.2;
    gen3Cost = Math.round(gen3Cost);
    document.getElementById("gen3price").innerText = gen3Cost;
    pointPerSecond += 7;
    document.getElementById("showpsec").innerText = pointPerSecond;
  } else {
    alert("You don't have enough points!")
  }
}
