# MapasJS
Proyecto para la implementación de componente de mapas, que permita visualizar puntos (sucursale, cajero).
<!DOCTYPE html>
<html>
<head>
    <meta name="author" content="Dirección de Innovación y Tecnología de Banco Pichincha Colombia"> 
	<meta charset= "UTF-8">
        <TItle>Mapa Sedes</TItle>
</head>
    <h3>GENERAL</h3>
<p>Componente que permite la visualización de las sedes a nivel nacional. Utiliza API leaflet version 1.4.0, HTML5, javascript, CSS3 y el componente OpenStreetMap. 
	DescripciÃ³n: Soporte de navegadores Chrome, Firefox, Safari 5, Opera 12, IE 7â€“11 Edge
	</p>
    <h3>CONFIGURACIÓN</h3>
    <p>Agregar una nueva ubicación al mapa:  
        <ul>
            <li><p>Para agregar una nueva ubicación al objeto tipo "Ubicación" se deben agregar los parametros solicitados como se muestra en el siguiente ejemplo:<br><br>   
                var ubicaciones = [ <br><br>
                new Localizacion("urlimage","Centro","Cra 44 36-40","Barranquilla","Atlántico","3302700","8:00am - 4:00pm, Viernes 04:30:00 p.m.",undefined,SEDES.suc,undefined,"10.983335","-74.779656"),<br><br>
                   
				   <li><b>Parámetros solicitados:</b> urlimage,sucursal, direccion, ciudad, deparatamento, telefono, horario_habitual, horario_cajero, SEDES, horario_adicional,latitud,longitud<br><br></li>
                        
						<b>NOTA:</b> <p>Cuando no se encuentra la imagen de la sede, se ignora el parametro "urlimage"</p>
						
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