const url = "https://raw.githubusercontent.com/LordGrim15/JSON-Menu/master/menu.json";
let mostOrderedProducts = [];

let mainSectionOne = document.getElementById("main-section-one");
let mainSectionTwo = document.getElementById("main-section-two");

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        getMostOrdered(data.results);
        printProducts(mostOrderedProducts, mainSectionOne);
        printProducts(mostOrderedProducts, mainSectionTwo);

    })
    .catch(function (error) {
        console.log(error);

    });

function getMostOrdered(data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].ordered === "most ordered") {
            mostOrderedProducts.push(data[i])
        }
    }

}


function printProducts(data, element) {
    counter = 0;
    element.innerHTML = ``;
    if (element === mainSectionTwo) {
        for (let i = 4; i < 8; i++) {
            element.innerHTML += `
            <figure>
                <img src="${data[i].itemImg}" width="250px" height="200px" alt="${data[i].name}" />  
                <figcaption>
                <h4>${data[i].itemName}</h4>
                <string>${data[i].price} мкд</strong>
                </figcaption>
            </figure>    
            `
        }
    } else {
        for (let i = 0; i < 4; i++) {
            element.innerHTML += `
            <figure>
                <img src="${data[i].itemImg}" width="250px" height="200px" alt="${data[i].name}" />  
                <figcaption>
                <h4>${data[i].itemName}</h4>
                <string>${data[i].price} мкд</strong>
                </figcaption>
            </figure>    
            `
        }
    }




}