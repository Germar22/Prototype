var map = L.map("map");
map.setView([6.0717, 125.1217], 16);

const links = document.querySelectorAll(".navbar > nav > ul > li");
const cards = document.querySelectorAll(".card");

//images for custom icons
const fireIcon = L.icon({
  iconUrl: "fire.png",
  iconSize: [60, 60],
});
const fireDepartment = L.icon({
  iconUrl: "firedepartment.png",
  iconSize: [40, 50],
});

// Add OpenStreetMap tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

/*
var marker = L.marker([6.0694, 125.1262], { icon: fireIcon }).addTo(map);

var marker = L.marker([6.07449, 125.1146], { icon: fireIcon }).addTo(map);

var marker = L.marker([6.0678, 125.1195], { icon: fireIcon }).addTo(map);

var marker = L.marker([6.073838, 125.115167], { icon: fireDepartment }).addTo(
  map
);
*/

function changeLocation1() {
  lat = 6.0678;
  long = 125.1195;
  route1 = L.Routing.control({
    waypoints: [L.latLng(6.073838, 125.115167), L.latLng(lat, long)],
  }).addTo(map);
}

function changeLocation2() {
  lat = 6.07449;
  long = 125.1146;
  route2 = L.Routing.control({
    waypoints: [L.latLng(6.073838, 125.115167), L.latLng(lat, long)],
  }).addTo(map);
}

function changeLocation3() {
  lat = 6.0694;
  long = 125.1262;
  route3 = L.Routing.control({
    waypoints: [L.latLng(6.073838, 125.115167), L.latLng(lat, long)],
  }).addTo(map);
}

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
