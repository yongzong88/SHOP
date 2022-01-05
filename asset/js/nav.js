function cansee() {
    document.getElementById("nav").style.display = "block";
}

function nocansee() {
    document.getElementById("nav").style.display = "none";
}

function sign() {
    document.getElementById("SIGN").style.display = "block";
    document.getElementById("main").style.opacity = "0.1"
}

function froma() {
    document.getElementById("froma").style.display = "block"
    document.getElementById("fromb").style.display = "none";
    document.getElementById("INSIGN").style.height = "368px"
    document.getElementById("ia").style.display = "block"
    document.getElementById("ib").style.display = "none"
}

function fromb() {
    document.getElementById("fromb").style.display = "block"
    document.getElementById("froma").style.display = "none";
    document.getElementById("INSIGN").style.height = "456px"
    document.getElementById("ia").style.display = "none"
    document.getElementById("ib").style.display = "block"

}