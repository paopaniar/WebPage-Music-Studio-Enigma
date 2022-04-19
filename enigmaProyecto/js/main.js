
var nombre;
var date;
var email;

  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;


  function promoCalculator(quantityHours) {
    let costPerHour = 12500;
    return costPerHour*quantityHours;

  }
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });



fetch(dataURL)
  .then(res => res.json())
  .then(data => {
    document.querySelector(".date").textContent = data.date;
    data.rates["EUR"] = 1;
    currencies = currencies.filter(currency => data.rates[currency.abbreviation]);
    currencies.forEach(currency => currency.rate = data.rates[currency.abbreviation]);
    populateAddCyrrencyList();
    populateCurrenciesList();
  })
  .catch(err => console.log(err));
  

    function guardarLocal() {

      localStorage.setItem("date", date);
      localStorage.setItem("name", nombre);
      localStorage.setItem("email", email);
  }
  
    function calcularEdad(fecha_nacimiento) {
      var hoy = new Date();
      var cumpleanos = new Date(fecha_nacimiento);
      var edad = hoy.getFullYear() - cumpleanos.getFullYear();
      var m = hoy.getMonth() - cumpleanos.getMonth();
      if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
          edad--;
      }
      return edad;
  }
  function procesarCalculo() {
  var lblValEdad = document.getElementById("lblValEdad");

    date = document.getElementsByName("date")[0].value;
    nombre = document.getElementsByName("name")[0].value;
    email = document.getElementsByName("email")[0].value;
    var fn = new Date(date); //se obtiene la fecha que seleccionó el usuario
    var hoy = new Date(); // se obtiene la fecha del día de hoy
    var edad = hoy.getYear() - fn.getYear(); //calculo de la edad
    lblValEdad.innerHTML = "Envido exitosamente";
//validación de la edad del cliente
	if (edad > 18 && edad < 80)
    {
        lblValEdad.innerHTML = "Envido exitosamente";
    }
    else
    {
        lblValEdad.innerHTML = "INCORRECTO! Debe ser mayor de edad";
    }

  guardarLocal();
}