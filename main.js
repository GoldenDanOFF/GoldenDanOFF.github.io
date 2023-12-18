function togglePortfolio() {
    var portfolioMenu = document.getElementById("portfolioMenu");
    if (portfolioMenu.style.display === "none" || portfolioMenu.style.display === "") {
        portfolioMenu.style.display = "block";
    } else {
        portfolioMenu.style.display = "none";
    }
}

var glowbutton = document.querySelector(".glowbutton");
glowbutton.addEventListener('click', animateButton, false);

