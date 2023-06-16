function calcular() {
  var ivaResultado = document.getElementById("ivaResultado");
  var iraeResultado = document.getElementById("iraeResultado");
  let saleTotal = document.getElementById("sale-total").value;
  let buyTotal = document.getElementById("buy-total").value;

  let totalIvaPagar = saleTotal * 0.22 - buyTotal * 0.22;
  let totalIraePagar = 4200;

  if (totalIvaPagar > 2500 && totalIvaPagar < 5000) {
    totalIraePagar = 6000;
  }
  if (totalIvaPagar > 5000) {
    totalIraePagar = 8000;
  }
  if (totalIvaPagar < 0) {
    ivaResultado.innerHTML = "$ " + totalIvaPagar;
    ivaResultado.style.color = "red";
  }
  if (ivaResultado > 0) {
    ivaResultado.style.color = "green";
  }
  ivaResultado.innerHTML = "$ " + totalIvaPagar;
  iraeResultado.innerHTML = "$ " + totalIraePagar;

  console.log(totalIvaPagar);
  console.log(totalIraePagar);

}
