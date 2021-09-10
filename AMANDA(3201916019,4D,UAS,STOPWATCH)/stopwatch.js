// Waktu Saat Ini
setInterval(myTime, 1000);

function myTime() {
    const d = new Date();
    document.getElementById("waktu").innerHTML = d.toLocaleTimeString();
}

// Stopwatch
let minutes = 0;
let seconds = 0;
let miliseconds = 0;

let displayMilisec = miliseconds;
let displaySec = seconds;
let displayMins = minutes;

let interval = null;

let status = "stopped";

let lapNow = null;

function start() {
    miliseconds++;

    if (miliseconds < 10) {
        displayMilisec = "0" + miliseconds.toString();
    } else {
        displayMilisec = miliseconds;
    }

    if (seconds < 10) {
        displaySec = "0" + seconds.toString();
    } else {
        displaySec = seconds;
    }

    if (minutes < 10) {
        displayMins = "0" + minutes.toString();
    } else {
        displayMins = minutes;
    }

    if (miliseconds / 100 === 1) {
        seconds++;
        miliseconds = 0;
        if (seconds / 60 === 1) {
            minutes++;
            seconds = 0;
        }
    }

    document.getElementById("milidetik").innerHTML = miliseconds;
    document.getElementById("detik").innerHTML = seconds;
    document.getElementById("menit").innerHTML = minutes;
}

function startstop() {
    if (status === "stopped") {
        interval = window.setInterval(start, 10);
        document.getElementById("start").innerHTML = "STOP";
        status = "started";
    } else {
        window.clearInterval(interval);
        document.getElementById("start").innerHTML = "START";
        status = "stopped";
    }
}

function reset() {
    window.clearInterval(interval);
    miliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("milidetik").innerHTML = "00";
    document.getElementById("detik").innerHTML = "00";
    document.getElementById("menit").innerHTML = "00";
    document.getElementById("start").innerHTML = "START";
    tampilan1.innerHTML = "00:00:00";
    tampilan2.innerHTML = "00:00:00";
    tampilan3.innerHTML = "00:00:00";
    tampilan4.innerHTML = "00:00:00";
    tampilan5.innerHTML = "00:00:00";
    tampilan6.innerHTML = "00:00:00";
    tampilan7.innerHTML = "00:00:00";
    tampilan8.innerHTML = "00:00:00";
    document.getElementById("selesaisatu").disabled = false;
    document.getElementById("selesaidua").disabled = false;
    document.getElementById("selesaitiga").disabled = false;
    document.getElementById("selesaiempat").disabled = false;
    document.getElementById("selesailima").disabled = false;
    document.getElementById("selesaienam").disabled = false;
    document.getElementById("selesaitujuh").disabled = false;
    document.getElementById("selesaidelapan").disabled = false;
    status = "stopped";
}

function selesaisatu() {
    lapNow = `${minutes} : ${seconds} : ${miliseconds}`;
    tampilan1.innerHTML = lapNow.toString();
    document.getElementById("selesaisatu").disabled = true;
}

function selesaidua() {
    lapNow = `${minutes} : ${seconds} : ${miliseconds}`;
    tampilan2.innerHTML = lapNow.toString();
    document.getElementById("selesaidua").disabled = true;
}

function selesaitiga() {
    lapNow = `${minutes} : ${seconds} : ${miliseconds}`;
    tampilan3.innerHTML = lapNow.toString();
    document.getElementById("selesaitiga").disabled = true;
}

function selesaiempat() {
    lapNow = `${minutes} : ${seconds} : ${miliseconds}`;
    tampilan4.innerHTML = lapNow.toString();
    document.getElementById("selesaiempat").disabled = true;
}

function selesailima() {
    lapNow = `${minutes} : ${seconds} : ${miliseconds}`;
    tampilan5.innerHTML = lapNow.toString();
    document.getElementById("selesailima").disabled = true;
}

function selesaienam() {
    lapNow = `${minutes} : ${seconds} : ${miliseconds}`;
    tampilan6.innerHTML = lapNow.toString();
    document.getElementById("selesaienam").disabled = true;
}

function selesaitujuh() {
    lapNow = `${minutes} : ${seconds} : ${miliseconds}`;
    tampilan7.innerHTML = lapNow.toString();
    document.getElementById("selesaitujuh").disabled = true;
}

function selesaidelapan() {
    lapNow = `${minutes} : ${seconds} : ${miliseconds}`;
    tampilan8.innerHTML = lapNow.toString();
    document.getElementById("selesaidelapan").disabled = true;
}

