document.getElementById("btnLogin").addEventListener("click", () => {
  const firstName = document.getElementById("nombre").value;
  const secName = document.getElementById("apellido").value;

  if (firstName.trim().length === 0) {
    console.log("Debe ingresar un nombre!!");
  }else {
    if (secName.trim().length === 0) {
      console.log("Debes ingresar un apellido");
    }
    localStorage.setItem("nombre", firstName);
    localStorage.setItem("apellido", secName);
    window.location.replace("../pages/searchPage.html")
  }
});
