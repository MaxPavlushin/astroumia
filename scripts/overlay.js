const form = document.querySelector('form');
const formSubmit = document.querySelector('button');

function openNav() {
    if (form.checkValidity()) {
        var mesto = document.getElementById("address").value;
        var data = document.getElementById("date").value;
        var name = document.getElementById("name").value;
        var splitsData = data.split("-");
        var printData = splitsData[2] + "." + splitsData[1] + "." + splitsData[0];
        var vremya = document.getElementById("time").value;
        var gender = document.querySelector('input[type=radio]');
        if (gender.checked) {
            var gender = "Женщина";
        } 
        else {
            var gender = "Мужчина";
        }
     
        document.getElementById("mesto").innerHTML = mesto;
        document.getElementById("data").innerHTML = printData;
        document.getElementById("imya").innerHTML = name;
        document.getElementById("vremya").innerHTML = vremya;
        document.getElementById("pol").innerHTML = gender;
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

    const scull = document.getElementById("scull"); 
    if (scroll > 700) {
        scull.style.transform = "scaleX(-1)";
    } else {
        scull.style.transform = "scaleX(1)";
    }

    let image = document.getElementById("moon");
    let overFlow = 0;

    if (scroll>1200) {
        image.style.opacity = "0";
    } else {
        image.style.opacity = "1";
    }
    });



