var point = 0;
var pointPerSecond = 0;
var gen1Cost = 0;
var gen1s = 0;
var gen1gain = 1;
var gen2Cost = 500;
var gen2s = 0;
var gen2gain = 2;
var gen3Cost = 3000;
var gen3s = 0;
var gen3gain = 3;
var prestigeLevel = 0;
var prestigeCost = 25000;

function prestige() {
  if (point >= prestigeCost) {
    point -= point;
    pointPerSecond -= pointPerSecond;
    gen1s -= gen1s;
    gen2s -= gen2s;
    gen3s -= gen3s;
    gen1Cost = 0;
    gen2Cost = 500;
    gen3Cost = 3000;
    document.getElementById("showPoint").innerText = point;
    prestigeLevel++;
    document.getElementById("showplvl").innerText = prestigeLevel;
    prestigeCost *= 2;
    prestigeCost = Math.round(prestigeCost);
    document.getElementById("prescost").innerText = prestigeCost;
    gen1gain *= 1.2;
//     gen1gain = Math.round(gen1gain)
    gen2gain *= 1.2;
//     gen2gain = Math.round(gen2gain)
    gen3gain *= 1.2;
//     gen3gain = Math.round(gen3gain)
  } else {
    alert("You don't have enough points!")
  }
}

function save() {
  var save = {
    point: point,
    gen1s: gen1s,
    gen1Cost: gen1Cost,
    gen1gain: gen1gain,
    pointPerSecond: pointPerSecond,
    gen2Cost: gen2Cost,
    gen2s: gen2s,
    gen2gain: gen2gain,
    gen3Cost: gen3Cost,
    gen3s: gen3s,
    gen3gain: gen3gain,
    prestigeLevel: prestigeLevel,
    prestigeCost: prestigeCost,
  }
//   var dataToWrite = "Hello World!";
// saveAs("./saves/data.txt", dataToWrite);
  localStorage.setItem("save",JSON.stringify(save));
}

function load() {
  var savegame = JSON.parse(localStorage.getItem("save"));
  if (typeof savegame.point !== "undefined") point = savegame.point;
  if (typeof savegame.pointPerSecond !== "undefined") pointPerSecond = savegame.pointPerSecond;
  if (typeof savegame.gen1s !== "undefined") gen1s = savegame.gen1s;
  if (typeof savegame.gen1Cost !== "undefined") gen1Cost = savegame.gen1Cost;
  if (typeof savegame.gen1gain !== "undefined") gen1gain = savegame.gen1gain;
  if (typeof savegame.gen2s !== "undefined") gen2s = savegame.gen2s;
  if (typeof savegame.gen2Cost !== "undefined") gen2Cost = savegame.gen2Cost;
  if (typeof savegame.gen2gain !== "undefined") gen2gain = savegame.gen2gain;
  if (typeof savegame.gen3s !== "undefined") gen3s = savegame.gen3s;
  if (typeof savegame.gen3Cost !== "undefined") gen3Cost = savegame.gen3Cost;
  if (typeof savegame.gen3gain !== "undefined") gen3gain = savegame.gen3gain;
  if (typeof savegame.prestigeLevel !== "undefined") prestigeLevel = savegame.prestigeLevel;
  if (typeof savegame.prestigeCost !== "undefined") prestigeCost = savegame.prestigeCost;
}

function delSave() {
  localStorage.removeItem("save")
}

setInterval(function() {
  point += pointPerSecond;
  document.getElementById("showPoint").innerText = point;
  document.getElementById("gen1num").innerText = gen1s;
  document.getElementById("gen1price").innerText = gen1Cost;
  document.getElementById("gen1add").innerText = gen1gain;
  document.getElementById("gen2num").innerText = gen2s;
  document.getElementById("gen2price").innerText = gen2Cost;
  document.getElementById("gen2add").innerText = gen2gain;
  document.getElementById("gen3num").innerText = gen3s;
  document.getElementById("gen3price").innerText = gen3Cost;
  document.getElementById("gen3add").innerText = gen3gain;
  document.getElementById("showpsec").innerText = pointPerSecond;
  document.getElementById("showplvl").innerText = prestigeLevel;
  document.getElementById("prescost").innerText = prestigeCost;
  save()
}, 1000)

function buygen1() {
  if (point >= gen1Cost) {
    point -= gen1Cost;
    document.getElementById("showPoint").innerText = point;
    gen1s++;
    document.getElementById("gen1num").innerText = gen1s;
    gen1Cost += 1;
    gen1Cost *= 1.2;
//     gen1Cost = Math.round(gen1Cost);
    document.getElementById("gen1price").innerText = gen1Cost;
    pointPerSecond += gen1gain;
    document.getElementById("showpsec").innerText = pointPerSecond;
    document.getElementById("gen1add").innerText = gen1gain;
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
//     gen2Cost = Math.round(gen2Cost);
    document.getElementById("gen2price").innerText = gen2Cost;
    pointPerSecond += gen2gain;
    document.getElementById("showpsec").innerText = pointPerSecond;
    document.getElementById("gen2add").innerText = gen2gain;
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
//     gen3Cost = Math.round(gen3Cost);
    document.getElementById("gen3price").innerText = gen3Cost;
    pointPerSecond += gen3gain;
    document.getElementById("showpsec").innerText = pointPerSecond;
    document.getElementById("gen3add").innerText = gen3gain;
  } else {
    alert("You don't have enough points!")
  }
}
