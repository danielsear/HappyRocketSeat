const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};
//get values from  html
const spanLatitude = document.querySelector("[data-latitude]").dataset.latitude;
const spanLongitude = document.querySelector("[data-longitude]").dataset
  .longitude;
//create map
const map = L.map("mapid", options).setView([spanLatitude, spanLongitude], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//create and add marker
L.marker([spanLatitude, spanLongitude], {
  icon: icon,
}).addTo(map);
//img galery
function selectImage(event) {
  // console.log(event.currentTarget); // currentTarget: evento atual que esta disparando,

  const button = event.currentTarget;

  //remove todas as classes  .active
  const buttons = document.querySelectorAll(".images button");
  //console.log(buttons);
  buttons.forEach((buttom) => {
    buttom.classList.remove("active");
  });

  //selecionar a imagen clicada
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");
  //atualizar o container imagem
  imageContainer.src = image.src;
  //adicionar a classe .active para esse botao
  button.classList.add("active");
}
