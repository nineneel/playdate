// icons
feather.replace();

// Toggler
const buttonNav = document.querySelector("#button-nav");
const nav = document.querySelector("#nav");

buttonNav.addEventListener("click", () => {
    nav.classList.toggle("hidden");
});

// ================================ Slider ======================================
const leftBtn = document.querySelector("#left-product");
const rightBtn = document.querySelector("#right-product");
const allCard = document.querySelectorAll("#product-card");

let flag = 0; // penanda

// left Button
leftBtn.addEventListener("click", () => {
    preOrder();
    nextOrder(allCard);
    postOrder();
});

// right Button
rightBtn.addEventListener("click", () => {
    preOrder();
    prevOrder(allCard);
    postOrder();
});

function nextOrder(allCard) {
    // remove
    let temp = flag;
    for (let i = 0; i < 5; i++) {
        temp = temp + 1 == 6 ? 1 : temp + 1;
        allCard[i].classList.remove("order-" + temp);
    }

    flag = flag + 1 == 5 ? 0 : flag + 1;
    // add order
    temp = flag;
    for (let i = 0; i < 5; i++) {
        temp = temp + 1 == 6 ? 1 : temp + 1;
        allCard[i].classList.add("order-" + temp);
    }
}

function prevOrder(allCard) {
    // remove
    let temp = flag;
    for (let i = 0; i < 5; i++) {
        temp = temp + 1 == 6 ? 1 : temp + 1;
        allCard[i].classList.remove("order-" + temp);
    }
    flag = flag - 1 == -1 ? 4 : flag - 1;
    // add order
    temp = flag;
    for (let i = 0; i < 5; i++) {
        temp = temp + 1 == 6 ? 1 : temp + 1;
        allCard[i].classList.add("order-" + temp);
    }

    // flag = 4
    // 0 - 5
    // 1 - 1
    // 2 - 2
    // 3 - 3
    // 4 - 4
}

function preOrder() {
    const ord1 = document.querySelector(".order-1");
    const ord2 = document.querySelector(".order-2");
    const ord3 = document.querySelector(".order-3");
    const ord4 = document.querySelector(".order-4");
    const ord5 = document.querySelector(".order-5");
    console.log(ord5);
    ord1.classList.remove("hidden", "scale-[60%]", "xl:flex");
    ord2.classList.remove("hidden", "scale-[85%]", "lg:flex", "mr-10");
    ord3.classList.remove("flex", "scale-100");
    ord4.classList.remove("hidden", "scale-[85%]", "lg:flex", "ml-10");
    ord5.classList.remove("hidden", "scale-[60%]", "xl:flex");
}

function postOrder() {
    const ord1 = document.querySelector(".order-1");
    const ord2 = document.querySelector(".order-2");
    const ord3 = document.querySelector(".order-3");
    const ord4 = document.querySelector(".order-4");
    const ord5 = document.querySelector(".order-5");
    console.log(ord5);
    ord1.classList.add("hidden", "scale-[60%]", "xl:flex");
    ord2.classList.add("hidden", "scale-[85%]", "lg:flex", "mr-10");
    ord3.classList.add("flex", "scale-100");
    ord4.classList.add("hidden", "scale-[85%]", "lg:flex", "ml-10");
    ord5.classList.add("hidden", "scale-[60%]", "xl:flex");
}
