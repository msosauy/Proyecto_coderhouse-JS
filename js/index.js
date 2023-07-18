import products from "../data.js";

document.getElementById("searchInput").addEventListener("keyup", () => {
  let searchResultRaw = [];

  searchResultRaw.push( products.filter((el) =>
    el.brand.includes(searchInput.value)
  ));

  searchResultRaw.push( products.filter((el) =>
    el.model.includes(searchInput.value)
  ));

  searchResultRaw.push(  products.filter((el) =>
    el.category.includes(searchInput.value)
  ));

  const len = searchResultRaw[0].length;
  let searchResult = [];

  for (let i = 0; i < len; i++) {
    const isTrue = searchResult.some(
      (el) => el.id === searchResultRaw[0][i].id
    );
    if (!isTrue) {
      searchResult.push(searchResultRaw[0][i]);
    }
  }

  console.log(searchResult);

  const renderZone = document.getElementById("dynamicConten");

  let arrayContent = [];

  for (let i = 0; i < searchResult.length; i++) {
    const el = searchResult[i];
    const content =
    `<tr>
        <td>${el.brand}</td>
        <td>${el.model}</td>
        <td>${el.category}</td>
        <td>U$S ${el.price}</td>
    </tr>`


    arrayContent.push(content)
  }
  renderZone.innerHTML = arrayContent
});

// resultado.push();
// resultado.push(products.filter((el) => el.bramodelnd.includes(searchInput.value)));
// resultado.push(products.filter((el) => el.category.includes(searchInput.value)));
// console.log(resultado);

// function search(search) {
//   const resultado = products.filter(search);
//   console.log(resultado);
// }

//El usuario elije rl tipo de busqueda
// const tarea = parseFloat(prompt("1-Marca | 2-Modelo | 3-Precio"));

// function inputType(params) {
//   switch (tarea) {
//     case 1:
//       const searchBrandRaw = prompt("Ingresa la marca a buscar");
//       const searchBrand = stringCheck(searchBrandRaw);
//       search((el) => el.brand.includes(searchBrand));
//       break;

//     case 2:
//       const searchModel = prompt("Ingresa el modelo a buscar");
//       search((el) => el.model.includes(searchModel));
//       break;

//     case 3:
//       const minPrice = parseFloat(prompt("Ingresa precio mínimo:"));
//       const maxPrice = parseFloat(prompt("Ingresa precio mínimo:"));
//       compare(minPrice, maxPrice);
//       break;

//     default:
//       alert("La opción seleccionada no es correcta");
//       break;
//   }
// }

// //Transforma el string recibido (1er caracter a MAYUSCULA y los demas a MINUSCULA)
// function stringCheck(searchBrandRaw) {
//   return (
//     searchBrandRaw.charAt(0).toUpperCase() +
//     searchBrandRaw.slice(1).toLowerCase()
//   );
// }

// //Recibe un string y devuelve como array todos los productos que incluyan este string

// //Recibe 2 números (Precio mínimo y precio máximo) y devuelve todos lo productos que estén en ese rango de precios
// function compare(minPrice, maxPrice) {
//   for (let i = 0; i < products.length; i++) {
//     const product = products[i].price;
//     if (product <= maxPrice && product >= minPrice) {
//       console.log(products[i]);
//     }
//     if (i === products.length) {
//       console.log("No Existen productos en ese rango de precios");
//     }
//   }
// }

// const guardarEnStorage = (clave, valor) => {
//   localStorage.setItem(clave, valor)
// };

// estudiantes.forEach((estudiante, index) => {
//   guardarEnStorage(index, JSON.stringify(estudiante));
// });
