const inputName = document.getElementById("name");
const inputCost = document.getElementById("cost");
const submitButton = document.getElementById("submit");
const listaNombreYmonto = document.querySelector("#nombreYmonto");



// trigger submit button with Enter keyboard

// inputName.addEventListener("keypress", function (event) {
//     if (event.key === "Enter") {
//         submitButton.click();
//     }
// })
// inputCost.addEventListener("keypress", function (event) {
//     if (event.key === "Enter") {
//         submitButton.click();
//     }
// })

function submitWithEnter(input) {
    input.addEventListener("keypress", event => {
        (event.key === "Enter");
    })
}

const submitInputs = function (submitWithEnter){
    submitWithEnter(inputName);
    submitWithEnter(inputCost);
}



// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})



// si hubiera checkbox

// function isCash() {
    
// }




let peopleName = "";
let cost = 0;

// 1- PREGUNTAR TOMA DE INPUTS CAMBIANDO LOS SIG. EVENTOS:

inputName.addEventListener("change", (evt) => catchName(evt));
inputCost.addEventListener("change", (evt) => catchCost(evt));

const catchName = (evt) => (peopleName = evt.target.value);
const catchCost = (evt) => (cost = evt.target.value);

// 2- modificar/ ELIMINAR F(X) -> HECHA LA VALIDACIÓN

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

// 3- REVISAR/MODIFICAR F(X)

function mostrarNombreYmonto(_nombre, _monto) {
  nameArray.push(_nombre)
  costArray.push(_monto * 1)
  listaNombreYmonto.innerHTML += `<li class="list-group-item">${_nombre}: $${_monto}</li>`;
}


// 4- SACAR BOTONES P/TOTAL, REALIZAR CÁLCULO DINÁMICO

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