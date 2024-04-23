const swiper = new Swiper(".product-swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 22,

    navigation: {
      nextEl: ".products__next-btn",
      prevEl: ".products__prev-btn",
    },
});

const productsWrapper = document.getElementById("product-swiper-wrapper");

fetch("https://fakestoreapi.com/products?limit=5&page=1", {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {
    data.forEach((product) => {
      productsWrapper.innerHTML += `
    <div class="swiper-slide">
              <div class="products__card">
                <div class="products__card-img">
                  <img src="${product.image}" alt="${product.title}">
                </div>
                <div class="products__card-title-wrapper">
                  <a href="#" class="products__card-title">${product.title}</a>
                 <div class="products__card-title-wrapper__inner">
                   <span class="products__card-brand">${product.category}</span>
                   <h4 class="products__card-price">${product.price}$</h4>
                  </div>
                </div>
                <div class="products__card-btns">
                  <a href="#" class="products__card-more-btn">Подробнее</a>
                  <button class="products__card-cart-btn">
                    <img src="./images/svg/cart.svg" alt="products__card-cart-btn">
                    <span>В корзину</span>
                  </button>
                </div>
              </div>
            </div>
    `;
    });
  });
