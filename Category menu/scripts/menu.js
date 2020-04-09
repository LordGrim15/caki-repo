let listItems = document.querySelector("#list-Items");
let btn = document.querySelector("#all")
var column = 3;

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

function printItems(data, htmlItem, column) {
    htmlItem.innerHTML = ``;
    if (column === 1) {
        for (const item of data.results) {
            htmlItem.innerHTML += `
            <div class="row">
            <div class="col-sm">
                <img src="${item.itemImg}" width="250px" height="200px" alt="${item.name}" />
                <ul>
                <li>${item.itemName}</li>
                <li>${item.mainCategory}</li>
                <li>${item.secondCategory}</li>
                <li>${item.price}</li>
                </ul>
            </div>
            </div>`
        }
    } else if (column === 2) {
        for (let i = 0; i < data.results.length; i++) {
            htmlItem.innerHTML += `
        <div class="row">
            <div class="col-sm">
                <img src="${data.results[i].itemImg}" width="250px" height="200px" alt="${data.results[i].name}" />
                <ul>
                <li>${data.results[i].itemName}</li>
                <li>${data.results[i].mainCategory}</li>
                <li>${data.results[i].secondCategory}</li>
                <li>${data.results[i].price}</li>
                </ul>
            </div>
            <div class="col-sm">
                <img src="${data.results[i+1].itemImg}" width="250px" height="200px" alt="${data.results[i+1].name}" />
                <ul>
                <li>${data.results[i+1].itemName}</li>
                <li>${data.results[i+1].mainCategory}</li>
                <li>${data.results[i+1].secondCategory}</li>
                <li>${data.results[i+1].price}</li>
                </ul>
            </div>
        </div>
        `;
            i += 1
        }
    } else {
        for (let i = 0; i < data.results.length; i++) {
            htmlItem.innerHTML += `
        <div class="row">
            <div class="col-sm">
                <img src="${data.results[i].itemImg}" width="250px" height="200px" alt="${data.results[i].name}" />
                <ul>
                <li>${data.results[i].itemName}</li>
                <li>${data.results[i].mainCategory}</li>
                <li>${data.results[i].secondCategory}</li>
                <li>${data.results[i].price}</li>
                </ul>
            </div>
            <div class="col-sm">
                <img src="${data.results[i+1].itemImg}" width="250px" height="200px" alt="${data.results[i+1].name}" />
                <ul>
                <li>${data.results[i+1].itemName}</li>
                <li>${data.results[i+1].mainCategory}</li>
                <li>${data.results[i+1].secondCategory}</li>
                <li>${data.results[i+1].price}</li>
                </ul>
            </div>
            <div class="col-sm">
                <img src="${data.results[i+2].itemImg}" width="250px" height="200px" alt="${data.results[i+2].name}" />
                <ul>
                <li>${data.results[i+2].itemName}</li>
                <li>${data.results[i+2].mainCategory}</li>
                <li>${data.results[i+2].secondCategory}</li>
                <li>${data.results[i+2].price}</li>
                </ul>
            </div>
        </div>
        `;
            i += 2
        }
    }
}