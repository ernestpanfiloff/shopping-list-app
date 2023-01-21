const itemInput = document.querySelector("#item-input");
const quantityInput = document.querySelector("#quantity-input");
const addButton = document.querySelector("#add-button")
const shoppingList = document.querySelector(".list-group")
const clearButton = document.querySelector("#clear-button");

addButton.addEventListener("click", () => {
    addItem();
    clearButton();
})

clearButton.addEventListener("click", () => {
    clearList();
})


function addItem() {
    const item = itemInput.value;
    const quantity = quantityInput.value;
    const newItem = document.createElement("li");
    newItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
    const itemQuantity = document.createElement("span");
    itemQuantity.classList.add("badge", "bg-primary", "rounded-pill");
    const itemQuantityText = document.createTextNode(quantity);
    itemQuantity.appendChild(itemQuantityText);
    const itemName = document.createTextNode(item);


    if (item.length > 0) {
        newItem.appendChild(itemName);
        newItem.appendChild(itemQuantity);
        shoppingList.appendChild(newItem);
        clearButton.classList.remove("d-none");
    } else {
        document.itemInput = itemInput.classList.add("is-invalid");
    }

    
    itemInput.value = "";
    quantityInput.value = "";
}

function clearList() {
    while (shoppingList.firstChild) {
        shoppingList.removeChild(shoppingList.firstChild);
        clearButton.classList.add("d-none");
    }
}

function darkModeOn() {
    document.body.classList.add("bg-primary");
    document.querySelector("h1").classList.add("text-light");
    document.querySelector("p").classList.add("text-light");
    document.querySelector(".col-form-label").classList.add("text-light");
}