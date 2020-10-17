var map = L.map("mapid").setView([-19.6706559, -43.2209211], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;
map.on("click", (event) => {
  //console.log(event);

  const latitude = event.latlng.lat;
  const longitude = event.latlng.lng;

  document.querySelector("[name = latitude]").value = latitude;
  document.querySelector("[name = longitude]").value = longitude;

  marker && map.removeLayer(marker); // se existir o marker execute, se nao pule

  marker = L.marker([latitude, longitude], { icon }).addTo(map);
});

/* add campo fotos */

function addPhotoField() {
  //console.log('funciona');
  //pegar o container de fotos #images
  const container = document.querySelector("#images");
  //pegar o container para duplicar
  const fildsContainer = document.querySelectorAll(".new-upload");
  //realizar  o clone da ultima img add
  const newFildContainer = fildsContainer[fildsContainer.length - 1].cloneNode(
    true
  );
  //verificar se o campo esta vazio, se sim nao add
  const input = newFildContainer.children[0];
  if (input.value == "") {
    return;
  }
  //limpando o campo antes de add
  input.value = "";
  //add o clone ao container de img
  container.appendChild(newFildContainer);
}

function deleteFild(event) {
  // console.log(event.currentTarget); //verifica quem esta disparando, seleciona o campo
  const span = event.currentTarget;

  const fildsContainer = document.querySelectorAll(".new-upload");
  //console.log(fildsContainer.length);
  if (fildsContainer.length < 2) {
    //limpar o campo
    span.parentNode.children[0].value = "";
    return;
  }
  //deletar o campo
  span.parentNode.remove(); //pega o pai do campo e remove tudo
}

//troca do sim e nao
function toggleSelect(event) {
  console.log(event);
  //se existir a class .active nos botoes retiralo antes de
  document
    .querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active"));
  //colocar a class .active p/ gerar a cor
  const button = event.currentTarget;
  button.classList.add("active");
  //atualizar o meu input hidden com o valor selecionado
  const input = document.querySelector('[name= "open_on_weekends"]');
  //verificar se e sim=1 ou nao=0
  input.value = button.dataset.value;
}
/*fazer o controle de do mapa por aqui
function validate(event) {
 add no forms de create-orphanage>> onsubmit="validate(event)
  //console.log(event.target.value);

  //validar se latitude e longitude estao preenchidos

  if (cody == "" && codx == "") {
    event.preventDefault();
    alert("Preencha o campo do mapa");
  
  console.log(latitude, longitude);
}
*/
