var map = L.map("map");
map.setView([6.0717, 125.1217], 16);

const links = document.querySelectorAll(".navbar > nav > ul > li");
const cards = document.querySelectorAll(".card");
const customIcon = L.icon({
  iconUrl: "fire.png",
  iconSize: [60, 60],
});

// Add OpenStreetMap tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

var marker = L.marker([6.0694, 125.1262], { icon: customIcon }).addTo(map);

var marker = L.marker([6.07449, 125.1146], { icon: customIcon }).addTo(map);

var marker = L.marker([6.0678, 125.1195], { icon: customIcon }).addTo(map);

[...links].map((link, index) => {
  link.addEventListener("click", () => onLinkClick(link, index), false);
});

const onLinkClick = (link, currentIndex) => {
  const selectedItem = link.getAttribute("name");
  cards.forEach((card) => {
    card.classList.remove("active");
  });
  const currentCard = [...cards].find((card) =>
    card.classList.contains(selectedItem)
  );
  currentCard.classList.add("active");
  highLightSelectedLink(currentIndex);
};

const highLightSelectedLink = (currentIndex) => {
  links.forEach((link) => {
    link.classList.remove("selectedLink");
  });
  links[currentIndex].classList.add("selectedLink");
};
