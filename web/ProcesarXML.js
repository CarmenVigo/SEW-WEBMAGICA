class ProcesarXML {
    constructor(nombre){
        this.nombre = nombre;
        this.correcto = "¡Todo correcto! archivo XML cargado"
    }
    cargarDatos(){
        $.ajax({
            dataType: "xml",
            url: this.nombre,
            method: 'GET',
            success: function(datos){
                //Pasar el archivo XML a un string
                var str = (new XMLSerializer()).serializeToString(datos);
                $("h5").text(str);
                //Extracción de los datos contenidos en el XML
                var totalNodos = $('*',datos).length;// cuenta el número de elementos
                // son los nodos del DOM de XML
                var titulo = $('titulo',datos).text();
                var origen = $('origen',datos).text();
                var autora = $('nombre',datos).text();
                var uo = $('uo',datos).text();
                var email = $('email',datos).text();
               
                var stringDatos = "<ul><li>Número de elementos del archivo XML: " + totalNodos + "</li> ";
                stringDatos += "<li>titulo: " + titulo + "</li>";
                stringDatos += "<li>origen: " + origen + "</li>";
                stringDatos += "<li>autora: " + autora + "</li>";
                stringDatos += "<li>uo: " + uo + "</li>";
                stringDatos += "<li>email: " + email + "</li>";
                
                $("p").html(stringDatos);
                },
    error:function(){
        $("h4").html("¡Tenemos problemas! No se pudo cargar el archivo XML");
        $("h5").remove();
        }
        });
        }
        crearElemento(tipoElemento, texto, insertarAntesDe){
        // Crea un nuevo elemento modificando el árbol DOM
        // El elemnto creado es de 'tipoElemento' con un 'texto'
        // El elemnto se coloca antes del elemnto 'insertarAntesDe'
        var elemento = document.createElement(tipoElemento);
        elemento.innerHTML = texto;
        $(insertarAntesDe).before(elemento);
        }
        verXML(){
        //Muestra el archivo JSON recibido
        this.crearElemento("h2","Archivo XML","footer");
        this.crearElemento("h4",this.correcto,"footer"); // Crea un elemento con DOM
        this.crearElemento("h5","XML","footer"); // Crea un elemento con DOM
        this.crearElemento("h5","","footer"); // Crea un elemento con DOM para el string con XML
        this.crearElemento("h5","Datos","footer"); // Crea un elemento con DOM
        this.crearElemento("p","","footer"); // Crea un elemento con DOM para los datos obtenidos con XML
        this.cargarDatos();
        $("button").attr("disabled","disabled");
        }
        }
var saberMas = new ProcesarXML("about.xml");