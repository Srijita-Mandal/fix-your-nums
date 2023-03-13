// Run these functions when page loads
displayItems();
updateBalance();

// Define variables for user interface
let container = document.querySelector(".container");
let balance = document.querySelector(".balance");
let progress = document.querySelector(".progress");
let addExpense = document.querySelector(".addExpense");
let addIncome = document.querySelector(".addIncome");
let productInterface = document.querySelector(".productInterface");
let addProduct = document.querySelector(".addProduct");
let updateProduct = document.querySelector(".updateProduct");
let ammountInterface = document.querySelector(".ammountInterface");
let addAmmount = document.querySelector(".addAmmount");
let updateAmmount = document.querySelector(".updateAmmount");
let transList = document.querySelector(".transList");

// Hide all elements except interface
function hideElements(){
    addExpense.classList.add("hide");
    addIncome.classList.add("hide");
    transList.classList.add("hide");
    balance.classList.add("hide");
    progress.classList.add("hide");
    updateProduct.classList.add("hide");
    updateAmmount.classList.add("hide");
}

// Show all elements except interface
function showElements(){
    addExpense.classList.remove("hide");
    addIncome.classList.remove("hide");
    transList.classList.remove("hide");
    balance.classList.remove("hide");
    progress.classList.remove("hide");
}

// Show product interface
function showProductInterface(){
    hideElements();
    productInterface.classList.remove("hide");
    addProduct.classList.remove("hide");
    container.style.flexDirection = "row";
}

// Show ammount interface
function showAmmountInterface(){
    hideElements();
    ammountInterface.classList.remove("hide");
    addAmmount.classList.remove("hide");
    container.style.flexDirection = "row";
}

// Close interface
function closeInterFace(){
    showElements();
    productInterface.classList.add("hide");
    ammountInterface.classList.add("hide");
    container.style.flexDirection = "column";
    clearInputs();
}

// Define variables for user inputs
let productName = document.querySelector(".productName");
let productType = document.querySelector(".productType");
let productCost = document.querySelector(".productCost");
let incomeSource = document.querySelector(".incomeSource");
let incomeType = document.querySelector(".incomeType");
let incomeAmmount = document.querySelector(".incomeAmmount");
let snackBar = document.querySelector(".snackBar");
let date = new Date();

// Clear all input fields
function clearInputs(){
    productName.value = "";
    productType.value = "";
    productCost.value = "";
    incomeSource.value = "";
    incomeType.value = "";
    incomeAmmount.value = "";
}

// Show pop up error
function showError(){
    snackBar.classList.add("show");
    setTimeout(() => {
        snackBar.classList.remove("show");
    }, 2000);
}

// Check product input values
function checkProductInputs(){
    let productInput = false;
    if(productName.value.trim() != 0 && productType.value.trim() != 0 && productCost.value.trim() != 0){
        productInput = true;
    }else {
        productInput = false;
    }
    return productInput;
}

// Check ammount input values
function checkAmmountInputs(){
    let ammountInput = false;
    if(incomeSource.value.trim() != 0 && incomeType.value.trim() != 0 && incomeAmmount.value.trim() != 0){
        ammountInput = true;
    }else {
        ammountInput = false;
    }
    return ammountInput;
}

// Create product object
function createProduct(){
    product = {
        obj: "product",
        name: productName.value,
        pType: productType.value,
        cost: productCost.value,
        time: date.toLocaleDateString()
    }
    return product;
}

// Create ammount object
function createAmmount(){
    ammount = {
        obj: "ammount",
        source: incomeSource.value,
        iType: incomeType.value,
        ammount: incomeAmmount.value,
        time: date.toLocaleDateString()
    }
    return ammount;
}

// Update App
function updateApp(){
    clearInputs();
    closeInterFace();
    displayItems();
    updateBalance();
}

// Get items from local storage
function getStorage(){
    let tasksObj;
    let webTasks = localStorage.getItem("localTasks");
    if(webTasks == null){
        tasksObj = [];
    } else {
        tasksObj = JSON.parse(webTasks);
    }
    return tasksObj;
}

// Set items in local storage
function setStorage(data){
    localStorage.setItem("localTasks", JSON.stringify(data));
}

// Add products in local storage
function addProducts(){
    let tasksObj = getStorage();
    let checkProduct = checkProductInputs();
    if(checkProduct === true){
        let product = createProduct();
        tasksObj.unshift(product);
        setStorage(tasksObj);
        updateApp();
    } else {
        showError();
    }
}

// Add ammounts in local storage
function addAmmounts(){
    let tasksObj = getStorage();
    let checkAmmount = checkAmmountInputs();
    if(checkAmmount === true){
        let ammount = createAmmount();
        tasksObj.unshift(ammount);
        setStorage(tasksObj);
        updateApp();
    } else {
        showError();
    }
}

// Display items
function displayItems(){
    let tasksObj = getStorage();
    let transList = document.querySelector(".transList");
    let html = "";
    tasksObj.forEach((item, index)=> {
        html += `
        <div class="trans">
        <div class="item">
            <div class="iconDetails">
                <ion-icon style="${item.obj == "product" ? "background: var(--secondary-color)" : "background: var(--primary-color)"}" class="transIcon" name=${item.obj == "product" ? "pricetag" : "cash"}></ion-icon>
                <div class="itemDetails">
                    <span class="itemName">
                    ${item.obj == "product" ? item.name : item.source}
                    </span>
                    <span class="itemType">
                    ${item.obj == "product" ? item.pType : item.iType}
                    </span>
                </div>
            </div>
            <div class="itemDetails">
                <span style="${item.obj == "product" ? 'color: red' : 'color: green'}" class="itemPrice">
                ${item.obj == "product" ? "₹" + item.cost : "₹" + item.ammount}
                </span>
                <span class="itemTime">
                    ${item.time}
                </span>
            </div>
        </div>
        <div class="actions">
            <button onclick="showEdit(${index})" class="edit">
                <ion-icon class="actionIcon" name="create"></ion-icon>
                <span class="editTitle">
                    Edit
                </span>
            </button>
            <button onclick="showDelete(${index})" class="delete">
                <ion-icon class="actionIcon" name="trash"></ion-icon>
                <span class="deleteTitle">
                    Delete
                </span>
            </button>
        </div>
    </div>
        `
    });

    if(tasksObj.length != 0){
        transList.innerHTML = html;
    } else {
        transList.innerHTML = `<span class="noTasks">There are no transactions to show!</span>`;
    }
}

// Filter income objects
function filterIncome(){
    let tasksObj = getStorage();
    let income = tasksObj.filter((item)=> {
        return item.obj === "ammount";
    });
    return income;
}

// Filter expense objects
function filterExpense(){
    let tasksObj = getStorage();
    let expense = tasksObj.filter((item)=> {
        return item.obj === "product";
    });
    return expense;
}

// Calculate sum of income
function calculateIncome(){
    let income = filterIncome();
    let totalIncome = income.map(cash => cash.ammount).reduce((total, cash)=> Number(cash) + Number(total), 0);
    return totalIncome;
}

// Calculate sum of expense
function calculateExpense(){
    let expense = filterExpense();
    let totalExpense = expense.map(spent => spent.cost).reduce((total, spent)=> Number(spent) + Number(total), 0);
    return totalExpense;
}

// Get main balance
function getBalance(){
    let totalIncome = calculateIncome();
    let totalExpense = calculateExpense();
    let totalBalance = totalIncome - totalExpense;
    return totalBalance;
}

// Update Balance
function updateBalance(){

    // Get balance values
    let totalIncome = calculateIncome();
    let totalExpense = calculateExpense();
    let totalBalance = getBalance();

    // Define variables for update balance
    let incomeValue = document.querySelector(".incomeValue");
    let expenseValue = document.querySelector(".expenseValue");
    let totalBalVal = document.querySelector(".totalBalVal");

    // Update balance
    incomeValue.textContent = "₹" + totalIncome + ".00";
    expenseValue.textContent = "₹" + totalExpense + ".00";
    totalBalVal.textContent = "₹" + totalBalance + ".00";

    // Set progress
    let progress = document.querySelector(".progress");
    progress.max = totalIncome;
    progress.value = totalExpense;
}

// Define variables for delete interface
let deleteInterface = document.querySelector(".deleteInterface");
let warningMessage = document.querySelector(".warningMessage");
let deleteIndex = 0;

// Show delete interface
function showDelete(index){
    deleteIndex = index;
    let itemName = "";
    let tasksObj = getStorage();
    hideElements();
    container.style.flexDirection = "row";
    deleteInterface.style.display = "flex";
    if(tasksObj[index].obj === "product"){
        itemName = tasksObj[index].name;
    } else {
        itemName = tasksObj[index].source;
    }
    warningMessage.innerHTML = `Are you sure want to permanently delete this <span style="font-weight: bold">${itemName}</span>?`
}

// Hide delete interface
function hideDelete(){
    showElements();
    container.style.flexDirection = "column";
    deleteInterface.style.display = "none";
}

// Delete a transaction
function deleteTrans(){
    let tasksObj = getStorage();
    tasksObj.splice(deleteIndex, 1);
    setStorage(tasksObj);
    hideDelete();
    updateApp();
}

// Define edit index
let editIndex = 0;

// Show edit inter face
function showEdit(index){
    editIndex = index;
    let tasksObj = getStorage();
    hideElements();
    container.style.flexDirection = "row";
    if(tasksObj[index].obj === "product"){
        productInterface.classList.remove("hide");
        productName.value = tasksObj[index].name;
        productType.value = tasksObj[index].pType;
        productCost.value = tasksObj[index].cost;
        addProduct.classList.add("hide");
        updateProduct.classList.remove("hide");
    } else {
        ammountInterface.classList.remove("hide");
        incomeSource.value = tasksObj[index].source;
        incomeType.value = tasksObj[index].iType;
        incomeAmmount.value = tasksObj[index].ammount;
        addAmmount.classList.add("hide");
        updateAmmount.classList.remove("hide");
    }
}

// Update transactions
function updateTransactions(){
    let tasksObj = getStorage();
    if(tasksObj[editIndex].obj === "product"){
        tasksObj[editIndex].name = productName.value;
        tasksObj[editIndex].pType = productType.value;
        tasksObj[editIndex].cost = productCost.value;
    } else {
        tasksObj[editIndex].source = incomeSource.value;
        tasksObj[editIndex].iType = incomeType.value;
        tasksObj[editIndex].ammount = incomeAmmount.value;
    }
    setStorage(tasksObj);
    container.style.flexDirection = "column";
    updateApp();
}
