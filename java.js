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
var prestigeCost = 1;

function update() {
    document.getElementById("showPoint").innerText = point;
    document.getElementById("prescost").innerText = prestigeCost;
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
    if (point < gen1Cost) {
      document.getElementById('buyButton1').style.backgroundColor = '#f55b5b';
    }else {
      document.getElementById('buyButton1').style.backgroundColor = '#4CAF50';
    }
    if (point < gen2Cost) {
      document.getElementById('buyButton2').style.backgroundColor = '#f55b5b';
    }else {
      document.getElementById('buyButton2').style.backgroundColor = '#4CAF50';
    }
    if (point < gen3Cost) {
      document.getElementById('buyButton3').style.backgroundColor = '#f55b5b';
    }else {
      document.getElementById('buyButton3').style.backgroundColor = '#4CAF50';
    }
    if (point < prestigeCost) {
      document.getElementById('prest').style.backgroundColor = '#f55b5b';
    }else {
      document.getElementById('prest').style.backgroundColor = '#4CAF50';
    }
    // document.getElementById("numba1").innerHTML = username + prestigeLevel;
}
// let username = prompt("Please enter a username");
// if (username != null) {
//   document.getElementById("numba1").innerHTML = username + ":" + prestigeLevel;
// }


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
  location.reload()
}

setInterval(function() {
    if (gen1s >= 1){
    point += pointPerSecond * .25;
    // point /= 1
    update();
    }
}, 250)

// setInterval(function() {
//     parseFloat(point.toFixed(2))
// }, 0)

// setInterval(function() {
//     save();
// }, 1000)


function buygen1() {
  if (point >= gen1Cost) {
    point -= gen1Cost;
    gen1s++;
    gen1Cost += 1;
    gen1Cost *= 1.2;
    gen1Cost = Math.round(gen1Cost)
    pointPerSecond += gen1gain;
    update();
  }else {
  }
}
function buygen2() {
  if (point >= gen2Cost) {
    point -= gen2Cost;
    gen2s++;
    gen2Cost *= 1.2;
    gen2Cost = Math.round(gen2Cost)
    pointPerSecond += gen2gain;
    update();
  }else {
}
}
function buygen3() {
  if (point >= gen3Cost) {
    point -= gen3Cost;
    gen3s++;
    gen3Cost *= 1.2;
    gen3Cost = Math.round(gen3Cost)
    pointPerSecond += gen3gain;
    update();
  }else {
  }
}

function prestige() {
  if (confirm("Are you sure?") == true){
if (point >= prestigeCost) {
  point -= point;
  pointPerSecond -= pointPerSecond;
  gen1s -= gen1s;
  gen2s -= gen2s;
  gen3s -= gen3s;
  gen1Cost = 0;
  gen2Cost = 500;
  gen3Cost = 3000;
  prestigeLevel++;
  prestigeCost *= 2;
  gen1gain *= 1.5;
  gen1gain = Math.round(gen1gain)
  gen2gain *= 1.5;
  gen2gain = Math.round(gen2gain)
  gen3gain *= 1.5;
  gen3gain = Math.round(gen3gain)
  update();
} else {
}
}
}

function setting() {
    document.getElementById("settingsbox").style.display = "block";
    document.getElementById("gam2").style.display = "none";
  }

  function back() {
      document.getElementById("settingsbox").style.display = "none";
      document.getElementById("gam2").style.display = "block";
    }
 