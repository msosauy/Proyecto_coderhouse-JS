let factTotal = "";
let comprasTotal = "";
let iraePagar = 4200;

do {
  factTotal = prompt("Ingresa la Facturación TOTAL (iva inc.)");
} while (factTotal === "" || isNaN(factTotal) );

do {
  comprasTotal = prompt("Ingresa el TOTAL de compras (iva inc.)");
} while (comprasTotal === "" || isNaN(comprasTotal));

let ivaPagar = factTotal * 0.22 - comprasTotal * 0.22;

if (ivaPagar > 2500 && ivaPagar < 5000) {
  iraePagar = 6000;
}
if (ivaPagar > 5000) {
  iraePagar = 8000;
}

alert("IVA a pagar: $" + ivaPagar + " | IRAE a pagar: $" + iraePagar);

