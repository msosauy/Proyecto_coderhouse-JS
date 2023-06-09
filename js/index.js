function calcular() {
  var ivaResultado = document.getElementById("ivaResultado");
  var iraeResultado = document.getElementById("iraeResultado");
  let saleTotal = document.getElementById("sale-total").value;
  let buyTotal = document.getElementById("buy-total").value;

  let totaIvaPagar = saleTotal * 0.22 - buyTotal * 0.22;
  let totaIraePagar = 4200;

  if (totaIvaPagar > 2500 && totaIvaPagar < 5000) {
    totaIraePagar = 6000;
  }
  if (totaIvaPagar > 5000) {
    totaIraePagar = 8000;
  }
  if (totaIvaPagar < 0) {
    ivaResultado.innerHTML = "$ " + totaIvaPagar;
    ivaResultado.style.color = "red";
  }

  iraeResultado.innerHTML = "$ " + totaIraePagar;

  console.log(totaIvaPagar);
  console.log(totaIraePagar);
}
