var coordenadaGeneral = [4.626013, -74.097581];

const SEDES = {
   suc: 'Sucursal',
   ave: 'Unidad Especializada de Vehículos',
   aed: 'Unidad Educativa',
   cajero:'Cajero'   
}

function Localizacion(sucursal, direccion, ciudad, departamento, telefono, horario_habitual, horario_cajero, SEDES, horario_adicional, latitud, longitud, urlimage) {
   this.sucursal = sucursal;
   this.direccion = direccion;
   this.telefono = telefono;
   this.horario_cajero = horario_cajero;
   this.horario_habitual = horario_habitual;
   this.horario_adicional = horario_adicional;
   this.sede = SEDES;
   this.latitud = latitud;
   this.longitud = longitud;
   this.ciudad = ciudad;
   this.departamento = departamento;
   this.urlimage = urlimage;
}

var ubicaciones = [
   // Prueba
   new Localizacion("Centro","Cra 44 36-40","Barranquilla","Atlántico","3302700","8:00am - 4:00pm, Viernes 04:30:00 p.m.",undefined,SEDES.suc,undefined,"10.983335","-73.779656", "parquebolivar.jpg"),
   // Barranquilla
   new Localizacion("Centro","Cra 44 36-40","Barranquilla","Atlántico","3302700","8:00am - 4:00pm, Viernes 04:30:00 p.m.",undefined,SEDES.suc,undefined,"10.983335","-74.779656"),
   new Localizacion("Calle 72","Cll 72 41C - 46 locales 5,6,7","Barranquilla","Atlantico",3302700,"8:00am - 4:00pm, Viernes 04:30:00 p.m.(fin de mes), Lunes a Viernes 5:00-7:00 Sabados 9:00-1:00","L - D de 6:00 am a 10:00 pm",SEDES.suc,undefined,"10.991106","-74.807236"),
   new Localizacion("Prado","Cra 59 75-13","Barranquilla","Atlántico",3302700,"8:00 am a 4:00 pm / Viernes y fin de mes de 8:00 am a 4:30 pm",undefined,SEDES.suc,undefined,"11.004796","-74.799924"),
   new Localizacion("Barranquilla-UV","Cra 59 75-13","Barranquilla","Atlántico",3302700,"8:00am - 4:00pm",undefined,SEDES.ave,undefined,"11.004796","-74.799924"),
   
   // Cali
   new Localizacion("Holguines","Cr 100 #11-60 Local 160 - Centro Comercial Holguines Trade Center","Cali","Valle del Cauca","(2)6080200","8:00 am a 12:00 pm - 1:00 pm a 4:00 pm / Viernes y fin de mes de 8:00 am a 4:30 pm","L - D de 6:00 am a 10:00 pm",SEDES.suc,undefined,"3.372703","-76.539695"),
   new Localizacion("Alameda","Cll 9 26-55","Cali","Valle del Cauca","(2)6080200","8:00 am a 4:00 pm / Viernes y fin de mes de 8:00 am a 4:30 pm"," L - D de 7:00 am a 10:00 pm",SEDES.suc,undefined,"3.433335","-76.535142"),
   new Localizacion("Centro Carrera 3a","Cra 3 11-03","Cali","Valle del Cauca","(2)6080200","8:00 am a 4:00 pm / Viernes y fin de mes de 8:00 am a 4:30 pm","L - D de 6:00 am a 10:00 pm",SEDES.suc,undefined,"3.453013","-76.535142"),
   new Localizacion("Cali- UV","Av 6A Norte 20N - 67","Cali","Valle del Cauca","(2)608200","8:00 am a 4:00 pm / Fin de mes de 8:00 am a 4:30 pm","L - D de 6:00 am a 10:00 pm",SEDES.ave,undefined,"3.462925","-76.531101"),
   new Localizacion("Av. Sexta Norte","Av 6a Norte 20","Cali","Valle del Cauca","(2)608200","8:00 am a 4:00 pm / Fin de mes de 8:00 am a 4:30 pm","L - D de 6:00 am a 10:00 pm",SEDES.suc," L - V 5:00 pm a 7:00 pm","3.462926","-76.531102"),
   
   // Pereira
   new Localizacion("Av.Circunvalar","Av Circunvalar 2 -08","Pereira","Risaralda","01 8000 91 99 18","8:00 am a 4:00 pm / Fin de mes de 8:00 am a 4:30 pm","L - D de 7:00 am a 10:00 pm",SEDES.suc,undefined,"4.808326","-75.680558"),
   new Localizacion("Plaza Bolivar","Edificio Centro del Comercio Local 124 Cra.7#16-50","Pereira","Risaralda","01 8000 91 99 18","8:00 am a 4:00 pm / Fin de mes de 8:00 am a 4:30 pm","L - D de 7:00 am a 10:00 pm",SEDES.suc,undefined,"4.814437","-75.692028"),
   
   //  Medellin
   new Localizacion("Poblado","Cra 43A 16 sur 63","Medellin","Antioquia","01 8000 91 99 18","8:00 am a 4:00 pm / Viernes y fin de mes de 8:00 am a 4:30 pm","Horario cajero:L - D 24 Horas",SEDES.suc,undefined,"6.189642","-75.577453"),
   new Localizacion("Medellin-UV","Cra 43A 16 sur 63","Medellín","Antioquia","01 8000 91 99 18","8:00am - 4:00pm","L - D 24 Horas",SEDES.ave,undefined,"6.189727","-75.577363"),
   new Localizacion("Laureles","Circular 73B 76-16","Medellín","Antioquia","01 8000 91 99 18","8:00 am a 12:30 pm - 1:30 pm a 4:00 pm / Viernes y fin de mes de 8:00 am a 4:30 pm","L - D de 6:00 am a 10:00 pm",SEDES.suc,undefined,"6.243435","-75.597144"),
   new Localizacion("Junin","Cra 49 50-23","Medelín","Antioquia","01 8000 91 99 18"," 8:00 am a 4:00 pm / Viernes y fin de mes de 8:00 am a 4:30 pm"," L - D de 6:00 am a 7:00 pm",SEDES.suc,undefined,"6.249360","-75.566857"),
   
   // Santander
   new Localizacion("San gil","Cll 12 10-32","San Gil","Santander","01 8000 91 99 18"," 8:00 am a 11:30 am - 2:00 pm a 4:00 pm / Viernes y fin de mes de 8:00 am a 4:30 pm","L - D 24 Horas",SEDES.suc,undefined,"6.553866","-73.133626"),
   new Localizacion("Zapatoca","Cra 9 20-76","Zapatoca","Santander","01 8000 91 99 18","8:00 am a 11:30 am - 2:00 pm a 4:00 pm / Viernes y fin de mes de 8:00 am a 4:30 pm",undefined,SEDES.suc,undefined,"6.816772","-73.268178"),
   new Localizacion("Cañaveral","Cra 25 29-87 L 19","Bucaramanga","Santander","01 8000 91 99 18","8:00am - 4:00pm, Viernes 04:30:00 p.m.(fin de mes), Lunes a Viernes 5:00-7:00 Sabados 11:00-4:00","L - D 24 Horas",SEDES.suc,undefined,"7.070091","-73.107025"),
   new Localizacion("Paseo del Comercio","Cll 35 18-54 Paseo del Comercio","Bucaramanga","Santander","01 8000 91 99 18","8:00am - 4:00pm, Viernes 04:30:00 p.m.",": L - D de 7:00 am a 10:00 pm",SEDES.suc,undefined,"7.119544","-73.123789"),
   
   // Resto del país  
   new Localizacion("Av. Cero","Av 0 14-70 Ed. Villareal","Cucuta","Nte. Santander","01 8000 91 99 18","8:00am - 4:00pm, Viernes 04:30:00 p.m.(fin de mes), Lunes a Viernes 5:00-7:00 Sabados 9:00-1:00"," L - D 24 Horas",SEDES.suc,undefined,"7.883102","-72.497835"),
   new Localizacion("Monteria","Cll 28 1-65 ESQUINA","Monteria","Cordoba","01 8000 91 99 18","8:00 am a 4:00 pm / Fin de mes de 8:00 am a 4:30 pm","L - D de 6:00 am a 10:00 pm",SEDES.suc,undefined,"8.756462","-75.887025"),    
   new Localizacion("Ipiales","Cra 7 13-60","Ipiales","Nariño"," 01 8000 91 99 18","8:00am - 12:00am - 2:00pm - 4:00pm, Viernes 04:30:00 p.m.","L - D de 6:00 am a 10:00 pm",SEDES.suc,undefined,"0.825097","-77.639486"),
   new Localizacion("Pasto","cll 19 26-31 Centro","Pasto","Nariño","01 8000 91 99 18","8:00am - 4:00pm, Viernes 04:30:00 p.m.",undefined,SEDES.suc,undefined,"1.216307","-77.278590"),
   new Localizacion("Cartagena","cll 32 A # 8 -50 la matuna","Cartagena","Bolivar","01 8000 91 99 18","8:00am - 4:00pm, Viernes"," L - D 24 Horas",SEDES.suc,undefined,"10.423894","-75.547776"),
   new Localizacion("Neiva","Calle 7 N° 5 - 78","Neiva","Huila","01 8000 91 99 18","8:00am - 4:00pm, Viernes 04:30:00 p.m.(fin de mes), Lunes a Viernes 5:00-7:00 Sabados 9:00-1:00","L - D de 6:00 am a 10:00 pm",SEDES.suc,undefined,"2.926313","-75.287796"),
   new Localizacion("Ibagué","Cll 15 3-24 Local 1. ED. Caja Agraria","Ibagué","Tolima"," 01 8000 91 99 18","8:00am - 4:00pm, Viernes 04:30:00 p.m.(fin de mes), Lunes a Viernes 5:00-7:00 Sabados 9:00-1:00","L - D de 6:00 am a 9:00 pm",SEDES.suc,undefined,"4.442267","-75.238029"),
   new Localizacion("Armenia","Cra 17 # 19-34","Armenia","Quindio","01 8000 91 99 18","8:00am - 4:00pm, Viernes 04:30:00 p.m.","L - D 24 Horas",SEDES.suc,undefined,"4.534627","-75.674125"),
   new Localizacion("Multicentro","Cra 23 69-70 L. 1 y 2","Manizales","Caldas","01 8000 91 99 18","8:00am - 4:00pm, Viernes 04:30:00 p.m.(fin de mes), Lunes a Viernes 5:00-7:00 Sabados 9:00-1:00"," L - D 24 Horas",SEDES.suc,undefined,"5.060764","-75.488967"),
   new Localizacion("Tunja","Cra 11 20-29","Tunja","Boyacá","01 8000 91 99 18","8:00am - 4:00pm, Viernes 04:30:00 p.m."," L - D 24 Horas",SEDES.suc,undefined,"5.533727","-73.362906"),
   new Localizacion("Itagui","Calle 50 48-56","Itagui","Antioquia","01 8000 91 99 18","8:00am - 4:00pm, Viernes 04:30:00 p.m.","L - D de 6:00 am a 9:00 pm",SEDES.suc,undefined,"6.170728","-75.609115"),
   new Localizacion("Envigado","Cra. 43 36 sur 20","Envigado","Antioquia"," 01 8000 91 99 18","8:00am - 4:00pm, Viernes 04:30:00 p.m.(fin de mes), Lunes a Viernes 5:00 - 7:00 Sabados 9:00 - 1:00 ","L - D de 6:00 am a 9:00 pm",SEDES.suc,undefined,"6.171333","-75.587103"),
   //    Sedes sur
   new Localizacion("Américas", "Av. Américas N° 42 - 81","Bogota","Cundinamarca", 6501000, "8:00 am a 4 pm/Viernes y fin de mes de 8:00 am a 4:30 pm", " L - D 24 Horas", SEDES.suc, undefined,"4.625868","-74.097246"),
   new Localizacion("Carvajal", "Av. Calle 26 sur N° 69 - 12", "Bogota","Cundinamarca",6501000, " 8:30 am a 3:30 pm / Viernes y fin de mes de 8:30 am a 4:30 pm", "L - D de 7:00 am a 5:30 pm", SEDES.suc, undefined,"4.612692","-74.134143"),
   new Localizacion("Restrepo", "Cra 19 N° 15 - 31  local 1 y 2","Bogota","Cundinamarca", 6501000, "8:30 am a 3:30 pm / Fin de mes de 8:30 am a 4:30 pm", " L - D de 6:00 am a 8:00 pm", SEDES.suc, " L - V 5:00 pm a 7:00 pm","4.586899","-74.100168"),
   new Localizacion("Kennedy", "Calle 35 sur N° 78 A - 12","Bogota","Cundinamarca", 6501000, "8:30 am a 3:30 pm / Fin de mes de 8:30 am a 4:30 pm", "L - D de 6:00 am a 9:00 pm", SEDES.suc,undefined,"4.624188","74.148119"),
   new Localizacion("Venecia", "Dgnal. 49 A sur N° 52 C - 85", "Bogota","Cundinamarca",6501000, "8:30 am a 3:30 pm / Viernes y fin de mes de 8:30 am a 4:30 pm", " L - D de 6:00 am a 10:00 pm", SEDES.suc,undefined,"4.59196","-74.14053"),
   //    Sedes occidente
   new Localizacion("Fontibón", "Calle 17 N° 99 - 02", "Bogota","Cundinamarca",6501000, "8:30 am a 3:30 pm / Viernes y fin de mes de 8:30 am a 4:30 pm", "L - D 24 Horas", SEDES.suc, undefined,"4.672204", "-74.145029"),
   new Localizacion("Calle 80", "Calle 80 N° 74 B - 20", "Bogota","Cundinamarca",6501000, "8:30 am a 3:30 pm / Fin de mes de 8:30 am a 4:30 pm", " L - D de 6:00 am a 10:00 pm", SEDES.suc,undefined,"4.696997","-74.092272"),
   new Localizacion("La Esmeralda", "Calle 44 N° 52 - 28", "Bogota","Cundinamarca",6501000, "8:30 am a 3:30 pm / Viernes y fin de mes de 8:30 am a 4:30 pm", "L - D de 6:00 am a 10:00 pm", SEDES.suc, undefined,"4.643805","-74.091173"),
   //    Sedes norte   
   new Localizacion("Avenida Chile", "Calle 72 N° 11 - 27", "Bogota","Cundinamarca",6501000, "8:30 am a 3:30 pm / Viernes y fin de mes de 8:30 am a 4:30 pm", "L - D de 6:00 am a 9:00 pm", SEDES.suc, undefined,"4.657482","-74.058632"),
   new Localizacion("Contador", "Av. 19 N° 134 A - 41", "Bogota","Cundinamarca",6501000, "8:30 am a 3:30 pm / Viernes y fin de mes de 8:30 am a 4:30 pm", "L - D 24 Horas", SEDES.suc, undefined,"4.725158","-74.046143"),
   new Localizacion("Chico", "Cra 11 N° 92 - 09", "Bogota","Cundinamarca",6501000, "8:00 am a 4:00 pm / Viernes y fin de mes de 8:00 am a 4:30 pm", "L - D 24 Horas", SEDES.suc, undefined,"4.673797","-74.047769"),
   new Localizacion("Toberin", "Calle 166 N° 20- 11", "Bogota","Cundinamarca",6501000, "8:30 am a 3:30 pm / Viernes y fin de mes de 8:30 am a 4:30 pm", " L - D de 6:00 am a 10:00 pm", SEDES.suc, undefined,"4.746508","-74.043186"),
   new Localizacion("Unicentro", "Cra 15 N° 119 - 52", "Bogota","Cundinamarca",6501000, "8:30 am a 3:30 pm /Fin de mes de 8:30 am a 4:30 pm", "L - D 24 Horas", SEDES.suc,undefined,"4.699773","-74.042736"),
   
   //   Sedes centro
   new Localizacion("Bogota-Unidad Educativo Fenix","Cra 11 94-02","Bogota","Bogota D.C","6501000","8:00am - 8:00pm",undefined,SEDES.aed,undefined,"4.677267","-74.045974"),
   new Localizacion("Bogota-Unidad Educativo Fenix", "Cra 11 94-02","Bogota","Bogota D.C",6501000,"8:00am - 8:00pm",undefined,SEDES.aed,undefined,"4.677270","-74.045979"),
   new Localizacion("Bogota-UV","Cra 11 92-09","Bogota","Bogota D.C","6501000","8:00am - 7:00pm",undefined,SEDES.ave,undefined,"4.673869","-74.048071"),
   new Localizacion("Carrera 10", "Cra 10 N° 16 - 74", "Bogota","Cundinamarca",6501000, "8:30 am a 3:30 pm / Viernes y fin de mes de 8:30 am a 4:30 pm", "L - D de 7:45 am a 5:30 pm", SEDES.suc, undefined,"4.605001","-74.075090"),
   new Localizacion("Centro Calle 22", "Cra 7 N° 22 - 80", "Bogota","Cundinamarca",6501000, "8:30 am a 3:30 pm / Viernes y fin de mes de 8:30 am a 4:30 pm", " L - D de 6:00 am a 10:00 pm", SEDES.suc,undefined,"4.608867","-74.070215"),
   new Localizacion("Chapinero", "Cra 13 N° 57 - 18","Bogota","Cundinamarca", 6501000, "8:30 am a 3:30 pm / Fin de mes: 8:30 am a 4:30 pm", " L - D de 6:00 am a 9:00 pm", SEDES.suc, " L - V 5:00 pm a 7:00 pm","4.644159","-74.064358"),
   new Localizacion("7 de Agosto", "Cra 24 N° 63 D - 15", "Bogota","Cundinamarca",6501000, " 8:30 am a 3:30 pm / Viernes y fin de mes de 8:30 am a 4:30 pm", "L - D de 7:00 am a 10:00 pm", SEDES.suc, undefined,"4.654623","-74.071662")
];

function coordenadasIniciales() {
	navigator.geolocation.getCurrentPosition(function(position) {
		coordenadaGeneral = [position.coords.latitude, position.coords.longitude];
	});
	if (coordenadaGeneral == undefined || coordenadaGeneral == null) {
		coordenadaGeneral = [4.626013, -74.097581];
	}
}
coordenadasIniciales();

function pintarSede(SEDE) {   
   let map = L.map('map').
      setView(coordenadaGeneral, 12);
   // añadir capas de openstreetmap
   L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
      maxZoom: 18
   }).addTo(map);
   // permite moverse en el mapa.
   L.control.scale().addTo(map);
   //  Agregar marcadores al mapa
   for (i = 0; i < ubicaciones.length; i++) {
      let marca = L.marker([ubicaciones[i].latitud, ubicaciones[i].longitud], { draggable: false }).addTo(map);
      marca.bindPopup("<div class='model-info' id='ubicaciones' onmouseover='zoomin();' onmouseout='zoomout();' onclick='zoomin();'>"
					   + "<b>Sede " + ubicaciones[i].sucursal + "</b>"
					   + "<br />"
                       + "<b style='font-size: 9px;'>" + ubicaciones[i].departamento + " - " + ubicaciones[i].ciudad + "</b>"
					   + "<br />"
					   + "<b style='font-size: 9px;'>" + ubicaciones[i].sede + "</b>"
					   + "<hr>"
                       + "<b>general</b>"
					   + "<br />"
					   + "<img src='./../assets/casa.svg' style='padding-right:8px; width:18px; height:18px'>"+ubicaciones[i].direccion+"<br />"
					   + (ubicaciones[i].urlimage ? 
							"<img src='./../assets/sedes/" + ubicaciones[i].urlimage + "' style='width:100%;'><br />" : 
							"")
					   + "<hr>"
                       + "<b>horarios</b>"
					   + "<br />"
					   + "<img src='./../assets/calendario.svg' style='padding-right:8px; width:18px; height:18px'>"+ubicaciones[i].horario_habitual
					   + "<br />"
                       + "<img src='./../assets/cajero.svg' style='padding-right:8px; width:18px; height:18px'>"+ubicaciones[i].horario_cajero
					   + "<br />"
					   + "<hr>"
                       + "<b>teléfonos: </b>"
					   + "<br>"
					   + "<img src='./../assets/celular.svg' style='padding-right:8px; width:18px; height:18px'>"+ubicaciones[i].telefono+"<br />"
                       + "</div>");
   }   
}

function zoomin() {
   document.getElementById("ubicaciones").parentElement.parentElement.style='transform:scale(1.3) translateY(-30px)';
}

function zoomout(){
   document.getElementById("ubicaciones").parentElement.parentElement.style.transform='scale(1.0)';
}