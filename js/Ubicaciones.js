"use strict";
var flagzoom = undefined;
var coordenadaGeneral = [4.626013, -74.097581];
var btnpress = 0;
const SEDES = {
   suc: 'Sucursal',
   ave: 'Unidad Especializada de Vehículos',
   aed: 'Unidad Educativa',
   cajero: 'Cajero'
}

function Localizacion(sucursal, direccion, ciudad, departamento, telefono, horario_habitual, horario_cajero, ArraySedes, horario_adicional, latitud, longitud, urlimage) {
   this.sucursal = sucursal;
   this.direccion = direccion;
   this.telefono = telefono;
   this.horario_cajero = horario_cajero;
   this.horario_habitual = horario_habitual;
   this.horario_adicional = horario_adicional;
   this.sede = ArraySedes;
   this.latitud = latitud;
   this.longitud = longitud;
   this.ciudad = ciudad;
   this.departamento = departamento;
   this.urlimage = urlimage;
}

var ubicaciones = [
   // Barranquilla
   new Localizacion("Centro", "Cra 44 No 36 - 40", "Barranquilla", "Atlántico", "3302700", "Lunes a Jueves: 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "L - D 6:00 am a 9:00 pm", [SEDES.suc, SEDES.cajero], undefined, "10.983298", "-74.779989"),
   new Localizacion("Calle 72", "Calle 72 No 41 C- 46 Locales 5,6,7", "Barranquilla", "Atlantico", 3302700, "Lunes a Jueves: 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "L - D 6:00 am a 10:00 pm", [SEDES.suc, SEDES.cajero, SEDES.aed], undefined, "10.9921542", "-74.8073831", "banco-pichincha-barranquilla-calle-72.png"),
   new Localizacion("Prado", "Cra 59 75-13", "Barranquilla", "Atlántico", 3302700, "Lunes a Jueves: 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00am a 04:30pm", undefined, [SEDES.suc, SEDES.aed, SEDES.ave], undefined, "11.004862", "-74.799992"),

   // Cali
   new Localizacion("Holguines", "Cra 100 No 11 - 60 Local 160 - Centro Comercial Holguines Trade Center", "Cali", "Valle del Cauca", "(2)6080200", "Lunes a Jueves: 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "L - D 7:00 am - 10:00 pm", [SEDES.suc, SEDES.cajero, SEDES.aed], undefined, "3.372703", "-76.539695", "banco-pichincha-cali-holguines.png"),
   new Localizacion("Alameda", "Calle 9 No 26 - 55", "Cali", "Valle del Cauca", "(2)6080200", "Lunes a Jueves: 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "L - D 7:00 am - 8:00 pm", [SEDES.suc, SEDES.cajero], undefined, "3.433335", "-76.535142"),
   new Localizacion("Centro Carrera 3a", "Cra 3 No 11 - 03", "Cali", "Valle del Cauca", "(2)6080200", "Lunes a Jueves: 8:00 am a 4:00 pm , Viernes y fin de mes: 8:00 am a 04:30 pm   ", "L - D 24 Horas", [SEDES.suc, SEDES.cajero, SEDES.aed], undefined, "3.452926", "-76.533186", "banco-pichincha-cali-centro.png"),
   new Localizacion("Cali- UV", "Av. 6 No. 19N- 19", "Cali", "Valle del Cauca", "(2)608200", "8:00 am a 4:00 pm / Fin de mes de 8:00 am a 4:30 pm", "L - D de 6:00 am a 10:00 pm", [SEDES.ave], undefined, "3.47913", "-76.5255601"),
   new Localizacion("Av. Sexta Norte", "Av. 6A Norte No. 20N - 67", "Cali", "Valle del Cauca", "(2)608200", "Lunes a Jueves: 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "L - D 24 Horas", [SEDES.suc, SEDES.cajero], "L - V 5:00 pm a 7:00 pm", "3.46279", "-76.531249", "banco-pichincha-cali-av-sexta.png"),
   // Pereira
   new Localizacion("Av.Circunvalar", "Av. Circunvalar No 2 - 08", "Pereira", "Risaralda", "01 8000 919918 / 01 8000 111111", "Lunes a Jueves : 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "L - D  7:00 am - 9:00 pm", [SEDES.suc, SEDES.cajero], undefined, "4.808354", "-75.6806", "banco-pichincha-pereira-av-circunvalar.png"),
   new Localizacion("Plaza Bolivar", "Cra. 7 No. 16 - 50 Local 124", "Pereira", "Risaralda", "01 8000 919918 / 01 8000 111111", "Lunes a Jueves : 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "L - D  6:00 am - 12:00 pm", [SEDES.suc, SEDES.cajero], undefined, "4.814437", "-75.692028", "banco-pichincha-plaza-bolivar.png"),

   //  Medellin
   new Localizacion("Poblado", " Cra 43A No. 16 Sur - 63", "Medellin", "Antioquia", "01 8000 919918 / 01 8000 111111", "Lunes a Jueves : 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "L - D 24 Horas", [SEDES.suc, SEDES.cajero, SEDES.ave], undefined, "6.189771 ", "-75.577246", "banco-pichincha-medellin-poblado.png"),
   new Localizacion("Laureles", "Circular 73B No. 76 - 16", "Medellín", "Antioquia", "01 8000 919918 / 01 8000 111111", "Lunes a Jueves: 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "L - D 7:00 am - 10:00 pm", [SEDES.suc, SEDES.cajero], undefined, "6.243302", "-75.597308", "banco-pichincha-medellin-laureles.png"),
   new Localizacion("Junin", "Cra 49 No. 50 - 23", "Medelín", "Antioquia", "01 8000 919918 / 01 8000 111111", "Lunes a Jueves : 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "L - D  6:00 am - 9:00 pm", [SEDES.suc, SEDES.cajero], undefined, "6.24936", "-75.566857"),

   // Santander
   new Localizacion("San gil", "Calle 12 No 10 - 32", "San Gil", "Santander", "01 8000 919918 / 01 8000 111111", "Lunes a Jueves: 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "L - D 24 Horas", [SEDES.suc, SEDES.cajero], undefined, "6.554014", "-73.13354"),
   new Localizacion("Zapatoca", "Cra 9 20-76", "Zapatoca", "Santander", "01 8000 919918 / 01 8000 111111", "Lunes a Viernes: 8:00 am a 12:00 pm - 2:00 pm a 5:00 pm ", undefined, [SEDES.suc], undefined, "6.8161512", "-73.2685308", "banco-pichincha-zapatoca.png"),
   new Localizacion("Cañaveral", "Cra 25 No 29 - 87 Local 19", "Bucaramanga", "Santander", "01 8000 919918 / 01 8000 111111", "Lunes a Jueves : 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", " L - D 24 Horas", [SEDES.suc, SEDES.cajero], undefined, "7.125948", "-73.120686", "Banco-pichincha-bucaramanga-canaveral.png"),
   new Localizacion("Paseo del Comercio", " Calle 35 No 18 - 54 ", "Bucaramanga", "Santander", "01 8000 919918 / 01 8000 111111", "Lunes a Jueves : 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "L - D 7:00 am - 8:00 pm", [SEDES.suc, SEDES.cajero], undefined, "7.11943", "-73.123824", "banco-pichincha-bucaramanga-paseo-del-comercio.png"),
   new Localizacion("Cabecera", "Carrera 35 No 42 - 39", "Bucaramanga", "Santander", "(7) 6800299 / 01 8000 919918 / 01 8000 111111", "Lunes a Jueves 8:00 am a 4:00 pm / Viernes y fin de mes 8:00 am a 4:30 pm", "L - D 24 Horas", [SEDES.suc, SEDES.cajero, SEDES.ave, SEDES.aed], undefined, "7.1209621", "-73.1101536"),
   // Resto del país  
   new Localizacion("Av. Cero", "Av. 0 No 14 - 70", "Cucuta", "Nte. Santander", "01 8000 919918 / 01 8000 111111", "Lunes a Jueves : 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "L - D 24 Horas", [SEDES.suc, SEDES.cajero, SEDES.aed], undefined, "7.883102", "-72.497835", "banco-pichincha-cucuta.png"),
   new Localizacion("Monteria", "Calle 28 No 1 - 65 Esquina", "Monteria", "Cordoba", "01 8000 919918 / 01 8000 111111", "Lunes a Jueves : 8:00am a 4:00pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "L - D 6:00 am - 10:00 pm", [SEDES.suc, SEDES.cajero, SEDES.aed], undefined, "8.756472", "-75.887073", "banco-pichincha-monteria.png"),
   new Localizacion("Ipiales", "Cra 7 13-60", "Ipiales", "Nariño", " 01 8000 919918 / 01 8000 111111", "Lunes a Jueves: 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "L - D 7:00 am - 9:00 pm", [SEDES.suc, SEDES.cajero], undefined, "0.825097", "-77.639683", "banco-pichincha-ipiales.png"),
   new Localizacion("Pasto", "cll 19 26-31 Centro", "Pasto", "Nariño", "01 8000 919918 / 01 8000 111111", "Lunes a Jueves: 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", undefined, [SEDES.suc, SEDES.aed], undefined, "1.206509", "-77.251971"),
   new Localizacion("Cartagena", "Calle 32A No. 8A - 50 La Matuna Centro Av. Venezuela", "Cartagena", "Bolivar", "01 8000 919918 / 01 8000 111111", "Lunes a Jueves: 8:00 am a 4:00 pm,  Viernes y fin de mes: 8:00 am a 04:30 pm", " L - D 24 Horas", [SEDES.suc, SEDES.cajero, SEDES.aed], undefined, "10.423866", "-75.547543", "bancopichincha-cartagena-la-matuna.png"),
   new Localizacion("Neiva", "Calle 7 N° 5 - 78", "Neiva", "Huila", "01 8000 919918 / 01 8000 111111", "Lunes a Jueves: 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "L - D 6:00 am - 10:00 pm", [SEDES.suc, SEDES.cajero, SEDES.aed], undefined, "2.926186", "-75.287724", "banco-pichincha-neiva.png"),
   new Localizacion("Ibagué", "Calle 15 No 3 - 24, Local 1", "Ibagué", "Tolima", " 01 8000 919918 / 01 8000 111111", "Lunes a Jueves : 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "L - D 6:00 am - 6:00 pm", [SEDES.suc, SEDES.cajero, SEDES.aed], undefined, "4.442019", "-75.238195", "banco-pichincha-ibague.png"),
   new Localizacion("Armenia", "Cra 17 # 19-34", "Armenia", "Quindio", "01 8000 919918 / 01 8000 111111", "Lunes a Jueves: 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "L - D 7:00 am - 7:00 pm", [SEDES.suc, SEDES.cajero, SEDES.aed], undefined, "4.534701", "-75.674106", "banco-pichincha-armenia.png"),
   new Localizacion("Multicentro", " Cra 23 No 59 - 70, Local 1A y 2", "Manizales", "Caldas", "01 8000 919918 / 01 8000 111111", "Lunes a Jueves: 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "L - D 24 Horas", [SEDES.suc, SEDES.cajero, SEDES.aed], undefined, "5.060804", "-75.489145", "banco-pichincha-manizales.png"),
   new Localizacion("Tunja", "Cra 11 No 20 - 29", "Tunja", "Boyacá", "01 8000 919918 / 01 8000 111111", "Lunes a Jueves: 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "L - D 24 Horas", [SEDES.suc, SEDES.cajero, SEDES.aed], undefined, "5.533923", "-73.362829", "banco-pichincha-tunja.png"),
   new Localizacion("Itagui", "Calle 50 No.   48 - 56", "Itagui", "Antioquia", "01 8000 919918 / 01 8000 111111", "Lunes a Jueves : 8:00 am a 4:00 pm , Viernes y fin de mes: 8:00 am a 04:30 pm", "L - D 6:00 am - 9:00 pm", [SEDES.suc, SEDES.cajero], undefined, "6.17078", "-75.609199", "banco-pichincha-medellin-itagui.png"),
   new Localizacion("Envigado", "Cra. 43 36 sur 20", "Envigado", "Antioquia", " 01 8000 919918 / 01 8000 111111", "Lunes a Jueves: 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "L - D 6:00 am - 9:00 pm", [SEDES.suc, SEDES.cajero], undefined, "6.170957", "-75.587205", "banco-pichincha-envigado.png"),
   //    Sedes sur
   new Localizacion("Américas", "Av Las Américas 42 -81", "Bogota", "Cundinamarca", "(1) 6501000", "Lunes a Jueves: 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm ", "L - D 24 Horas", [SEDES.suc, SEDES.cajero], undefined, "4.625605", "-74.097316", "banco-pichincha-bogota-americas.png"),
   new Localizacion("Carvajal", ":Av Carrera 26A No 69 - 12", "Bogota", "Cundinamarca", "(1) 6501000", "Lunes a Jueves : 8:30 am a 3:30 pm,Viernes y fin de mes: 8:30 am a 04:30 pm", "L - D 7:00 am - 8:00 pm", [SEDES.suc, SEDES.cajero], undefined, "4.612692", "-74.134143", "banco-pichincha-bogota-carvajal.png"),
   new Localizacion("Restrepo", "Carrera 19 No 15 - 31 Sur", "Bogota", "Cundinamarca", "(1) 6501000", "Lunes a Jueves : 8:30 am a 3:30 pm,  Viernes y fin de mes: 8:30 am a 04:30 pm", "L - S 6:00 am - 9:00 pm", [SEDES.suc, SEDES.cajero, SEDES.aed], " L - V 5:00 pm a 7:00 pm", "4.586979", "-74.100142", "bsnco-pichincha-bogota-restrepo.png"),
   new Localizacion("Kennedy", "Calle 35 Sur No 78 A - 12", "Bogota", "Cundinamarca", "(1) 6501000", "Lunes a Jueves : 8:30 am a 3:30 pm ", "L-D 6:00am - 9:00pm", [SEDES.suc, SEDES.cajero, SEDES.aed], undefined, "4.6241561", "-74.1484767", "banco-pichincha-bogota-keneddy.png"),
   new Localizacion("Venecia", "Diagonal 49 A Sur No 52 C - 85", "Bogota", "Cundinamarca", "(1) 6501000", "Lunes a Jueves : 8:30 am a 3:30 pm, Viernes y fin de mes: 8:30 am a 04:30 pm", "L - D 6:00 am - 9:00 pm", [SEDES.suc, SEDES.cajero, SEDES.aed], undefined, "4.590942", "-74.138015"),
   //    Sedes occidente
   new Localizacion("Fontibón", "Calle 17 No 99 - 02 Esquina", "Bogota", "Cundinamarca", "(1) 6501000", "Lunes a Jueves : 8:30 am a 3:30 pm, Viernes y fin de mes: 8:30 am a 04:30 pm", "L - D 24 Horas", [SEDES.suc, SEDES.cajero], undefined, "4.672426", "-74.145172"),
   new Localizacion("Calle 80", "Calle 80 No 74B - 20", "Bogota", "Cundinamarca", "(1) 6501000", "Lunes a jueves : 8:30 am a 3:30 pm, Viernes y fin de mes: 8:30 am a 04:30 pm", "L - D 6:00 am - 9:00 pm", [SEDES.suc, SEDES.cajero], undefined, "4.697322", "-74.092239", "banco-pichincha-calle-80.png"),
   new Localizacion("La Esmeralda", "Calle 44 No 52 - 28", "Bogota", "Cundinamarca", "(1) 6501000", "Lunes a Jueves : 8:30 am a 3:30 pm, Viernes y fin de mes: 8:30 am a 04:30 pm", "L-D 24 Horas", [SEDES.suc, SEDES.cajero], undefined, "4.644139", "-74.091403", "banco-pichincha-bogota-esmeralda.png"),
   //    Sedes norte   
   new Localizacion("Avenida Chile", "Calle 72 No 11 - 27", "Bogota", "Cundinamarca", "(1) 6501000", "Lunes a Jueves : 8:30 am a 3:30 pm, Viernes y fin de mes: 8:30 am a 04:30 pm", "L - D 6:00 am - 9:00 pm", [SEDES.suc, SEDES.cajero], undefined, "4.657199", "-74.059212", "banco-pichincha-av-chile.png"),
   new Localizacion("Contador", " Av 19 No 134A - 41", "Bogota", "Cundinamarca", "(1) 6501000", "Lunes a Jueves : 8:30 am a 3:30 pm , Viernes y fin de mes: 8:30 am a 04:30 pm", "L - D 24 Horas", [SEDES.suc, SEDES.cajero], undefined, "4.719564", "-74.047169", "banco-pichincha-bogota-contador.png"),
   new Localizacion("Chico", "Cra 11 No 92 - 09", "Bogota", "Cundinamarca", "(1) 6501000", "Lunes a Jueves : 8:00 am a 4.00 pm,  Viernes y fin de mes: 8:00 am a 04:30 pm", "L - D 24 Horas", [SEDES.suc, SEDES.cajero], undefined, "4.673857", "-74.048061", "banco-pichincha-bogota-calle-92.png"),
   new Localizacion("Toberin", "Calle 166 No 20 - 11", "Bogota", "Cundinamarca", "(1) 6501000", "Lunes a Jueves : 8:30 am a 3:30 pm,  Viernes y fin de mes: 8:30 am a 4:30 pm", " L - D 24 Horas", [SEDES.suc, SEDES.cajero, SEDES.aed], undefined, "4.7464454", "-74.0439724"),
   new Localizacion("Unicentro", "Av Cra 15 No 119 - 52 Local 102 y 103", "Bogota", "Cundinamarca", "(1) 6501000", "Lunes a Jueves : 8:30 am a 3:30 pm , Viernes y fin de mes: 8:30 am a 04:30 pm", "L - D 24 Horas", [SEDES.suc, SEDES.cajero, SEDES.aed], undefined, "4.699817", "-74.04277", "banco-pichincha-bogota-unicentro.png"),

   //   Sedes centro
   new Localizacion("Edificio Manhattan", "Cra 11 94-02 (Locales 114-115 / 106)", "Bogota", "Bogota D.C", "(1) 6501000", "Lunes a Viernes: 8:30 am a 6:00 pm", undefined, [SEDES.ave, SEDES.aed], undefined, "4.677267", "-74.045974"),
   //new Localizacion("Unidad Educativo - Edificio Manhattan", "Cra 11 94-02(Local 106)", "Bogota", "Bogota D.C", "(1) 6501000", "8:00am - 8:00pm", undefined, [SEDES.aed], undefined, "4.677270", "-74.045979"),
   new Localizacion("Carrera 10", "Carrera 10 No 16 - 74", "Bogota", "Cundinamarca", "(1) 6501000", "Lunes a Jueves : 8:30 am a 3:30 pm, Viernes y fin de mes: 8:30 am a 04:30 pm", "L - D 6:00 am - 6:00 pm", [SEDES.suc, SEDES.cajero], undefined, "4.604634", "-74.074827", "banco-pichincha-bogota-cra-10.png"),
   new Localizacion("Centro Calle 22", "Carrera 7 No 22 - 80", "Bogota", "Cundinamarca", "(1) 6501000", "Lunes a Jueves : 8:30 am a 3:30 pm, Viernes y fin de mes: 8:30 am a 04:30 pm", "L - D 6:00 am - 6:00 pm", [SEDES.suc, SEDES.cajero, SEDES.aed], undefined, "4.608594", "-74.070439", "banco-pichincha-calle-22.png"),
   new Localizacion("Chapinero", "Carrera 13 No 57 - 18", "Bogota", "Cundinamarca", "(1) 6501000", "Lunes a Jueves : 8:30 am a 3:30 pm , Viernes y fin de mes: 8:30 am a 04:30 pm", "L - D 6:00 am - 9:00 pm", [SEDES.suc, SEDES.cajero, SEDES.aed], " L - V 5:00 pm a 7:00 pm", "4.644226", "-74.064287"),
   new Localizacion("7 de Agosto", "Carrera 24 No 63D - 15", "Bogota", "Cundinamarca", "(1) 6501000", "Lunes a Jueves : 8:30 am a 3:30 pm  Viernes y fin de mes: 8:30 am a 04:30 pm", "L - D 6:00 am - 8:00 pm", [SEDES.suc, SEDES.cajero], undefined, "4.6551044", "-74.0718687", "banco-pichincha-bogota-7-de-agosto.png")
];
//Quitar marker-shadow.
function config() {
   document.getElementsByClassName('leaflet-pane leaflet-shadow-pane')[0].style.display = 'none';
}

function coordenadasIniciales() {
   navigator.geolocation.getCurrentPosition(function (position) {
      coordenadaGeneral = [position.coords.latitude, position.coords.longitude];
   });
   if (coordenadaGeneral == undefined || coordenadaGeneral == null) {
      coordenadaGeneral = [4.626013, -74.097581];
   }
}
coordenadasIniciales();

function pintarSede() {
   let map = L.map('map').setView(coordenadaGeneral, 12);
   // añadir capas de openstreetmap
   L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
      maxZoom: 18
   }).addTo(map);

   // permite moverse en el mapa.
   L.control.scale().addTo(map);
   // function para cargar sedes
   let fn = (u) => {
      let r = '';
      try {
         for (let i = 0; i < u.length; i++) {
            r = r + (i == 0 ? '' : ' - ') + u[i];
         }
      } catch (e) { }
      return r;
   };
   let s = document.getElementById("hiddenSedes");
   //  Agregar marcadores al mapa
   for (let i = 0; i < ubicaciones.length; i++) {
      let marca = L.marker([ubicaciones[i].latitud, ubicaciones[i].longitud], { draggable: false }).addTo(map);
      let idubi = (i * 2 + 1);
      s.innerHTML = s.innerHTML + "<input name='idu' id='" + idubi + "' type='hidden' value='" + fn(ubicaciones[i].sede) + "' >";
      marca.bindPopup("<div class='model-info' id='ubicaciones' onmouseover='zoomin(this);' onclick='zoomin(this);' onmouseout='zoomout(this);'>"
         + "<b>Sede " + ubicaciones[i].sucursal + "</b>"
         + "<br />"
         + "<b style='font-size: 9px;'>" + ubicaciones[i].departamento + " - " + ubicaciones[i].ciudad + "</b>"
         + "<br />"
         + "<b id='sede" + idubi + "' style='font-size: 9px;'>" + fn(ubicaciones[i].sede) + "</b>"
         + "<hr>"
         + "<b id='general'>general</b>"
         + "<br />"
         + "<img src='./../assets/casa.svg' style='padding-right:8px; width:18px; height:18px'>" + ubicaciones[i].direccion + "<br />"
         +  (ubicaciones[i].urlimage ?
            "<img id='sede-image' src='./../assets/sedes/" + ubicaciones[i].urlimage + "' style='width:100%; padding:4px'><br />" :
            "")
         + "<hr>"
         + "<b>horarios</b>"
         + "<br />"
         + "<img src='./../assets/calendario.svg' style='padding-right:8px; width:18px; height:18px'>" + ubicaciones[i].horario_habitual
         + "<br />"
         + (ubicaciones[i].horario_cajero ?
            "<img src='./../assets/cajero.svg' style='padding-right:8px; width:18px; height:18px'>" + ubicaciones[i].horario_cajero :
            "")
         + "<br />"
         + "<hr>"
         + "<b>teléfonos: </b>"
         + "<br>"
         + "<img src='./../assets/telefono-movil.svg' style='padding-right:8px; width:18px; height:18px'>" + ubicaciones[i].telefono + "<br />"
         + "<div id='pulsar' style='text-align:center'><img src='./../assets/huella.svg' style='padding-right:8px; width:44px;'></div>"
         + "</div>"
         + "<div class='container-flecha'>"
         + "<div class='flecha'></div>"
         + "</div>");
   }
}

function zoomin(obj) {
   let transYZ1 = function () { return obj.querySelector('#sede-image') == null ? "-69px" : "-200px"; }; // -69px si no contiene imagen
   let transYZ2 = function () { return obj.querySelector('#sede-image') == null ? "-30px" : "-45px"; }; // -30px si no contiene imagen
   document.getElementById("pulsar").style.display = "none";
   obj.parentElement.parentElement.style =
      (screen.width == undefined || screen.width < 420 ? 'transform:scale(2.0) translateY(' + transYZ1() + ')' : 'transform:scale(1.3) translateY(' + transYZ2() + ')');
}

function zoomout(obj) {
   document.getElementById("pulsar").style.display = "block";
   obj.parentElement.parentElement.style.transform = 'scale(1.0)';
}

function alejarImagen() {
   if (flagzoom == undefined) {
      config();
      flagzoom = false;
   }
   try {
      let o = document.getElementsByClassName("leaflet-control-scale-line")[0];
      let dist = Number(o.innerHTML.substr(0, o.innerHTML.indexOf(' ')));
      let km = (o.innerHTML.indexOf('km') >= 0);
      let tag = document.getElementsByTagName('img');
      if (dist >= 200 && km && !flagzoom) {
         flagzoom = true;
         for (let i = 0; i < tag.length; i++) {
            if (tag[i].src.indexOf('marker-icon') > 0) {
               tag[i].style = tag[i].style.cssText.replace('height: 40px;', 'height: 20px;').replace('width: 40px;', 'width: 20px;');
            }
         }
      } else if (dist < 200 && km && flagzoom) {
         flagzoom = false;
         for (let i = 0; i < tag.length; i++) {
            if (tag[i].src.indexOf('marker-icon') > 0) {
               tag[i].style = tag[i].style.cssText.replace('height: 20px;', 'height: 40px;').replace('width: 20px;', 'width: 40px;');
            }
         }
      }
   } catch (e) {
   }
}

function eventMouse() {
   document.getElementById('bd').addEventListener("touchmove", function () { alejarImagen() }, true);
   document.getElementById('bd').addEventListener("click", function () { alejarImagen() }, true);
   document.getElementById('bd').addEventListener("mouseover", function () { alejarImagen() }, true);
   document.getElementById('bd').addEventListener("wheel", function () { alejarImagen() }, true);
}

function filter(obj) {
   if (('' + obj.style.opacity) === '0.6') {
      obj.style = "opacity: 1; border:0.1px solid #c0c0c0; background-color:rgba(160, 160, 160, 0.7);";
   } else {
      obj.style = "opacity: 0.6; border:none; background-color:none;";
   }
}

function btnpressdown(action) {
   if (action)
      btnpress++;
   else btnpress--;
   return btnpress;
}

function filterForType(obj, sedes) {
   let sedetype = sedes;
   let idu = document.getElementsByName('idu');
   let sty = obj.style.opacity;
   let cubecont = 'cubecont';
   let btp = btnpressdown(sty == '0.6');
   if (sty == '0.6') {
      for (let i = 0; i < idu.length; i++) {
         let id = idu[i].getAttribute('id');
         let c = document.getElementById('cube' + id);
         let cnt = Number(c.getAttribute(cubecont));
         if (idu[i].getAttribute('value').indexOf(sedetype) >= 0) {
            if (cnt === 0) {
               c.style.display = "block";
            }
            c.setAttribute(cubecont, '' + (++cnt));
         } else {
            if (cnt === 0)
               c.style.display = "none";
         }
      }
   } else if (sty == '1') {
      for (let i = 0; i < idu.length; i++) {
         let id = idu[i].getAttribute('id');
         let c = document.getElementById('cube' + id);
         let cnt = Number(c.getAttribute(cubecont));
         if (idu[i].getAttribute('value').indexOf(sedetype) >= 0) {
            if (cnt === 1)
               c.style.display = "none";
            else {
               if (cnt > 1)
                  c.style.display = "block";
            }
            c.setAttribute(cubecont, '' + (--cnt));
         }
      }
   }

   if (btp  == 0 ){
      for (let i = 0; i < idu.length; i++) {
         let id = idu[i].getAttribute('id');
         let c = document.getElementById('cube' + id);
         c.style.display = "block";
      }
   }
}






