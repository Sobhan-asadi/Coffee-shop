const toggleThemeBtnDesktop = document.querySelector("#toggle-theme");
const toggleThemeBtnMobile = document.querySelector("#toggle-theme-mobile");
const menuMobile = document.querySelector("#menu-mobile");
const tagleMenu = document.querySelector(".togle-mobile-menu");
const test = document.getElementById("test");
const subMenu = document.querySelector(".sub-menu");
const closeBtn = document.querySelector(".close");
const shoppingCartMobile = document.querySelector('#shopping-cart-mobile');
const closeShopping = document.querySelector('.close-shopping');
const shoppingCartBtn = document.querySelector('.shopping-cart-btn');

// ---------- Theme Toggle ----------
function toggleThemeBtn() {
    if (localStorage.theme === "dark") {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
}
// ---------- Submenu Toggle ----------
function toggSubMenu() {
    subMenu.classList.toggle("sub-menu");

    subMenu.className.includes("sub-menu") ? subMenu.style.display = "none" : subMenu.style.display = "block";
}

function openMenu() {
    document.querySelector('.overlay').style.display = 'block';
    menuMobile.style.right = 0 + "px";
}

function closeMenu() {
    menuMobile.style.right = -256 + "px";
    document.querySelector('.overlay').style.display = 'none';
}

function closeShopingCart() {
    shoppingCartMobile.style.left = -256 + "px";
    shoppingCartMobile.style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
}

function openShopingCart() {
    shoppingCartMobile.style.left = 0 + "px";
    shoppingCartMobile.style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';
}

// ---------- Event Listeners ----------
shoppingCartBtn.addEventListener("click", openShopingCart);
closeShopping.addEventListener("click", closeShopingCart);
closeBtn.addEventListener("click", closeMenu);
test.addEventListener("click", toggSubMenu);
toggleThemeBtnDesktop.addEventListener("click", toggleThemeBtn);
toggleThemeBtnMobile.addEventListener("click", toggleThemeBtn);
tagleMenu.addEventListener('click', openMenu);

const swiper = new Swiper('.swiper', {

    loop: true,

    slidesPerView: 1,

    spaceBetween: 20,

    breakpoints: {
        640: {

            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        }
    },

    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});