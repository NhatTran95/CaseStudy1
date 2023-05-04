class ListProducts{
    constructor(img, name, desc, price) {
        this.img = img;
        this.name = name;
        this.desc = desc;
        this.price = price;
    }
    getImg(){
        return this.img
    }
    getName() {
        return this.name
    }
    getDesc(){
        return this.desc
    }
    getPrice(){
        return this.price
    }
}
let products = [
    new ListProducts("assets/product_1.png", "Orient Sports Diver's Watch", "Nổi bật với Dây đeo tông màu bạc, Vỏ tông màu bạc, Tinh thể sapphire chống trầy xước", "3.969.996"),
    new ListProducts("assets/product_2.png", "Orient Bambino Watch", "Đồng hồ đeo tay bằng da và thép không gỉ tự động Orient '2nd Gen Bambino Version III' của Nhật Bản", "2.899.999"),
    new ListProducts("assets/product_3.png", "Casio MDV106 Watch", "Đồng hồ Casio nam MDV106-1AV 200M Duro Analog, màu đen, khả năng chống nước 200M", "3.799.999"),
    new ListProducts("assets/product_4.png", "Timex X Todd Snyder Mk1 'Black + White' 40mm Watch", "Nổi bật với hai màu đen và trắng, chất liệu thép không gỉ", "4.686.686"),
    new ListProducts("assets/product_5.png", "Audemars Piguet Royal Oak Offshore Watch", "Kích cỡ 42mm, độ dày 15.3mm, khả năng chống nước 100 M", "4.999.966"),
    new ListProducts("assets/product_6.png", "Hublot Big Bang Sang Bleu II Watch", "Táo bạo, mạnh mẽ, độc đáo và kỹ thuật, chất liệu gốm sứ công nghệ cao siêu bên chống trầy xước", "5.899.999"),
    new ListProducts("assets/product_7.png", "Shinola Sea Creatures Watch", "Chế tạo từ nhựa có nguồn gốc từ đại dương với lõi bằng thép không gỉ, nhập khẩu từ Thụy Sỹ", "3.769.796"),
    new ListProducts("assets/product_8.png", "Breitling Exospace B55 SuperQuartz Titanium Watch", "Vỏ titan đen khung hai chiều,thấu kính tinh thể sapphire", "4.969.696")
]
function displayProducts() {
    let content = ``;
    for (let i = 0; i < products.length; i++) {
        content += `<div class="item">
        <img src=${products[i].getImg()} alt="">
        <div class="stars">
            <span><img src="assets/star.png" alt=""></span>
            <span><img src="assets/star.png" alt=""></span>
            <span><img src="assets/star.png" alt=""></span>
            <span><img src="assets/star.png" alt=""></span>
            <span><img src="assets/star.png" alt=""></span>
        </div>
        <div class="name">${products[i].getName()}</div>
        <div class="desc">${products[i].getDesc()}</div>
        <div class="price"><span>${products[i].getPrice()}</span> vnđ</div>
        <button>Thêm vào giỏ hàng</button>
        </div>`
    }
    document.getElementById("list-products").innerHTML = content;
}
displayProducts();
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
