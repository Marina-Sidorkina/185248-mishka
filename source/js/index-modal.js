var order = document.querySelector(".advert__order");
var popup = document.querySelector(".modal");
var cart = document.querySelector(".product-item__cart");

order.addEventListener("click", function(evt) {
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
