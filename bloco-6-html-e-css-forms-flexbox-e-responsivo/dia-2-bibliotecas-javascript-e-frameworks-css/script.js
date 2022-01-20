const estado = document.getElementById("estados");
const options = [
  "AC",
  "AL",
  "AM",
  "AP",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MG",
  "MS",
  "MT",
  "PA",
  "PB",
  "PE",
  "PI",
  "PR",
  "RJ",
  "RN",
  "RO",
  "RR",
  "RS",
  "SC",
  "SE",
  "SP",
  "TO",
];

function createStates() {
    for (let index = 0; index < options.length; index += 1) {
      const uf = document.createElement("option");
      estado.appendChild(uf).innerText = options[index];
      estado.appendChild(uf).value = options[index];
    }
  }
  
  window.onload = function (event) {
    createStates();
    const btnSubmit = document.getElementById("submit");
    btnSubmit.addEventListener("click", event.preventDefault());
  };
