const SEDES = {
   oficina: 'OFICINA',
   cajero: 'CAJERO',
   oficina_cajero: 'OFICINA_CAJERO'
}

const COORDENADA_DEFECTO={
latitud: '4.625482353047019',
longitud: '-74.09734045434911',
maxZoom: 18
}

function Localizacion(sucursal, direccion, telefono, horario_habitual, horario_cajero, SEDES, horario_adicional,latitud,longitud) {
   this._sucursal = sucursal;
   this._direccion = direccion;
   this._telefono = telefono;
   this.horario_cajero = horario_cajero;
   this.horario_habitual = horario_habitual;
   this.horario_adicional = horario_adicional;
   this.sede = SEDES;
   this.latitud= latitud;
   this.longitud= longitud;
   
}
-74.070504                                    
var ubicaciones = [
   //    Sedes sur
   new Localizacion("Américas", "Av. Américas N° 42 - 81", 6501000, "8:00 am a 4 pm/Viernes y fin de mes de 8:00 am a 4:30 pm", " L - D 24 Horas", SEDES.oficina, undefined,"4.6254702","-74.0970843"),
   new Localizacion("Carvajal", "Av. Calle 26 sur N° 69 - 12", 6501000, " 8:30 am a 3:30 pm / Viernes y fin de mes de 8:30 am a 4:30 pm", "L - D de 7:00 am a 5:30 pm", SEDES.cajero, undefined,"4.612811529578977","-74.13405633089127"),
   new Localizacion("Restrepo", "Cra 19 N° 15 - 31 sur", 6501000, "8:30 am a 3:30 pm / Fin de mes de 8:30 am a 4:30 pm", " L - D de 6:00 am a 8:00 pm", SEDES.oficina_cajero, " L - V 5:00 pm a 7:00 pm","4.588201","-74.100172"),
   new Localizacion("Kennedy", "Calle 35 sur N° 78 A - 12", 6501000, "8:30 am a 3:30 pm / Fin de mes de 8:30 am a 4:30 pm", "L - D de 6:00 am a 9:00 pm", SEDES.oficina_cajero, "L - V 5:00 pm a 7:00 pm","4.624382","-74.148012"),
   new Localizacion("Venecia", "Dgnal. 49 A sur N° 52 C - 85", 6501000, "8:30 am a 3:30 pm / Viernes y fin de mes de 8:30 am a 4:30 pm", " L - D de 6:00 am a 10:00 pm", SEDES.oficina_cajero, "L - V 5:00 pm a 7:00 pm","4.591253"," -74.138297"),
   //    Sedes occidente
   new Localizacion("Fontibón", "Calle 17 N° 99 - 02", 6501000, "8:30 am a 3:30 pm / Viernes y fin de mes de 8:30 am a 4:30 pm", "L - D 24 Horas", SEDES.oficina_cajero, undefined,"4.672655", "-74.144992"),
   new Localizacion("Calle 80", "Calle 80 N° 74 B - 20", 6501000, "8:30 am a 3:30 pm / Fin de mes de 8:30 am a 4:30 pm", " L - D de 6:00 am a 10:00 pm", SEDES.oficina_cajero, "L - V 5:00 pm a 7:00 pm","4.697356","-74.092231"),
   new Localizacion("La Esmeralda", "Calle 44 N° 52 - 28", 6501000, "8:30 am a 3:30 pm / Viernes y fin de mes de 8:30 am a 4:30 pm", "L - D de 6:00 am a 10:00 pm", SEDES.oficina_cajero, undefined,"4.644221","-74.091348"),
   //    Sedes norte   
   new Localizacion("Avenida Chile", "Calle 72 N° 11 - 27", 6501000, " 8:30 am a 3:30 pm / Viernes y fin de mes de 8:30 am a 4:30 pm", "L - D de 6:00 am a 9:00 pm", "cajero", undefined,"4.6572723","-74.0614727"),
   new Localizacion("Contador", "Av. 19 N° 134 A - 41", 6501000, " 8:30 am a 3:30 pm / Viernes y fin de mes de 8:30 am a 4:30 pm", "L - D 24 Horas", SEDES.oficina_cajero, undefined,"4.719919","-74.047587"),
   new Localizacion("Chico", "Cra 11 N° 92 - 09", 6501000, " 8:00 am a 4:00 pm / Viernes y fin de mes de 8:00 am a 4:30 pm", "L - D 24 Horas", SEDES.oficina_cajero, undefined,"4.673827","-74.048058"),
   new Localizacion("Toberin", "Calle 166 N° 20- 11", 6501000, "8:30 am a 3:30 pm / Viernes y fin de mes de 8:30 am a 4:30 pm", " L - D de 6:00 am a 10:00 pm", SEDES.oficina_cajero, undefined,"4.746372","-74.043852"),
   new Localizacion("Unicentro", "Cra 15 N° 119 - 52", 6501000, "8:30 am a 3:30 pm /Fin de mes de 8:30 am a 4:30 pm", "L - D 24 Horas", SEDES.oficina_cajero, "L - V 5:00 pm a 7:00 pm","4.699789","74.042994"),
   //   Sedes centro
   new Localizacion("Carrera 10", "Cra 10 N° 16 - 74", 6501000, "8:30 am a 3:30 pm / Viernes y fin de mes de 8:30 am a 4:30 pm", "L - D de 7:45 am a 5:30 pm", SEDES.oficina_cajero, undefined,"4.604870","-74.074734"),
   new Localizacion("Calle 22", "Cra 7 N° 22 - 80", 6501000, "8:30 am a 3:30 pm / Viernes y fin de mes de 8:30 am a 4:30 pm", " L - D de 6:00 am a 10:00 pm", SEDES.oficina_cajero,undefined,"4.608663","-74.070504"),
   new Localizacion("Chapinero", "Cra 13 N° 57 - 18", 6501000, "8:30 am a 3:30 pm / Fin de mes: 8:30 am a 4:30 pm", " L - D de 6:00 am a 9:00 pm", SEDES.oficina_cajero, " L - V 5:00 pm a 7:00 pm","4.644264","-74.064379"),
   new Localizacion("7 de Agosto", "Cra 24 N° 63 D - 15", 6501000, " 8:30 am a 3:30 pm / Viernes y fin de mes de 8:30 am a 4:30 pm", "L - D de 7:00 am a 10:00 pm", SEDES.oficina_cajero, undefined,"4.655415","-74.071879")
];
// console.log("OBJETO : " + ubicaciones[0].sucursal);

function pintarSede(SEDE) {
   //alert('1')
   
   var map = L.map('map').
      setView([4.626013, -74.097581], 13);
   //    <!-- añadir capas de openstreetmap- -->
   L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
      maxZoom: 18
   }).addTo(map);
   // permite moverse en el mapa.
   L.control.scale().addTo(map);
   //  Agregar marcadores al mapa
   var logo = '.\assets\logo-mini.png';
   for (i = 0; i < ubicaciones.length; i++) {
      L.marker([ubicaciones[i].latitud, ubicaciones[i].longitud], { draggable: false }).addTo(map);
      L.marker([4.625482353047019, -74.09734045434911], { draggable: false }).addTo(map);
      if (SEDES.cajero == ubicaciones[i].sedes) {
         alert('REESCRIBIR ESTILO');
      } else if (SEDES.oficina == ubicaciones[i].sedes) {
         alert('REESCRIBIR ESTILO');
      }
   }
   
}
/*
.leaflet-default-icon-path {
	background-image: url(images/marker-icon.png);
	}
*/


