// ürünleri api dan alan fonksiyon 
export const fetchProducts = async () => {
    try {
        const response = await fetch("db.json");
    
        // eğer hata yoksa veriyi dönüştür
        if(!response.ok) {
            throw new Error("yanlış URL");
        }
      return await response.json();
    } catch (error) {
      console.log(`Hataa: ${error}`);

      return [];
    }
};

// ürünleri render eden fonksiyon 

export const renderProducts = (products, addToCartCallBack) =>  {
    // ürünlerin render edileceği kapsamı htmlden cekme 
    const productList = document.querySelector
    ("#product-list");
    // html içeriğini oluştur 
    productList.innerHTML = products.map((product) => 
      `<div class="product">
      <img src="${product.image}" alt="product-img" class="product-img">
      <div class="product-info">
          <h2 class="product-title">${product.title}</h2>
          <p class="product-price">$${product.price}</p>
          <a class="add-to-cart"data-id=' ${product.id}' >Add to cart</a>
      </div>
  </div>`
    ).join("");

    // products bir dizi. dizi elemanları "," ile ayrılır biz burda elemanları boşluk ile ayırmasını sağladık 

    // add to cart butonlarını seç 

    const addToCartButtons = document.getElementsByClassName("add-to-cart");

    for(let i = 0; i < addToCartButtons.length; i++){
      const addToCartButton = addToCartButtons[i];
       

      // erişilen her butona olay izleyicisi ekle bu olay izleyicisi dışarıdan verilecek
      addToCartButton.addEventListener("click", addToCartCallBack);
    }
};


