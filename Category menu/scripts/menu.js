let listItems = document.querySelector("#list-Items");
let threeGridView = document.querySelector("#three-grid-view");
let twoGridView = document.querySelector("#two-grid-view");
let listView = document.querySelector("#list-view");
let btnAll = document.querySelector("#all");
let itemQuantity = document.querySelector("#itemQuantity");
let plusItem = document.querySelector("#plusItem");
let minusItem = document.querySelector("#minusItem");
let currentItemQuantity = 1;
var column = 3;
let counter = 0;
let priceItem;
let dataJSON;
let dataForModal;

let itemsArr = [];

let breakfastArr = [];
let lunchArr = [];
let desertArr = [];
let drinksArr = [];
let veganArr = [];
let vegetarianArr = [];

function printCategoryAndView() {
    if (window.location.href.split("pages/")[1] === "menu.html") {
        printItems(itemsArr[0].results, listItems, column);
        dataForModal = itemsArr[0].results;
    } else if (window.location.href.split("pages/")[1] === "breakfast.html") {
        printItems(breakfastArr, listItems, column);
        dataForModal = breakfastArr;
    } else if (window.location.href.split("pages/")[1] === "lunch.html") {
        printItems(lunchArr, listItems, column);
        dataForModal = lunchArr;
    } else if (window.location.href.split("pages/")[1] === "desert.html") {
        printItems(desertArr, listItems, column);
        dataForModal = desertArr;
    } else if (window.location.href.split("pages/")[1] === "drinks.html") {
        printItems(drinksArr, listItems, column);
        dataForModal = drinksArr;
    } else if (window.location.href.split("pages/")[1] === "vegan.html") {
        printItems(veganArr, listItems, column);
        dataForModal = veganArr;
    } else if (window.location.href.split("pages/")[1] === "vegetarian.html") {
        printItems(vegetarianArr, listItems, column);
        dataForModal = vegetarianArr;
    } else {
        listItems.innerHTML = "OOPS... SOMETHING WENT WRONG!"
    }
}

$.ajax({
    url: 'https://raw.githubusercontent.com/LordGrim15/JSON-Menu/master/menu.json',
    dataType: 'json',
    success: function(data) {
        dataJSON = data
        itemsArr.push(data);
        filteredBreakfastArrFunction();
        filteredLunchArrFunction();
        filteredDesertArrFunction();
        filteredDrinksArrFunction();
        filteredVeganArrFunction();
        filteredVegetarianArrFunction();
        printCategoryAndView();
    },
    error: function(err) {
        listItems.innerHTML = err.message;
    }

});

function filteredBreakfastArrFunction() {
    breakfastArr = itemsArr[0].results.filter(function(e) {
        return e.mainCategory === "Breakfast";
    });
}

function filteredLunchArrFunction() {
    lunchArr = itemsArr[0].results.filter(function(e) {
        return e.mainCategory === "Lunch";
    });
}

function filteredDesertArrFunction() {
    desertArr = itemsArr[0].results.filter(function(e) {
        return e.mainCategory === "Desert";
    });
}

function filteredDrinksArrFunction() {
    drinksArr = itemsArr[0].results.filter(function(e) {
        return e.mainCategory === "Drink";
    });
}

function filteredVeganArrFunction() {
    veganArr = itemsArr[0].results.filter(function(e) {
        return e.mainCategory === "Vegan";
    });
}

function filteredVegetarianArrFunction() {
    vegetarianArr = itemsArr[0].results.filter(function(e) {
        return e.mainCategory === "Vegetarian";
    });
}

threeGridView.addEventListener("click", function() {
    column = 3;
    printCategoryAndView();
})
twoGridView.addEventListener("click", function() {
    column = 2;
    printCategoryAndView();
})
listView.addEventListener("click", function() {
    column = 1;
    printCategoryAndView();
})

function counterFunc() {
    counter++
    return counter;
}

function printItems(data, htmlItem, column) {
    counter = 0;
    htmlItem.innerHTML = ``;
    for (let i = 0; i < data.length; i++) {
        htmlItem.innerHTML += `
            <div class="row list-item" id="row${counterFunc()}">
                <div class="col-sm block-click" data-toggle="modal" data-target="#exampleModal" data-text="${[i]}">
                    <img src="${data[i].itemImg}" width="250px" height="200px" alt="${data[i].itemName} image" />
                    <ul class="list-items">
                    <li>${data[i].itemName}</li>
                    <li>${data[i].mainCategory}</li>
                    <li class="price-class">${data[i].price} мкд</li>
                    </ul>
                </div>
             </div>
            `;
        let row = `row${counter}`
        let rowz = document.getElementById(row);
        if (data[i + 1] != null) {
            if (column === 2 || column === 3) {
                rowz.innerHTML += `<div class="col-sm block-click" data-toggle="modal" data-target="#exampleModal" data-text="${[i+1]}">
                <img src="${data[i+1].itemImg}" width="250px" height="200px" alt="${data[i+1].name}" />
                <ul class="list-items">
                <li>${data[i+1].itemName} <br /> fdf</li>
                <li>${data[i+1].mainCategory}</li>
                <li class="price-class">${data[i+1].price} мкд</li>
                </ul>
            </div>`
            }
        }
        if (data[i + 2] != null) {
            if (column === 3) {
                rowz.innerHTML += `<div class="col-sm block-click" data-toggle="modal" data-target="#exampleModal" data-text="${[i+2]}">
            <img src="${data[i+2].itemImg}" width="250px" height="200px" alt="${data[i+2].name}" />
            <ul class="list-items">
            <li>${data[i+2].itemName}</li>
            <li>${data[i+2].mainCategory}</li>
            <li class="price-class">${data[i+2].price} мкд</li>
            </ul>
            </div>`
            }
        }
        if (column === 2) {
            i += 1
        } else if (column === 3) {
            i += 2
        }
    }
}

$('#exampleModal').on('show.bs.modal', function(event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var parsedNum = parseInt(button.data('text')); // Extract info from data-* attributes
    var modal = $(this);
    let modalImage = modal.find(`#modalImage`);
    let checkboxes = modal.find(`#checkboxes`);
    let ingredients = modal.find(`#ingredients`);
    let allergens = modal.find(`#allergens`);
    let itemPrice = modal.find(`#itemPrice`);
    priceItem = dataForModal[parsedNum].price;
    checkboxes[0].innerHTML = "";
    ingredients[0].innerHTML = "";
    allergens[0].innerHTML = "";
    currentItemQuantity = 1;
    itemQuantity.innerHTML = "1";
    modal.find('.modal-title').text(dataForModal[parsedNum].itemName);
    modalImage[0].src = dataForModal[parsedNum].itemImg;
    modalImage[0].alt = dataForModal[parsedNum].itemName;

    if (dataForModal[parsedNum].extras != null) {
        for (const item of dataForModal[parsedNum].extras) {
            checkboxes[0].innerHTML += `<input type="checkbox" id="${item.extrasName}" name="${item.extrasName}" onclick="checkCheckBox(this,'${item.price}')" />
        <label class="extras-design" for="${item.extrasName}">${item.extrasName} <span class="extras-price-color">${item.price} мкд</span></label><br>`
        }
    }
    if (dataForModal[parsedNum].ingredients != null) {
        for (const ingredient of dataForModal[parsedNum].ingredients) {
            ingredients[0].innerHTML += `<li>${ingredient}</li>`
        }
    }
    if (dataForModal[parsedNum].allergens != null) {
        for (const allergen of dataForModal[parsedNum].allergens) {
            allergens[0].innerHTML += `<li>${allergen}</li>`
        }
    }
    itemPrice[0].innerHTML = `${priceItem} мкд`;
})

function checkCheckBox(thisItem, price) {
    let parsingPriceItem = parseInt(priceItem);
    priceItem = parsingPriceItem;
    let parsingPrice = parseInt(price);
    if (thisItem.checked === true) {
        priceItem += parsingPrice;
        itemPrice.innerHTML = `${priceItem} мкд`;
        thisItem.nextElementSibling.style.color = "green";
    } else if (thisItem.checked === false) {
        priceItem -= parsingPrice;
        itemPrice.innerHTML = `${priceItem} мкд`;
        thisItem.nextElementSibling.style.color = "unset";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

plusItem.addEventListener(`click`, function() {
    if (currentItemQuantity < 10) {
        currentItemQuantity += 1
        itemQuantity.innerHTML = currentItemQuantity;
    } else {
        alert("You can't order more then 10 items!(current items: 10)");
    }
})

minusItem.addEventListener(`click`, function() {
    if (currentItemQuantity >= 2) {
        currentItemQuantity -= 1
        itemQuantity.innerHTML = currentItemQuantity;
    }
})

function printNewLine() {

}