const menuItems = document.querySelectorAll(".menuItem");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        console.log("you clicked!" + index);
        const wrapper = document.querySelector(".slider");
        wrapper.scrollTo({
            left: index * window.innerWidth,
            behavior: 'smooth'
        });
    });
});

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "/images/air.png",
        },
        {
          code: "darkblue",
          img: "/images/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "/images/jordan.png",
        },
        {
          code: "green",
          img: "/images/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "/images/blazer.png",
        },
        {
          code: "green",
          img: "/images/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "/images/crater.png",
        },
        {
          code: "lightgray",
          img: "/images/crater2.png ",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "/images/hippie.png",
        },
        {
          code: "black",
          img: "/images/hippie2.png",
        },
      ],
    },
  ];

let chosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

const wrapper = document.querySelector(".slider");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // Change the current slide
        wrapper.scrollTo({
            left: index * window.innerWidth,
            behavior: 'smooth'
        });

        // Change the chosen product
        chosenProduct = products[index];

        // Change texts and images of currentProduct
        currentProductTitle.textContent = chosenProduct.title;
        currentProductPrice.textContent = "$" + chosenProduct.price;
        currentProductImg.src = chosenProduct.colors[0].img;

        // Set up event listeners for color options
        currentProductColors.forEach((color, idx) => {
            color.style.backgroundColor = chosenProduct.colors[idx].code;
            color.addEventListener("click", () => {
                currentProductImg.src = chosenProduct.colors[idx].img;
            });
        });
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
