var map = L.map("mapid").setView([-19.6706559, -43.2209211], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//função para inserir os dados no campo
function addMarker({ id, name, latitude, longitude }) {
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  }).setContent(
    `${name} <a href="/orphanage?id=${id}"><img src="/images/arrow-white.svg"></a>`
  );

  L.marker([latitude, longitude], { icon: icon }).addTo(map).bindPopup(popup);
}

//selecionando o campo
const orphanagesSpan = document.querySelectorAll(".orphanages span");
//console.log(orphanagesSpan);

//captando os dados enviados do html
orphanagesSpan.forEach((span) => {
  const orphanage = {
    id: span.dataset.id,
    name: span.dataset.name,
    latitude: span.dataset.latitude,
    longitude: span.dataset.longitude,
  };
  addMarker(orphanage);
});
