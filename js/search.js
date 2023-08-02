//Toma los datos de LOGIN y los muestra en pantalla
let loginName = localStorage.getItem(localStorage.key(0 + 1));
let loginSurname = localStorage.getItem(localStorage.key(0));

//Fecha y hora
const DateTime = luxon.DateTime
const dt = DateTime.now();
const fecha = dt.toLocaleString()

const userId = document.getElementById("userId");
userId.innerHTML = `<h3>${fecha}</h3><h3>USUARIO: ${loginName} ${loginSurname} </h3>`;


//Simula un botón LOGOUT, borra el localstorage y redirige al "LOGIN"
document.getElementById("btnLogout").addEventListener("click", () => {
  localStorage.clear();
  window.location.replace("../index.html");
});

//Variable temporal, contiene la busqueda con array
let searchResultRaw = [];

//Busqueda General
async function busquedaGeneral(params) {
  const res = await fetch("../data.json");
  const data = await res.json();
  
  const brand = data.filter((el) =>
    el.brand.toLowerCase().includes(params.toLowerCase())
  );
  const model = data.filter((el) =>
    el.model.toLowerCase().includes(params.toLowerCase())
  );
  const category = data.filter((el) =>
    el.category.toLowerCase().includes(params.toLowerCase())
  );

  searchResultRaw.push(...brand, ...model, ...category);
  console.log("generalSearch", searchResultRaw);
  removeDuplicate(searchResultRaw);
  searchResultRaw = [];
}

//Busqueda por MARCA
async function busquedaMarca(params) {
  const res = await fetch("../data.json");
  const data = await res.json();

  searchResultRaw.push(
    ...data.filter((el) =>
      el.brand.toLowerCase().includes(params.toLowerCase())
    )
  );
  console.log("marca", searchResultRaw);
  removeDuplicate(searchResultRaw);
  searchResultRaw = [];
}

//Busqueda por MODELO
async function busquedaModelo(params) {
  const res = await fetch("../data.json");
  const data = await res.json();

  searchResultRaw.push(
    ...data.filter((el) =>
      el.model.toLowerCase().includes(params.toLowerCase())
    )
  );
  console.log("modelo", searchResultRaw);
  removeDuplicate(searchResultRaw);
  searchResultRaw = [];
}

//Busqueda por CATEGORÍA
async function busquedaCategoria(params) {
  const res = await fetch("../data.json");
  const data = await res.json();

  searchResultRaw.push(
    ...data.filter((el) =>
      el.category.toLowerCase().includes(params.toLowerCase())
    )
  );
  console.log("categoria", searchResultRaw);
  removeDuplicate(searchResultRaw);
  searchResultRaw = [];
}

// //Recibe 2 números (Precio mínimo y precio máximo) y devuelve todos lo productos que estén en ese rango de precios
async function compare(minPrice, maxPrice) {
  const res = await fetch("../data.json");
  const data = await res.json();

  let compareResultRaw = [];

  for (let i = 0; i < data.length; i++) {
    const productPrice = data[i].price;
    if (productPrice <= maxPrice && productPrice >= minPrice) {
      compareResultRaw.push(data[i]);
    }
    if (i === data.length) {
      console.log("No Existen productos en ese rango de precios");
    }
  }
  screenShow(compareResultRaw);
}

//Remueve los articulos duplicados del array antes de enviarlos al HTML
function removeDuplicate(searchResultRaw) {
  let len = searchResultRaw.length;
  let searchResult = [];

  for (let i = 0; i < len; i++) {
    const isTrue = searchResult.some((el) => el.id === searchResultRaw[i].id);
    if (!isTrue) {
      searchResult.push(searchResultRaw[i]);
    }
  }
  //Envía los articulos sin duplicados
  screenShow(searchResult);
}

//Imprime la lista
function screenShow(searchResult) {
  let renderZone = document.querySelector("tbody");
  //Bora los hijos anteriores antes de mostrar los nuevos
  while (renderZone.firstElementChild) {
    renderZone.firstElementChild.remove();
  }
  //Itera sobre los resultados y los agrega a la Tabla
  for (let i = 0; i < searchResult.length; i++) {
    const el = searchResult[i];

    const tr = document.createElement("tr");
    renderZone.appendChild(tr);

    tr.innerHTML = `<td>${el.brand}</td><td>${el.model}</td><td>${el.category}</td><td>${el.price}</td>`;
  }
}

//EVENTO de busqueda General
document.getElementById("search").addEventListener("keyup", () => {
  busquedaGeneral(document.getElementById("search").value);
});

//EVENTO de Busqueda por MARCA
document.getElementById("brandSearch").addEventListener("keyup", () => {
  busquedaMarca(document.getElementById("brandSearch").value);
});

//EVENTO de Busqueda por MODELO
document.getElementById("modelSearch").addEventListener("keyup", () => {
  busquedaModelo(document.getElementById("modelSearch").value);
});

//EVENTO de Busqueda por CATEGORIA
document.getElementById("categorySearch").addEventListener("keyup", () => {
  busquedaCategoria(document.getElementById("categorySearch").value);
});

//EVENTO de busqueda por rando de PRECIO
document.getElementById("maxPrice").addEventListener("keyup", () => {
  let minPrice = document.getElementById("minPrice").value;
  let maxPrice = document.getElementById("maxPrice").value;
  compare(minPrice, maxPrice);
});