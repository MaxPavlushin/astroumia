const form = document.querySelector('form');
const formSubmit = document.querySelector('button');

function openNav() {
    console.log("Work")
    if (form.checkValidity()) {
        var mesto = document.getElementById("address").value;
        var data = document.getElementById("date").value;
        var splitsData = data.split("-")
        var printData = splitsData[2] + "." + splitsData[1] + "." + splitsData[0];
        var vremya = document.getElementById("time").value;

        document.getElementById("mesto").innerHTML = mesto;
        document.getElementById("data").innerHTML = printData;
        document.getElementById("vremya").innerHTML = vremya;
        document.getElementById("myNav").style.width = "100%";
    }
    else {
        alert("Необходимо заполнить все поля формы!!!");
    }   
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    console.log(scroll)

    const scull = document.getElementById("scull"); 
    if (scroll > 550) {
        scull.style.transform = "scaleX(-1)";
    } 
    else {
        scull.style.transform = "scaleX(1)";
    }
    
});