$.ajax('https://tipodecambio.paginasweb.cr/api', 
{
    type: "GET",    
    dataType: 'json', // type of response data
    timeout: 500,     // timeout milliseconds
    success: function (data) {
    $('#compra').append(data.compra);
    $('#venta').append(data.venta);
    $('#fecha').append(data.fecha);
},
    error: function (jqXhr, textStatus, errorMessage) { // error callback 
      $('#compra').append('Error: ' + errorMessage);
      $('#venta').append('Error: ' + errorMessage);
      $('#fecha').append('Error: ' + errorMessage);
    }
});
