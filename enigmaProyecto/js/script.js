$(document).ready(function(){
  var url="https://tipodecambio.paginasweb.cr/api";
  $.ajax({
    dataType: 'json', // type of response data
    url: url,
    success: function (data) {
    $('#compra').append(data.compra);
    $('#venta').append(data.venta);
    $('#fecha').append(data.fecha);
},
 
  });
});
