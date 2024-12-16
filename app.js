const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
  {
    id: 1,
    title: "Item1",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/khang shirt.png",
      },
      {
        code: "darkblue",
        img: "./img/khang shirt2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Item2",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/",
      },
      {
        code: "green",
        img: "./img/",
      },
    ],
  },
  {
    id: 3,
    title: "Lao Traditional Weaving Equipment",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/Lao Traditional Weaving Equipment-Printing_Ebook.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Item4",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/Khang_book.png",
      },
      {
        code: "lightgray",
        img: "./img/Khang_bong.png",
      },
    ],
  },
  {
    id: 5,
    title: "Item5",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let chooseProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assign new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});


currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});