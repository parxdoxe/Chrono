var hour = 0;
var min = 0;
var sec = 0;
var mili = 0;
var t;
var chronoStart = false;

var time = document.getElementById("time");
var start = document.getElementById("start");
var reset = document.getElementById("reset");
var stp = document.getElementById("stop");
var save = document.getElementById("save");
var saved = document.getElementById("saved");
var clos = document.getElementById("close");

function seconde() {
  if (sec > 60) {
    sec = 0;
  } else {
    time.textContent = sec;
  }
  sec++;
}

function minute() {
  if (sec > 60) {
    min++;
    sec = 0;
  }
  if (min > 60) {
    min = 0;
  }
}

function h() {
  if (min > 60) {
    hour++;
  }
  if (hour > 24) {
    hour = 0;
  }
}

start.addEventListener("click", function () {
  save.style.display = "block";
  start.style.display = "none";
  t = setInterval(function () {
    seconde();
    minute();
    h();

    if (sec < 10) {
      time.textContent = "0" + hour + ":" + "0" + min + ":" + "0" + sec;
    } else if (min < 10) {
      time.textContent = "0" + hour + ":" + "0" + min + ":" + sec;
    } else if (hour < 10) {
      time.textContent = "0" + hour + ":" + min + ":" + sec;
    } else {
      time.textContent = hour + ":" + min + ":" + sec;
    }
  }, 1000);
});

reset.addEventListener("click", function () {
  hour = 0;
  min = 0;
  sec = 0;
  time.textContent = "0" + hour + ":" + "0" + min + ":" + "0" + sec;
  clearInterval(t);
  save.style.display = "none";
  start.style.display = "block";
});

stp.addEventListener("click", function () {
  start.style.display = "";
  clearInterval(t);
});

save.addEventListener("click", function () {
  if (sec < 10) {
    time.textContent = "0" + hour + ":" + "0" + min + ":" + "0" + sec;
  } else if (min < 10) {
    time.textContent = "0" + hour + ":" + "0" + min + ":" + sec;
  } else if (hour < 10) {
    time.textContent = "0" + hour + ":" + min + ":" + sec;
  } else {
    time.textContent = hour + ":" + min + ":" + sec;
  }
  saved.style.display = "block";
  saved.textContent = time.textContent;
  clos.style.display = "block";
});

clos.addEventListener("click", function () {
  clos.style.display = "none";
  saved.style.display = "none";
});

window.addEventListener("keydown", function (event) {
  if (event.key == " ") {
    if (!chronoStart) {
      chronoStart = true;

      save.style.display = "block";
      start.style.display = "none";
      t = setInterval(function () {
        seconde();
        minute();
        h();
        if (sec < 10) {
          time.textContent = "0" + hour + ":" + "0" + min + ":" + "0" + sec;
        } else if (min < 10) {
          time.textContent = "0" + hour + ":" + "0" + min + ":" + sec;
        } else if (hour < 10) {
          time.textContent = "0" + hour + ":" + min + ":" + sec;
        } else {
          time.textContent = hour + ":" + min + ":" + sec;
        }
      }, 1000);
    }
  } else {
    chronoStart = false;
    clearInterval(t);
  }

  if (event.key == "r") {
  }
});

time.textContent = "0" + hour + ":" + "0" + min + ":" + "0" + sec;
