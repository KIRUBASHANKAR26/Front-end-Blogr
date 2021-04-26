var Product = document.getElementById("product");
var productDropdown = document.getElementById("product-dropdown")
Product.onclick = function() {
    connectDropdown.classList.remove("show")
    companyDropdown.classList.remove("show")
    Product.classList.toggle("show");
    productDropdown.classList.toggle("show")
};
var Company = document.getElementById("company");
var companyDropdown = document.getElementById("company-dropdown")
Company.onclick = function() {
    connectDropdown.classList.remove("show")
    productDropdown.classList.remove("show")
    Company.classList.toggle("show");
    companyDropdown.classList.toggle("show")
};
var Connect = document.getElementById("connect");
var connectDropdown = document.getElementById("connect-dropdown")
Connect.onclick = function() { 
    productDropdown.classList.remove("show")
    companyDropdown.classList.remove("show")
    Connect.classList.toggle("show");
    connectDropdown.classList.toggle("show")
};
window.onclick = function (event) {
    if(!event.target.matches(".dropdown-btn")){
        var dropDownContent = document.getElementsByClassName("drop-down-content")
        var i;
        for (let i = 0; i < dropDownContent.length; i++) {
            var openDropdown = dropDownContent[i];
            if(openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
                Product.classList.remove("show");
                Company.classList.remove("show");
                Connect.classList.remove("show");
            }
            
        }
    }
}
var menuTool = document.getElementById("menu");
var menuClose = document.getElementById("close");
var menuContent = document.getElementById("wraper");
menuTool.onclick  = function () {
    //window.prompt("clicked")
    menuTool.classList.toggle("active");
    menuClose.classList.remove("active");
    menuClose.classList.add("active");
    menuContent.classList.toggle("active");
}
    
menuClose.onclick = function () {
    //menuTool.classList.toggle("active");
    menuContent.classList.remove("active");
    menuTool.classList.remove("active");
    menuClose.classList.remove("active");
}

