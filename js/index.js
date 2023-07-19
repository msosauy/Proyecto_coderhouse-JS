document.getElementById("btnLogin").addEventListener("click", () => {
  const firstName = document.getElementById("nombre").value;
  const secName = document.getElementById("apellido").value;

  localStorage.setItem("nombre", firstName);
  localStorage.setItem("apellido", secName);
});
