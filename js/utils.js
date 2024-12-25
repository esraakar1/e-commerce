// localstorage a ekleme yapacak fonksiyon 
export const saveToLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
};

// localStorage dan verileri alan fonksiyon 

export const getFromLocalStorage = () => {
  const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
};

// sepet toplamını bulan fonksiyon 

export const calculateCartTotal = (cart) => {

    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // sum biriken miktar item ise aktif eleman  
};

// sepet iconunu güncelleyen fonksiyon 

export const updateCartIcon = (cart) => {
    // sepet iconuna ve quantity değerine eriş 
    const cartIcon = document.querySelector("#cart-icon");
    const i = document.querySelector(".bxs-shopping-bag");

    // sepetteki toplam ürün sayısına eriş 
    let totalQuantity = cart.reduce((sum, item) => {
       return sum + item.quantity;

    }, 0);


    // sepet iconunun yanındaki veriyi güncelle 
    i.setAttribute('data-quantity', totalQuantity);
};