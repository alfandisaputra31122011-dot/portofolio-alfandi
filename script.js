// Mengambil tombol menu
const menuToggle = document.querySelector(".menu-toggle");

// MENU NAVBAR

const menuToggle =
    document.querySelector(".menu-toggle");

const navMenu =
    document.querySelector(".nav-menu");


menuToggle.addEventListener("click", function () {

    if (navMenu.style.display === "flex") {

        navMenu.style.display = "none";

    } else {

        navMenu.style.display = "flex";

    }

});


// =========================
// ANIMASI TOMBOL PROJECT
// =========================

const projectButtons =
    document.querySelectorAll(".project-btn");


projectButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        button.innerHTML = "⚡ AKTIF!";

        button.style.background = "#00ff66";

        button.style.color = "black";


        setTimeout(function () {

            button.innerHTML =
                "Lihat Project";

            button.style.background =
                "#ff0000";

            button.style.color =
                "white";

        }, 1500);

    });

});


// Ketika tombol menu diklik
menuToggle.addEventListener("click", function () {

    if (navMenu.style.display === "flex") {

        navMenu.style.display = "none";

    } else {

        navMenu.style.display = "flex";

        navMenu.style.flexDirection = "column";

        navMenu.style.position = "absolute";

        navMenu.style.top = "70px";

        navMenu.style.right = "20px";

        navMenu.style.background = "#000";

        navMenu.style.padding = "20px";

        navMenu.style.border = "1px solid red";

    }

});


// Tombol project
const projectButtons =
    document.querySelectorAll(".project-btn");


// Perulangan tombol
projectButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        alert("Project sedang dalam pengembangan!");

    });

});


// Animasi ketika halaman di-scroll
window.addEventListener("scroll", function () {

    const navbar =
        document.querySelector("header");

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.7)";

    } else {

        navbar.style.boxShadow =
            "none";

    }

});