
var popup = document.querySelector(".modal");
var cart = document.querySelector(".product-item__cart");
var cartTwo = document.querySelector(".product-item__cart--bowl");
var cartThree = document.querySelector(".product-item__cart--toys");

  cart.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal--show");
  });

  cartTwo.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal--show");
  });

  cartThree.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal--show");
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("modal--show")) {
        popup.classList.remove("modal--show");
      }
    }
  });
