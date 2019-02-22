# MapasJS
Proyecto para la implementación de componente de mapas, que permita visualizar puntos (sucursale, cajero).
<!DOCTYPE html>
<html>
<head>
    <meta name="author" content="Dirección de Innovación y Tecnología - Banco Pichincha Colombia"> 
	<meta charset= "UTF-8">
</head>
    <h3>GENERAL</h3>
	<p>
		Componente que permite la visualización de las sedes a nivel nacional. Utiliza API leaflet version 1.4.0, HTML5, javascript, CSS3 y el componente OpenStreetMap. 
		Descripción: Soporte de navegadores Chrome, Firefox, Safari 5, Opera 12, IE 7 - 11 Edge
	</p>
    <h3>CONFIGURACIÓN</h3>
    <p>Agregar una nueva ubicación al mapa:  
        <ul>
            <li>
				<p>
					Para agregar una nueva ubicación al objeto tipo "Ubicación" se deben agregar los parametros solicitados como se muestra en el siguiente ejemplo:<br><br>   
					var ubicaciones = [ <br>
					new Localizacion("urlimage", "Centro", "Cra 44 36-40", "Barranquilla", "Atlántico", "3302700", "8:00am - 4:00pm, Viernes 04:30:00 p.m.", 
					undefined, SEDES.suc, undefined, "10.983335", "-74.779656", "imagen-sede.png"),
					]<br><br>
						<b>Parámetros solicitados:</b> urlimage, sucursal = "Centro", direccion = "Cra 44 36-44", ciudad = "Barranquilla", departamento = "Atlántico", 
						telefono = '3302700', horario_habitual = "8:00am - 4:00pm, Viernes...", horario_cajero = "undefined", SEDES (ver), horario_adicional = "undefined", 
						latitud = "10.983335", longitud = "-74.779656", nombreCompletoImagen = "imagen-sede.png"
						<br><br>
						<b>SEDES : </b>Es una constante que presenta 4 valores, que dependen del tipo de sede a registrar:
                        <br>
						&nbps;suc: 'Sucursal',
                        &nbps;ave: 'Unidad Especializada de sucursal',
                        &nbps;aed: 'Unidad  Educativa',  
                        &nbps;cajero:'Cajero'
                        <br><br>
                        <b>Aclaración : </b><p>Los campos definidos con undefined, son asumidos que el dato no esta presente.</p>
				</p>
            </li>
        </ul>
    </p>
</html>