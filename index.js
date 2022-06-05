const inputName = document.getElementById("name");
const inputCost = document.getElementById("cost");
const submitButton = document.getElementById("submit");
const listaNombreYmonto = document.querySelector("#nombreYmonto");

let peopleName = "";
let cost = 0;

inputName.addEventListener("change", (evt) => catchName(evt));
inputCost.addEventListener("change", (evt) => catchCost(evt));

const catchName = (evt) => (peopleName = evt.target.value);
const catchCost = (evt) => (cost = evt.target.value);

const ejecutar = () => {
  if (cost >= 1) {
    mostrarNombreYmonto(peopleName, cost);
    inputName.value = "";
    inputCost.value = "";
  } else {
    alert('Ingrese un monto válido')
  }
  
};


const nameArray = []
const costArray = []
const cardSumData = document.getElementById("card-text-sum")
const cardAvgData = document.getElementById("card-text-avg")


function mostrarNombreYmonto(_nombre, _monto) {
  nameArray.push(_nombre)
  costArray.push(_monto * 1)
  listaNombreYmonto.innerHTML += `<li class="list-group-item">${_nombre}: $${_monto}</li>`;
}



const initialValue = 0;

function calculateSum() {
  const sumWithInitial = costArray.reduce((previousValue, currentValue) => (previousValue + currentValue), initialValue);
  cardSumData.innerHTML = "$" + sumWithInitial;
}

function calculateAvg() {
  const sumWithInitial = costArray.reduce((previousValue, currentValue) => (previousValue + currentValue), initialValue);
  let total = Math.round(sumWithInitial / costArray.length);
  cardAvgData.innerHTML = "$" + total;
}