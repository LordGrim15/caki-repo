let listItems = document.querySelector("#list-items");
let btn = document.querySelector("#all")
$.ajax({
    url: 'https://raw.githubusercontent.com/LordGrim15/JSON-Menu/master/menu.json',
    dataType: 'json',
    success: function(data) {
        console.log(data);
        printItems(data, listItems);
        console.log(data.results);
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
            console.log(data);
            printItems(data, listItems);
            console.log(data.results);
        },
        error: function(err) {
            listItems.innerHTML = err.message;
        }

    })
})

function printItems(data, htmlItem) {
    for (let i = 0; i < data.results.length; i++) {

    }
    // for (const item of data.results) {
    //     htmlItem.innerHTML += `
    //     <li><img src="${item.itemImg}" width="250px" height="200px" alt="${item.name}" /></li>
    //     <li>${item.itemName}</li>
    //     <li>${item.mainCategory}</li>
    //     <li>${item.secondCategory ? item.secondCategory : "No Second Category"}</li>
    //     <li>${item.price}</li>
    //     `
    // }
}



document.addEventListener("load", function() {

})