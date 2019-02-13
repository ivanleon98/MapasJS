# MapasJS
Proyecto para la implementaci�n de componente de mapas, que permita visualizar puntos (sucursale, cajero).
<!DOCTYPE html>
<html>
<head>
    <meta name="author" content="Direcci�n de Innovaci�n y Tecnolog�a de Banco Pichinchia Colombia"> 
        <TItle>Mapa Sedes</TItle>
</head>
    <h3>GENERAL</h3>
<p>Componente que permite la visualizaci�n de las sedes a nivel nacional. Utiliza API leaflet version 1.4.0, HTML5, javascript, CSS3 y el componente OpenStreetMap. 
	Descripción: Soporte de navegadores Chrome, Firefox, Safari 5, Opera 12, IE 7–11 Edge
	</p>
    <h3>CONFIGURACI�N</h3>
    <p>Agregar una nueva ubicaci�n al mapa:  
        <ul>
            <li><p>Para agregar una nueva ubicaci�n al objeto tipo "Ubicaci�n" se deben agregar los parametros solicitados como se muestra en el siguiente ejemplo:<br><br>   
                var ubicaciones = [ <br><br>
                new Localizacion("urlimage","Centro","Cra 44 36-40","Barranquilla","Atl�ntico","3302700","8:00am - 4:00pm, Viernes 04:30:00 p.m.",undefined,SEDES.suc,undefined,"10.983335","-74.779656"),<br><br>
                   <li><b>Par�metros solicitados:</b> urlimage,sucursal, direccion, ciudad, deparatamento, telefono, horario_habitual, horario_cajero, SEDES, horario_adicional,latitud,longitud<br><br></li>
                        <b>SEDES</b> es una constante que consta de 4 parametros dependiendo del tipo de sede:<br>
                        <br><li> suc: 'Sucursal', </li>
                        <li>ave: 'Unidad Especializada de sucursal',</li>     
                        <li>aed: 'Unidad  Educativa',</li>    
                        <li>cajero:'Cajero'</li>   
                </p>
            </li>
        </ul>
    </p>
</html>