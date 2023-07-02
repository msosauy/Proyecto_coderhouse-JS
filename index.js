import products from "./data.js";

//El usuario elije rl tipo de busqueda
const tarea = parseFloat(prompt("1-Marca | 2-Modelo | 3-Precio"));

switch (tarea) {
  case 1:
    const searchBrandRaw = prompt("Ingresa la marca a buscar");
    const searchBrand = stringCheck(searchBrandRaw);
    search((el) => el.brand.includes(searchBrand));
    break;

  case 2:
    const searchModel = prompt("Ingresa el modelo a buscar");
    search((el) => el.model.includes(searchModel));
    break;

  case 3:
    const minPrice = parseFloat(prompt("Ingresa precio mínimo:"));
    const maxPrice = parseFloat(prompt("Ingresa precio mínimo:"));
    compare(minPrice, maxPrice);
    break;

  default:
    alert("La opción seleccionada no es correcta");
    break;
}

//Transforma el string recibido (1er caracter a MAYUSCULA y los demas a MINUSCULA)
function stringCheck(searchBrandRaw) {
  return (
    searchBrandRaw.charAt(0).toUpperCase() +
    searchBrandRaw.slice(1).toLowerCase()
  );
}

//Recibe un string y devuelve como array todos los productos que incluyan este string 
function search(search) {
  const resultado = products.filter(search);
  console.log(resultado);
}

//Recibe 2 números (Precio mínimo y precio máximo) y devuelve todos lo productos que estén en ese rango de precios
function compare(minPrice, maxPrice) {
  for (let i = 0; i < products.length; i++) {
    const product = products[i].price;
    if (product <= maxPrice && product >= minPrice) {
      console.log(products[i]);
    }
    if (i === products.length) {
      console.log("No Existen productos en ese rango de precios");
    }
  }
}
