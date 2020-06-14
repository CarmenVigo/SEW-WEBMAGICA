class SopaDeLetras {
    constructor() { }

    markAccioAsFound(){
        $(".accio").addClass('encontrada');
        $(".waccio").addClass('tachada');
    }

    markPatronumAsFound(){
        $(".patronum").addClass('encontrada');
        $(".wpatronum").addClass('tachada');        
    }

    markImperioAsFound(){
        $(".imperio").addClass('encontrada');
        $(".wimperio").addClass('tachada');        
    }

    markCrucioAsFound(){
        $(".crucio").addClass('encontrada');
        $(".wcrucio").addClass('tachada');
    }

    markAccioPatronumAsFound(){
        this.markAccioAsFound();
        this.markPatronumAsFound();
    }

    markImperioPatronumAsFound(){
        this.markImperioAsFound();
        this.markPatronumAsFound();
    }

    markImperioCrucioAsFound(){
        this.markImperioAsFound();
        this.markCrucioAsFound();
    }
}

var sopaDeLetras = new SopaDeLetras();