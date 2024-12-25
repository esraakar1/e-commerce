import { addToCart, displayCartTotal, renderCartItems} from "./cart.js";
import { fetchProducts, renderProducts } from "./product.js";
import { getFromLocalStorage, updateCartIcon } from "./utils.js";

const menuIcon = document.querySelector("#menu-icon");
const menu = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    menu.classList.toggle("open-menu");
});


// ürünleri ana sayfadayken api dan almalıyız bunun için windox.location ile tarayıcı path ini izleyip karar veririz
document.addEventListener("DOMContentLoaded", async () => {
// sepet verisine eriş 
let cart = getFromLocalStorage();

   // tarayıcıda hangi sayfadayız bunu kontrol et 
if(window.location.pathname.includes("cart.html")) {
    // cart sayfası  
    console.log(`cart sayfası`);

    renderCartItems();
    displayCartTotal();
} else {
    // anasayfa işlemleri 
     console.log(`ana sayfa`);  
    const product = await fetchProducts();
    // console.log(data); 
   renderProducts(product, (event) => {
    addToCart(event, product);
   });
} 

// sepet iconunu güncelle 
updateCartIcon(cart);
});

// eğer anasayfadaysak bize ürünleri getirsin 