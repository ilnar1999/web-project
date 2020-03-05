$(document).ready(function() {
    PopUpHide();
});

function PopUpShow(type) {
    if (type == "sedan") {
        document.getElementById("image").setAttribute("src", "picture/sedan.png");
        document.getElementById("brand").innerHTML = "<b>Brand:</b> Mercedes-Benz";
        document.getElementById("model").innerHTML = "<b>Model:</b> A-Class 2019";
        document.getElementById("color").innerHTML = "<b>Color:</b> Red";
        document.getElementById("price").innerHTML = "<b>Price:</b> 35 000$";
    } else if (type == "suv") {
        document.getElementById("image").setAttribute("src", "picture/suv.png");
        document.getElementById("brand").innerHTML = "<b>Brand:</b> Volkswagen";
        document.getElementById("model").innerHTML = "<b>Model:</b> Tiguan";
        document.getElementById("color").innerHTML = "<b>Color:</b> Gray";
        document.getElementById("price").innerHTML = "<b>Price:</b> 27 000$";
    } else if (type == "sport_car") {
        document.getElementById("image").setAttribute("src", "picture/sport_car.png");
        document.getElementById("brand").innerHTML = "<b>Brand:</b> Audi";
        document.getElementById("model").innerHTML = "<b>Model:</b> R8 V10 2019";
        document.getElementById("color").innerHTML = "<b>Color:</b> Gray";
        document.getElementById("price").innerHTML = "<b>Price:</b> 250 000$";
    }
    $("#carInformation").show();
}

function PopUpHide() {
    $("#carInformation").hide();
}