function addCar() {

    let name = document.getElementById("carName").value;
    let description = document.getElementById("carDescription").value;
    let price = document.getElementById("carPrice").value;

    if (name === "" || description === "" || price === "") {
        alert("Completează toate câmpurile!");
        return;
    }

    if (isNaN(price)) {
        alert("Prețul trebuie să conțină doar cifre!");
        return;
    }

    let car = document.createElement("div");
    car.className = "card";

    let title = document.createElement("h3");
    title.textContent = name;

    let desc = document.createElement("p");
    desc.textContent = description;

    let priceTag = document.createElement("b");
    priceTag.textContent = `${price} MDL / zi`;

    let link = document.createElement("a");
    link.className = "btn";
    link.href = "#";
    link.textContent = "Închiriază";

    car.append(title, desc, document.createElement("br"), document.createElement("br"), priceTag, document.createElement("br"), document.createElement("br"), link);

    document.getElementById("newCars").appendChild(car);

    document.getElementById("carName").value = "";
    document.getElementById("carDescription").value = "";
    document.getElementById("carPrice").value = "";
}