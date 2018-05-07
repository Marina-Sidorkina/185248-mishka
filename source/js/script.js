  var open = document.querySelector(".extra__button");
  var nav = document.querySelector(".navigation");
  var user = document.querySelector(".user-block");

  var carts = document.querySelectorAll(".js-cart");
  var popup = document.querySelector(".modal");

  nav.classList.remove("navigation--show");
  user.classList.remove("user-block--show");
  open.classList.remove("extra__button--opened");

  open.addEventListener("click", function(evt) {
    if (open.classList.contains("extra__button--opened")) {
      evt.preventDefault();
      nav.classList.remove("navigation--show");
      user.classList.remove("user-block--show");
      open.classList.remove("extra__button--opened");
    } else {
      evt.preventDefault();
      nav.classList.add("navigation--show");
      user.classList.add("user-block--show");
      open.classList.add("extra__button--opened");
    }
  });

  carts.forEach(function(cart){
    cart.addEventListener("click", function(evt) {
      evt.preventDefault();
      popup.classList.add("modal--show");
    })
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("modal--show")) {
        popup.classList.remove("modal--show");
      }
    }
  });
