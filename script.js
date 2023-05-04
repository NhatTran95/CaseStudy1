const btn = document.querySelectorAll(".item button")
btn.forEach(function (button, index) {
    button.addEventListener("click", function (event) {
        let btnItem = event.target;
        let product = btnItem.parentElement;
        let productImg = product.querySelector("img").src;
        let productName = product.querySelector(".name").innerText;
        let productPrice = product.querySelector(".price span").innerText;
        addcart(productImg, productName, productPrice);
    })
})
function addcart(productImg, productName, productPrice) {
    let addtr = document.createElement("tr");
    let cartItem = document.querySelectorAll("tbody tr");
    for (let i = 0; i < cartItem.length; i++) {
        let productN = document.querySelectorAll("td .name");
        if (productN[i].innerHTML == productName) {
            alert("Sản phẩm bạn chọn đã có trong giỏ hàng");
            return;
        }
    }
    let content = '<tr><td><img src=' + productImg + '><p class="name">' + productName + '</p></td><td class="price"><span>' + productPrice + '</span> vnđ</td><td><input type="number" value="1" min="1"></td><td class="delete">Xóa</td></tr>'
    addtr.innerHTML = content;
    let cartTable = document.querySelector("tbody");
    cartTable.append(addtr);
    cartTotal();
    deleteCart();
}
function cartTotal() {
    let cartItem = document.querySelectorAll("tbody tr");
    let total = 0;
    let inputvalue = 0;
    for (let i = 0; i < cartItem.length; i++) {
        let inputvalueA = cartItem[i].querySelector("input").value;
        let productPrice = cartItem[i].querySelector(".price span").innerHTML;
        productPrice = parseFloat(productPrice.replace(/\./g, ""));
        let totalA = inputvalueA * productPrice;
        total = total + totalA;
        inputvalue = Number(inputvalue) + Number(inputvalueA);
    }
    let cartTotalResult = document.querySelector(".priceTotal span");
    let cartPrice = document.querySelector("#actions span");
    cartTotalResult.innerHTML = total.toLocaleString('de-DE');
    cartPrice.innerHTML = inputvalue;
    inputChange()
}
function deleteCart() {
    let cartItem = document.querySelectorAll("tbody tr");
    for (let i = 0; i < cartItem.length; i++) {
        let productD = document.querySelectorAll(".delete");
        productD[i].addEventListener("click", function (event) {
            let cartDelete = event.target;
            let cartTr = cartDelete.parentElement;
            cartTr.remove();
            cartTotal()
        })
    }
}
function inputChange() {
    let cartItem = document.querySelectorAll("tbody tr");
    for (let i = 0; i < cartItem.length; i++) {
        let inputValue = cartItem[i].querySelector("input");
        inputValue.addEventListener("change", function () {
            cartTotal()
        })
    }
}
let showCart = document.querySelector("#actions .cartItem img");
showCart.addEventListener("click", function () {
    document.querySelector("#cart").style.right = "0";
})
let offCart = document.querySelector("#cart img");
offCart.addEventListener("click", function () {
    document.querySelector("#cart").style.right = "-100%"
})
let showLogIn = document.querySelector("#actions .user img");
showLogIn.addEventListener("click", function(){
    document.querySelector("#logIn").style.right = "300px"
})
