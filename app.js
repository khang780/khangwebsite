const productButtons = document.querySelectorAll(".buy-btn");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButtons.forEach(button => {
  button.addEventListener("click", () => {
    payment.style.display = "flex";
  });
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

