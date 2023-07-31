//Defectos a corregir: No diferencia entre mayúsculas y minúsculas

//Toma los datos de LOGIN y los muestra en pantalla
let name = localStorage.getItem(localStorage.key(0 + 1));
let surname = localStorage.getItem(localStorage.key(0));

const form = document.getElementById("form");
form.innerHTML = `<h2>Bienvenido ${name} ${surname} </h2>`;

//Simula un botón LOGOUT, bora el localstorage y redirige al "LOGIN"
document.getElementById("btnLogout").addEventListener("click", () => {
  localStorage.clear();
})

//Variable temporal, contiene la busqueda con ar
let searchResultRaw = [];

//Busqueda por MARCA
function busquedaMarca(params) {
  searchResultRaw.push(products.filter((el) => el.brand.includes(params)));
  console.log("marca", searchResultRaw);
  removeDuplicate(searchResultRaw);
  searchResultRaw = [];
}

//Busqueda por MODELO
function busquedaModelo(params) {
  searchResultRaw.push(products.filter((el) => el.model.includes(params)));
  console.log("modelo", searchResultRaw);
  removeDuplicate(searchResultRaw);
  searchResultRaw = [];
}

//Busqueda por CATEGORÍA
function busquedaCategoria(params) {
  searchResultRaw.push(products.filter((el) => el.category.includes(params)));
  console.log("categoria", searchResultRaw);
  removeDuplicate(searchResultRaw);
  searchResultRaw = [];
}

// //Recibe 2 números (Precio mínimo y precio máximo) y devuelve todos lo productos que estén en ese rango de precios
function compare(minPrice, maxPrice) {
  let compareResultRaw = [];

  for (let i = 0; i < products.length; i++) {
    const product = products[i].price;
    if (product <= maxPrice && product >= minPrice) {
      compareResultRaw.push(products[i]);
    }
    if (i === products.length) {
      console.log("No Existen productos en ese rango de precios");
    }
  }
  screenShow(compareResultRaw);
}

//Remueve los articulos duplicados del array antes de enviarlos al HTML
function removeDuplicate(searchResultRaw, param) {
  let len = searchResultRaw[0].length;
  let searchResult = [];

  for (let i = 0; i < len; i++) {
    const isTrue = searchResult.some(
      (el) => el.id === searchResultRaw[0][i].id
    );
    if (!isTrue) {
      searchResult.push(searchResultRaw[0][i]);
    }
  }
  //Envía los articulos sin duplicados
  console.log("62", searchResult);
  screenShow(searchResult);
}

//Imprime la lista
function screenShow(searchResult) {
  let renderZone = document.querySelector("tbody");
  //Bora los hijos anteriores antes de mostrar los lnuevos
  while (renderZone.firstElementChild) {
    renderZone.firstElementChild.remove();
  }
  //Itera sobre los resultados y los agreca a la Tabla
  for (let i = 0; i < searchResult.length; i++) {
    const el = searchResult[i];

    const tr = document.createElement("tr");
    renderZone.appendChild(tr);

    tr.innerHTML = `<td>${el.brand}</td><td>${el.model}</td><td>${el.category}</td><td>${el.price}</td>`;
  }
}

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

// //Transforma el string recibido (1er caracter a MAYUSCULA y los demas a MINUSCULA)
// function stringCheck(searchBrandRaw) {
//   return (
//     searchBrandRaw.charAt(0).toUpperCase() +
//     searchBrandRaw.slice(1).toLowerCase()
//   );
// }