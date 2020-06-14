class JuegoFrases{

    constructor(){}
    
    allowDrop(ev) {
        ev.preventDefault();
    }

    drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    drop(ev, personaje) {
        ev.preventDefault();
        var frase = ev.dataTransfer.getData("text");
        if(frase == personaje){
            $("#"+frase).addClass('pareja');
        }
    }
}

var juegoFrases = new JuegoFrases();