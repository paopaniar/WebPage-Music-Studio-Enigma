$(function(){
    var $cambios = $('#cambios');
    $.ajax({
        type: 'GET',
        url: 'https://tipodecambio.paginasweb.cr/api',
        success: function(data){
            $.each(cambios, function(i,data){
                $cambios.append('<li>Compra:' + data.compra +', Venta:' + data.venta +'</li>');
            });
        }
    });
});