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


// 5- REVISAR FORM VALIDATION (HTML attribute pattern is not working):

// ALPHAONLY for name input (not num)

/* NO FUNCIONA -aplicado a input clase alphaOnly - bug: no toma los valores
$('.alphaOnly').bind('keyup blur',function(){ 
    var node = $(this);
    node.val(node.val().replace(/[^a-z ]/g,'') ); }
);
*/

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

// 2- MODIFICADA, crea item, sale alerta || modificar/ ELIMINAR F(X) -> HECHA LA VALIDACIÓN

const ejecutar = () => {
  if (cost >= 1) {
    // NEW ISSUE: no hace push al array //
    addArray;
    createNewUl(peopleName, cost);
    inputName.value = "";
    inputCost.value = "";
    // NEW: ejecutar f(x) -revisar funcionamiento //
    calculateSum();
    calculateAvg();
  } else {
    alert('Ingrese un monto válido')
  }
  
};



// const nameArray = []
const costArray = []
const cardSumData = document.getElementById("card-text-sum")
const cardAvgData = document.getElementById("card-text-avg")

// 3- REVISAR/MODIFICAR F(X) -- LISTO --

// function mostrarNombreYmonto(_nombre, _monto) {
//   nameArray.push(_nombre)
//   costArray.push(_monto * 1)
//   createNewUl;
//   listaNombreYmonto.innerHTML += `<li class="list-group-item">${_nombre}: $${_monto}</li>`;
// }


// 4- SACAR BOTONES P/TOTAL, REALIZAR CÁLCULO DINÁMICO




// const parent = document.getElementById("list");
// const theChildNodes = parent.childNodes;
// parent.appendChild(newList)

// document.body.onload = addElement;

// function addElement() {
//   const newUl = document.createElement("ul");
//   const newContent = document.createTextNode(`${_nombre}: $${_monto}`);
//   newUl.appendChild(newContent);
//   const currentDiv = document.getElementById("list");
//   document.body.insertBefore(newUl, currentDiv);
// }

const addArray = (_monto) => {
  costArray.push(_monto * 1);
}

function createNewUl(_nombre, _monto) {
  const currentDiv = document.getElementById("list");
  currentDiv.insertAdjacentHTML("beforeend", `<li class="list-group-item">${_nombre}: $${_monto}</li>`);
}

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
  document.location.reload();
});


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