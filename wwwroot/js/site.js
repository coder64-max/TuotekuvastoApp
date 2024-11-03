document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.product-card h2').forEach(function (element) {
        element.textContent = element.textContent.replace(/\b\w/g, function (char) {
            return char.toUpperCase();
        });
    });

    // Poistettu hintaan liittyvä käsittely
});

// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
