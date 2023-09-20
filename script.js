const links = document.querySelectorAll(".navbar > nav > ul > li ");
const cards = document.querySelectorAll(".card");
// Initialize the map
var map = L.map('map');
map.setView([6.1123, 125.1796], 15); // Set initial coordinates and zoom level

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

[...links].map((link, index) =>{
    link.addEventListener("click", () => onLinkClick(link, index), false);
});

const onLinkClick = (link, currentIndex) => {
    const selectedItem = link.getAttribute("name")
    cards.forEach(card => {
        card.classList.remove("active");
    });
    const currentCard = [...cards].find(card => card.classList.contains(selectedItem)
    );
    currentCard.classList.add("active");
    highLightSelectedLink(currentIndex);
};

const highLightSelectedLink = (currentIndex) => {
    links.forEach((link) => {
        link.classList.remove("selectedLink");
    });
    links[currentIndex].classList.add("selectedLink");
}

