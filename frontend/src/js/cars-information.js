$(document).ready(function() {
    popUpHide();
    fillCarsOnPage();
});

function carInformationShow(car_id) {
    let car = getCarById(car_id);
    document.getElementById("image").setAttribute("src", car.image);
    document.getElementById("brand").innerHTML = "<b>Brand:</b> " + car.brand;
    document.getElementById("model").innerHTML = "<b>Model:</b> " + car.model;
    document.getElementById("color").innerHTML = "<b>Color:</b> " + car.color;
    document.getElementById("price").innerHTML = "<b>Price:</b> " + car.price;
    $("#carInformation").show();
}

function createCarShow(category) {
    document.getElementById("setCategory").setAttribute("value", category);
    $("#createCar").show();
}

function popUpHide() {
    $("#carInformation").hide();
    $("#createCar").hide();
}

function fillCarsOnPage() {
    let cars = getCars();
    cars.forEach(function(car, i, cars) {
        for (let j = 0; j < 6 - i; j++) {
            cars.push(car);
        }
    });
    cars.forEach(function(car, i) {
        addCarOnPage(car, i);
    });
    document.body.setAttribute("class", JSON.stringify(cars));
}

function getCars() {
    let json = document.body.getAttribute("class"); // cars are stored here as json
    return JSON.parse(json);
}

function getCarById(car_id) {
    let cars = getCars();
    return cars[car_id];
}

function createCar() {
    let car = {
        "image": document.getElementById("setImage").value,
        "brand": document.getElementById("setBrand").value,
        "model": document.getElementById("setModel").value,
        "color": document.getElementById("setColor").value,
        "price": document.getElementById("setPrice").value,
        "category": document.getElementById("setCategory").value
    };
    let cars = getCars();
    cars.push(car);
    addCarOnPage(car, cars.length - 1);
    document.body.setAttribute("class", JSON.stringify(cars));
    popUpHide();
}

function addCarOnPage(car, car_id) {
    let a = document.createElement('a');
    let img = document.createElement('img');
    img.setAttribute("class", "category-img");
    img.setAttribute("src", car.image);
    a.append(img);
    a.setAttribute("id", car_id);
    a.setAttribute("href", "##");
    a.setAttribute("onclick", "carInformationShow(\"" + a.id + "\")");
    document.getElementById(car.category).before(a);
}