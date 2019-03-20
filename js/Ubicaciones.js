"use strict";
var flagzoom = undefined;
var coordenadaGeneral = [4.626013, -74.097581];
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
   new Localizacion("Centro", "Cra 44 36-40", "Barranquilla", "Atlántico", "3302700", "Lunes a Jueves: 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "Lunes a Domingo: 7:00 am a 7:00 pm", [SEDES.suc, SEDES.cajero], undefined, "10.983335", "-74.779656"),
   new Localizacion("Calle 72", "Cll 72 41C - 46 locales 5,6,7", "Barranquilla", "Atlantico", 3302700, "Lunes a Jueves: 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "Lunes a Domingo: 6:00 am a 10:00 pm", [SEDES.suc, SEDES.cajero, SEDES.aed], undefined, "10.991106", "-74.807236", "banco-pichincha-barranquilla-calle-72.png"),
   new Localizacion("Prado", "Cra 59 75-13", "Barranquilla", "Atlántico", 3302700, "Lunes a Jueves: 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00am a 04:30pm", undefined, [SEDES.suc, SEDES.aed, SEDES.ave], undefined, "11.004796", "-74.799924"),
   new Localizacion("Barranquilla-UV", "Cra 59 75-13", "Barranquilla", "Atlántico", 3302700, "8:00am - 4:00pm", undefined, [SEDES.ave], undefined, "11.004796", "-74.799924"),

   // Cali
   new Localizacion("Holguines", "Cr 100 #11-60 Local 160 - Centro Comercial Holguines Trade Center", "Cali", "Valle del Cauca", "(2)6080200", "Lunes a Jueves: 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "Lunes a Domingo: 6:00 am a 10:00 pm", [SEDES.suc, SEDES.cajero, SEDES.aed], undefined, "3.372703", "-76.539695", "banco-pichincha-cali-holguines.png"),
   new Localizacion("Alameda", "Cll 9 26-55", "Cali", "Valle del Cauca", "(2)6080200", "Lunes a Jueves: 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "Lunes a Domingo: 7:00 am a 10:00 pm", [SEDES.suc, SEDES.cajero], undefined, "3.433335", "-76.535142"),
   new Localizacion("Centro Carrera 3a", "Cra 3 11-03", "Cali", "Valle del Cauca", "(2)6080200", "Lunes a Jueves: 8:00 am a 4:00 pm , Viernes y fin de mes: 8:00 am a 04:30 pm   ", "Lunes a Domingo: 6:00 am a 10:00 pm", [SEDES.suc, SEDES.cajero, SEDES.aed], undefined, "3.453013", "-76.535142", "banco-pichincha-cali-centro.png"),
   new Localizacion("Cali- UV", "Av 6A Norte 20N - 67", "Cali", "Valle del Cauca", "(2)608200", "8:00 am a 4:00 pm / Fin de mes de 8:00 am a 4:30 pm", "L - D de 6:00 am a 10:00 pm", [SEDES.ave], undefined, "3.462925", "-76.531101"),
   new Localizacion("Av. Sexta Norte", "Av 6a Norte 20", "Cali", "Valle del Cauca", "(2)608200", "Lunes a Jueves: 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "Lunes a Domingo: 6:00 am a 10:00 pm", [SEDES.suc, SEDES.cajero, SEDES.ave], " L - V 5:00 pm a 7:00 pm", "3.462926", "-76.531102", "banco-pichincha-cali-av-sexta.png"),

   // Pereira
   new Localizacion("Av.Circunvalar", "Av Circunvalar 2 -08", "Pereira", "Risaralda", "01 8000 91 99 18", "Lunes a Jueves : 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "Lunes a Domingo: 7:00 am a 10:00 pm", [SEDES.suc, SEDES.cajero], undefined, "4.808326", "-75.680558", "banco-pichincha-pereira-av-circunvalar.png"),
   new Localizacion("Plaza Bolivar", "Edificio Centro del Comercio Local 124 Cra.7#16-50", "Pereira", "Risaralda", "01 8000 91 99 18", "Lunes a Jueves : 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "Lunes a Domingo: 6:00 am a 10:00 pm", [SEDES.suc, SEDES.cajero], undefined, "4.814437", "-75.692028", "banco-pichincha-plaza-bolivar.png"),

   //  Medellin
   new Localizacion("Poblado", "Cra 43A 16 sur 63", "Medellin", "Antioquia", "01 8000 91 99 18", "Lunes a Jueves : 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "Lunes a Domingo: 24 Horas", [SEDES.suc, SEDES.cajero, SEDES.ave], undefined, "6.189642", "-75.577453", "banco-pichincha-medellin-poblado.png"),
   new Localizacion("Medellin-UV", "Cra 43A 16 sur 63", "Medellín", "Antioquia", "01 8000 91 99 18", "8:00am - 4:00pm", "L - D 24 Horas", [SEDES.ave], undefined, "6.189727", "-75.577363"),
   new Localizacion("Laureles", "Circular 73B 76-16", "Medellín", "Antioquia", "01 8000 91 99 18", "Lunes a Jueves: 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "Lunes a Domingo: 6:00 am a 10:00 pm", [SEDES.suc, SEDES.cajero], undefined, "6.243435", "-75.597144", "banco-pichincha-medellin-laureles.png"),
   new Localizacion("Junin", "Cra 49 50-23", "Medelín", "Antioquia", "01 8000 91 99 18", "Lunes a Jueves : 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "Lunes a Domingo: 6:00 am a 7:00 pm", [SEDES.suc, SEDES.cajero], undefined, "6.249360", "-75.566857"),

   // Santander
   new Localizacion("San gil", "Cll 12 10-32", "San Gil", "Santander", "01 8000 91 99 18", "Lunes a Jueves: 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "Lunes a Domingo: 24 Horas", [SEDES.suc, SEDES.cajero], undefined, "6.553866", "-73.133626"),
   new Localizacion("Zapatoca", "Cra 9 20-76", "Zapatoca", "Santander", "01 8000 91 99 18", "Lunes a Viernes: 8:00 am a 12:00 pm - 2:00 pm a 5:00 pm ", undefined, [SEDES.suc], undefined, "6.816772", "-73.268178", "banco-pichincha-zapatoca.png"),
   new Localizacion("Cañaveral", "Cra 25 29-87 L 19", "Bucaramanga", "Santander", "01 8000 91 99 18", "Lunes a Jueves : 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "Lunes a Domingo: 24 Horas", [SEDES.suc, SEDES.cajero], undefined, "7.070091", "-73.107025", "Banco-pichincha-bucaramanga-canaveral.png"),
   new Localizacion("Paseo del Comercio", "Cll 35 18-54 Paseo del Comercio", "Bucaramanga", "Santander", "01 8000 91 99 18", "Lunes a Jueves : 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "Lunes a Domingo: 7:00 am a 10:00 pm", [SEDES.suc, SEDES.cajero], undefined, "7.119544", "-73.123789", "banco-pichincha-bucaramanga-paseo-del-comercio.png"),
   new Localizacion("Cabecera", "Carrera 35 N° 42 - 39", "Bucaramanga", "Santander", "(7) 6800299 / 01 8000 91 99 18", "Lunes a Jueves 8:00 am a 4:00 pm / Viernes y fin de mes 8:00 am a 4:30 pm", " Lunes a Domingo 24 Horas", [SEDES.suc, SEDES.cajero, SEDES.ave, SEDES.aed], undefined, "7.1209621", "-73.1102958"),
   // Resto del país  
   new Localizacion("Av. Cero", "Av 0 14-70 Ed. Villareal", "Cucuta", "Nte. Santander", "01 8000 91 99 18", "Lunes a Jueves : 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "Lunes a Domingo: 24 Horas", [SEDES.suc, SEDES.cajero, SEDES.aed], undefined, "7.883102", "-72.497835", "banco-pichincha-cucuta.png"),
   new Localizacion("Monteria", "Cll 28 1-65 ESQUINA", "Monteria", "Cordoba", "01 8000 91 99 18", "Lunes a Jueves : 8:00am a 4:00pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "Lunes a Domingo: 6:00 am a 10:00 pm", [SEDES.suc, SEDES.cajero, SEDES.aed], undefined, "8.756462", "-75.887025", "banco-pichincha-monteria.png"),
   new Localizacion("Ipiales", "Cra 7 13-60", "Ipiales", "Nariño", " 01 8000 91 99 18", "Lunes a Jueves: 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "Lunes a Domingo: 6:00 am a 10:00 pm", [SEDES.suc, SEDES.cajero], undefined, "0.825097", "-77.639486", "banco-pichincha-ipiales.png"),
   new Localizacion("Pasto", "cll 19 26-31 Centro", "Pasto", "Nariño", "01 8000 91 99 18", "Lunes a Jueves: 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", undefined, [SEDES.suc, SEDES.aed], undefined, "1.216307", "-77.278590"),
   new Localizacion("Cartagena", "cll 32 A # 8 -50 la matuna", "Cartagena", "Bolivar", "01 8000 91 99 18", "Lunes a Jueves: 8:00 am a 4:00 pm,  Viernes y fin de mes: 8:00 am a 04:30 pm", " L - D 24 Horas", [SEDES.suc, SEDES.cajero, SEDES.aed], undefined, "10.423894", "-75.547776", "bancopichincha-cartagena-la-matuna.png"),
   new Localizacion("Neiva", "Calle 7 N° 5 - 78", "Neiva", "Huila", "01 8000 91 99 18", "Lunes a Jueves: 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "Lunes a Domingo: 6:00 am a 10:00 pm", [SEDES.suc, SEDES.cajero, SEDES.aed], undefined, "2.926313", "-75.287796", "banco-pichincha-neiva.png"),
   new Localizacion("Ibagué", "Cll 15 3-24 Local 1. ED. Caja Agraria", "Ibagué", "Tolima", " 01 8000 91 99 18", "Lunes a Jueves : 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "Lunes a Domingo: 6:00 am a 9:00 pm", [SEDES.suc, SEDES.cajero, SEDES.aed], undefined, "4.442267", "-75.238029", "banco-pichincha-ibague.png"),
   new Localizacion("Armenia", "Cra 17 # 19-34", "Armenia", "Quindio", "01 8000 91 99 18", "Lunes a Jueves: 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "Lunes a Domingo: 24 Horas", [SEDES.suc, SEDES.cajero, SEDES.aed], undefined, "4.534627", "-75.674125", "banco-pichincha-armenia.png"),
   new Localizacion("Multicentro", "Cra 23 69-70 L. 1 y 2", "Manizales", "Caldas", "01 8000 91 99 18", "Lunes a Jueves: 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "Lunes a Domingo: 24 Horas", [SEDES.suc, SEDES.cajero, SEDES.aed], undefined, "5.060764", "-75.488967", "banco-pichincha-manizales.png"),
   new Localizacion("Tunja", "Cra 11 20-29", "Tunja", "Boyacá", "01 8000 91 99 18", "Lunes a Jueves: 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "Lunes a Domingo: 24 Horas", [SEDES.suc, SEDES.cajero, SEDES.aed], undefined, "5.533727", "-73.362906", "banco-pichincha-tunja.png"),
   new Localizacion("Itagui", "Calle 50 48-56", "Itagui", "Antioquia", "01 8000 91 99 18", "Lunes a Jueves : 8:00 am a 4:00 pm , Viernes y fin de mes: 8:00 am a 04:30 pm", "Lunes a Domingo: 6:00 am a 9:00 pm", [SEDES.suc, SEDES.cajero], undefined, "6.170728", "-75.609115", "banco-pichincha-medellin-itagui.png"),
   new Localizacion("Envigado", "Cra. 43 36 sur 20", "Envigado", "Antioquia", " 01 8000 91 99 18", "Lunes a Jueves: 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm", "Lunes a Domingo: 6:00 am a 9:00 pm", [SEDES.suc, SEDES.cajero], undefined, "6.171333", "-75.587103", "banco-pichincha-envigado.png"),
   //    Sedes sur
   new Localizacion("Américas", "Av. Américas N° 42 - 81", "Bogota", "Cundinamarca", 6501000, "Lunes a Jueves: 8:00 am a 4:00 pm, Viernes y fin de mes: 8:00 am a 04:30 pm ", " Lunes a Domingo: 24 Horas", [SEDES.suc, SEDES.cajero], undefined, "4.625868", "-74.097246", "banco-pichincha-bogota-americas.png"),
   new Localizacion("Carvajal", "Av. Calle 26 sur N° 69 - 12", "Bogota", "Cundinamarca", 6501000, "Lunes a Jueves : 8:30 am a 3:30 pm,Viernes y fin de mes: 8:30 am a 04:30 pm", "Lunes a Domingo: 7:00 am a 5:30 pm", [SEDES.suc, SEDES.cajero], undefined, "4.612692", "-74.134143", "banco-pichincha-bogota-carvajal.png"),
   new Localizacion("Restrepo", "Cra 19 N° 15 - 31  local 1 y 2", "Bogota", "Cundinamarca", 6501000, "Lunes a Jueves : 8:30 am a 3:30 pm,  Viernes y fin de mes: 8:30 am a 04:30 pm", "Lunes a Domingo: 6:00 am a 8:00 pm", [SEDES.suc, SEDES.cajero, SEDES.aed], " L - V 5:00 pm a 7:00 pm", "4.586899", "-74.100168", "bsnco-pichincha-bogota-restrepo.png"),
   new Localizacion("Kennedy", "Calle 35 sur N° 78 A - 12", "Bogota", "Cundinamarca", 6501000, "Lunes a Jueves : 8:30 am a 3:30 pm ", "Lunes a Domingo: 6:00 am a 9:00 pm", [SEDES.suc, SEDES.cajero, SEDES.aed], undefined, "4.624188", "-74.148119", "banco-pichincha-bogota-keneddy.png"),
   new Localizacion("Venecia", "Dgnal. 49 A sur N° 52 C - 85", "Bogota", "Cundinamarca", 6501000, "Lunes a Jueves : 8:30 am a 3:30 pm, Viernes y fin de mes: 8:30 am a 04:30 pm", "Lunes a Domingo: 6:00 am a 10:00 pm", [SEDES.suc, SEDES.cajero, SEDES.aed], undefined, "4.59196", "-74.14053"),
   //    Sedes occidente
   new Localizacion("Fontibón", "Calle 17 N° 99 - 02", "Bogota", "Cundinamarca", 6501000, "Lunes a Jueves : 8:30 am a 3:30 pm, Viernes y fin de mes: 8:30 am a 04:30 pm", "Lunes a Domingo: 24 Horas", [SEDES.suc, SEDES.cajero], undefined, "4.672204", "-74.145029"),
   new Localizacion("Calle 80", "Calle 80 N° 74 B - 20", "Bogota", "Cundinamarca", 6501000, "Lunes a jueves : 8:30 am a 3:30 pm, Viernes y fin de mes: 8:30 am a 04:30 pm", "Lunes a Domingo: 6:00 am a 10:00 pm", [SEDES.suc, SEDES.cajero], undefined, "4.696997", "-74.092272", "banco-pichincha-calle-80.png"),
   new Localizacion("La Esmeralda", "Calle 44 N° 52 - 28", "Bogota", "Cundinamarca", 6501000, "Lunes a Jueves : 8:30 am a 3:30 pm, Viernes y fin de mes: 8:30 am a 04:30 pm", "Lunes a Domingo: 6:00 am a 10:00 pm", [SEDES.suc, SEDES.cajero], undefined, "4.643805", "-74.091173", "banco-pichincha-bogota-esmeralda.png"),
   //    Sedes norte   
   new Localizacion("Avenida Chile", "Calle 72 N° 11 - 27", "Bogota", "Cundinamarca", 6501000, "Lunes a Jueves : 8:30 am a 3:30 pm, Viernes y fin de mes: 8:30 am a 04:30 pm", "Lunes a Domingo: 6:00 am a 9:00 pm", [SEDES.suc, SEDES.cajero], undefined, "4.657482", "-74.058632", "banco-pichincha-av-chile.png"),
   new Localizacion("Contador", "Av. 19 N° 134 A - 41", "Bogota", "Cundinamarca", 6501000, "Lunes a Jueves : 8:30 am a 3:30 pm , Viernes y fin de mes: 8:30 am a 04:30 pm", "Lunes a Domingo: 24 Horas", [SEDES.suc, SEDES.cajero], undefined, "4.725158", "-74.046143", "banco-pichincha-bogota-contador.png"),
   new Localizacion("Chico", "Cra 11 N° 92 - 09", "Bogota", "Cundinamarca", 6501000, "Lunes a Jueves : 8:00 am a 4.00 pm,  Viernes y fin de mes: 8:00 am a 04:30 pm", "Lunes a Domingo: 24 Horas", [SEDES.suc, SEDES.cajero], undefined, "4.673797", "-74.047769", "banco-pichincha-bogota-calle-92.png"),
   new Localizacion("Toberin", "Calle 166 N° 20- 11", "Bogota", "Cundinamarca", 6501000, "Lunes a Jueves : 8:30 am a 3:30 pm,  Viernes y fin de mes: 8:30 am a 4:30 pm", " Lunes a Domingo: 6:00 am a 10:00 pm", [SEDES.suc, SEDES.cajero, SEDES.aed], undefined, "4.746508", "-74.043186"),
   new Localizacion("Unicentro", "Cra 15 N° 119 - 52", "Bogota", "Cundinamarca", 6501000, "Lunes a Jueves : 8:30 am a 3:30 pm , Viernes y fin de mes: 8:30 am a 04:30 pm", "Lunes a Domingo: 24 Horas", [SEDES.suc, SEDES.cajero, SEDES.aed], undefined, "4.699773", "-74.042736", "banco-pichincha-bogota-unicentro.png"),

   //   Sedes centro
   new Localizacion("Bogota-Unidad Vehículos ", "Cra 11 94-02 (Local 114-115)", "Bogota", "Bogota D.C", 6501000, "8:00am - 8:00pm", undefined, [SEDES.ave], undefined, "4.677267", "-74.045974"),
   new Localizacion("Bogota-Unidad Educativo Fenix", "Cra 11 94-02(Local 106)", "Bogota", "Bogota D.C", 6501000, "8:00am - 8:00pm", undefined, [SEDES.aed], undefined, "4.677270", "-74.045979"),
   new Localizacion("Bogota-UV", "Cra 11 92-09", "Bogota", "Bogota D.C", "6501000", "8:00am - 7:00pm", undefined, [SEDES.ave], undefined, "4.673869", "-74.048071"),
   new Localizacion("Carrera 10", "Cra 10 N° 16 - 74", "Bogota", "Cundinamarca", 6501000, "Lunes a Jueves : 8:30 am a 3:30 pm, Viernes y fin de mes: 8:30 am a 04:30 pm", "Lunes a Viernes: 07:45 am a 05:30 pm ", [SEDES.suc, SEDES.cajero], undefined, "4.605001", "-74.075090", "banco-pichincha-bogota-cra-10.png"),
   new Localizacion("Centro Calle 22", "Cra 7 N° 22 - 80", "Bogota", "Cundinamarca", 6501000, "Lunes a Jueves : 8:30 am a 3:30 pm, Viernes y fin de mes: 8:30 am a 04:30 pm", "Lunes a Domingo: 6:00 am a 10:00 pm", [SEDES.suc, SEDES.cajero, SEDES.aed], undefined, "4.608867", "-74.070215", "banco-pichincha-calle-22.png"),
   new Localizacion("Chapinero", "Cra 13 N° 57 - 18", "Bogota", "Cundinamarca", 6501000, "Lunes a Jueves : 8:30 am a 3:30 pm , Viernes y fin de mes: 8:30 am a 04:30 pm", "Lunes a Domingo: 6:00 am a 9:00 pm", [SEDES.suc, SEDES.cajero, SEDES.aed], " L - V 5:00 pm a 7:00 pm", "4.644159", "-74.064358"),
   new Localizacion("7 de Agosto", "Cra 24 N° 63 D - 15", "Bogota", "Cundinamarca", 6501000, "Lunes a Jueves : 8:30 am a 3:30 pm  Viernes y fin de mes: 8:30 am a 04:30 pm", "Lunes a Domingo: 7:00 am a 10:00 pm", [SEDES.suc, SEDES.cajero], undefined, "4.654623", "-74.071662", "banco-pichincha-bogota-7-de-agosto.png")
];

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
         + (ubicaciones[i].urlimage ?
            "<img id='sede-image' src='./../assets/sedes/" + ubicaciones[i].urlimage + "' style='width:100%;'><br />" :
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
         + "<img src='./../assets/celular.svg' style='padding-right:8px; width:18px; height:18px'>" + ubicaciones[i].telefono + "<br />"
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
      let km = Number(o.innerHTML.substr(0, o.innerHTML.indexOf(' ')));
      let tag = document.getElementsByTagName('img');
      if (km >= 200 && !flagzoom) {
         flagzoom = true;
         for (let i = 0; i < tag.length; i++) {
            if (tag[i].src.indexOf('marker-icon') > 0) {
               tag[i].style = tag[i].style.cssText.replace('height: 40px;', 'height: 20px;').replace('width: 40px;', 'width: 20px;');
            }
         }
      } else if (km < 200 && flagzoom) {
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
  if (('' + obj.style.opacity) === '1') {
    obj.style = "opacity: 0.6; border:0.1px solid #c0c0c0; background-color:rgba(160, 160, 160, 0.7);";
  } else {
     obj.style = "opacity: 1; border:none; background-color:none;";
  }
 }

function filterForType(obj, sedes) {
   let cont = 0;
   let sedetype = sedes;
   let idu = document.getElementsByName('idu');
   let sty = obj.style.opacity;
   if (sty == '0.6') {
      for (let i = 0; i < idu.length; i++) {
         if (idu[i].getAttribute('value').indexOf(sedetype) < 0) {
            let id = idu[i].getAttribute('id');
            let c = document.getElementById('cube' + id);
            c.style.display = "none";
         } else {
            cont++;
         }
      }
   } else if (sty == '1') {
      for (let i = 0; i < idu.length; i++) {
         if (idu[i].getAttribute('value').indexOf(sedetype) >= 0) {
            let id = idu[i].getAttribute('id');
            let c = document.getElementById('cube' + id);
            c.style.display = "block";
         }
      }
   }

      }
   




