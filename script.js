document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("nav ul li a");
    buttons.forEach(button => {
        button.addEventListener("mouseover", function() {
            this.style.color = "#ffffff";
        });
        button.addEventListener("mouseout", function() {
            this.style.color = "#e6e6e6";
        });
    });
});