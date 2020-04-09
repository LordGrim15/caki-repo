let listItems = document.querySelector("#list-Items");
let btn = document.querySelector("#all")
var column = 3;
let counter = 0;

$.ajax({
    url: 'https://raw.githubusercontent.com/LordGrim15/JSON-Menu/master/menu.json',
    dataType: 'json',
    success: function(data) {
        printItems(data, listItems, column);
    },
    error: function(err) {
        listItems.innerHTML = err.message;
    }

})

btn.addEventListener("click", function() {
    $.ajax({
        url: 'https://raw.githubusercontent.com/LordGrim15/JSON-Menu/master/menu.json',
        dataType: 'json',
        success: function(data) {
            printItems(data, listItems, column);
        },
        error: function(err) {
            listItems.innerHTML = err.message;
        }

    })
})

function counterFunc() {
    counter++
    return counter;
}

function printItems(data, htmlItem, column) {
    htmlItem.innerHTML = ``;
    for (let i = 0; i < data.results.length; i++) {
        htmlItem.innerHTML += `
            <div class="row list-item" id="row${counterFunc()}">
                <div class="col-sm block-click">
                    <img src="${data.results[i].itemImg}" width="250px" height="200px" alt="${data.results[i].name}" />
                    <ul class="list-items">
                    <li>${data.results[i].itemName}</li>
                    <li>${data.results[i].mainCategory}</li>
                    <li>${data.results[i].secondCategory}</li>
                    <li>${data.results[i].price} мкд</li>
                    </ul>
                </div>
             </div>
            `;
        let row = `row${counter}`
        let rowz = document.getElementById(row);
        if (data.results[i + 1] != null) {
            if (column === 2 || column === 3) {
                rowz.innerHTML += `<div class="col-sm block-click">
                <img src="${data.results[i+1].itemImg}" width="250px" height="200px" alt="${data.results[i+1].name}" />
                <ul class="list-items">
                <li>${data.results[i+1].itemName}</li>
                <li>${data.results[i+1].mainCategory}</li>
                <li>${data.results[i+1].secondCategory}</li>
                <li>${data.results[i+1].price} мкд</li>
                </ul>
            </div>`
            }
        }
        if (data.results[i + 2] != null) {
            if (column === 3) {
                rowz.innerHTML += `<div class="col-sm block-click">
            <img src="${data.results[i+2].itemImg}" width="250px" height="200px" alt="${data.results[i+1].name}" />
            <ul class="list-items">
            <li>${data.results[i+2].itemName}</li>
            <li>${data.results[i+2].mainCategory}</li>
            <li>${data.results[i+2].secondCategory}</li>
            <li>${data.results[i+2].price} мкд</li>
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