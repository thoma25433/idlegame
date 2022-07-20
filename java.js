var point = 0;
var pointPerSecond = 0;
var auto1Cost = 0;
var auto1s = 0;

function save() {
  var save = {
    point: point,
    auto1s: auto1s,
    auto1Cost: auto1Cost,
    pointPerSecond: pointPerSecond,
  }
  localStorage.setItem("save",JSON.stringify(save));
}

function load() {
  var savegame = JSON.parse(localStorage.getItem("save"));
  if (typeof savegame.point !== "undefined") point = savegame.point;
  if (typeof savegame.auto1s !== "undefined") auto1s = savegame.auto1s;
  if (typeof savegame.auto1Cost !== "undefined") auto1Cost = savegame.auto1Cost;
  if (typeof savegame.pointPerSecond !== "undefined") pointPerSecond = savegame.pointPerSecond;
}

function delSave() {
  localStorage.removeItem("save")
}

setInterval(function() {
  point += pointPerSecond;
  document.getElementById("showPoint").innerText = point;
  document.getElementById("auto1num").innerText = auto1s;
  document.getElementById("auto1price").innerText = auto1Cost;
  document.getElementById("showpsec").innerText = pointPerSecond;
  // save()
}, 1000)

function buyAuto1() {
  if (point >= auto1Cost) {
    point -= auto1Cost;
    document.getElementById("showPoint").innerText = point;
    auto1s++;
    document.getElementById("auto1num").innerText = auto1s;
    auto1Cost += 1;
    auto1Cost *= 1.2;
    auto1Cost = Math.round(auto1Cost);
    document.getElementById("auto1price").innerText = auto1Cost;
    pointPerSecond += 1;
    document.getElementById("showpsec").innerText = pointPerSecond;
  } else {
    alert("You don't have enough points!")
  }
}
