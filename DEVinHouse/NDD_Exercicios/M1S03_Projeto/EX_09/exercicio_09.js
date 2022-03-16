// criar um alerta que informe a hora exata do momento do mesmo.


function cliqueAqui(){

    var data = new Date();
    var horas = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();

    alert(" Momento exato -> "+horas+":"+minutos+":"+segundos);

}