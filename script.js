"use strict";

/* =========================
   MIRAGE IT - JAVASCRIPT
========================= */

// Mobile navigation

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
});


// Close mobile menu after clicking a navigation link

nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        nav.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");

        menuToggle.textContent = "☰";
    });
});


// Automatically update copyright year

document.getElementById("year").textContent =
    new Date().getFullYear();


// ====================================
// CONTACT SETTINGS
// Replace these example details.
// ====================================

// Example format: Bangladesh mobile number 01712345678
// Write it as 8801712345678 without +, spaces or dashes.

const whatsappNumber = "8801XXXXXXXXX";

// Replace with your actual business email.
const businessEmail = "yourname@example.com";

const whatsappLink = document.getElementById("whatsappLink");
const emailLink = document.getElementById("emailLink");


// Set WhatsApp contact link

whatsappLink.href =
    "https://wa.me/" +
    whatsappNumber +
    "?text=" +
    encodeURIComponent(
        "Hello Mirage IT! I would like to discuss a project."
    );


// Set Email contact link

emailLink.href =
    "mailto:" +
    businessEmail +
    "?subject=" +
    encodeURIComponent(
        "Project Inquiry - Mirage IT"
    ) +
    "&body=" +
    encodeURIComponent(
        "Hello Mirage IT,\n\nI would like to discuss a project.\n\nProject details:\n\nThank you."
    );