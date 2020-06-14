class Mapa {
	constructor(latitud, longitud) {
		this.punto = {
			lat: latitud,
			lng: longitud
        };
        this.ruta = {
            "points":[
                {
                    "name": "zoo-londres",
                    "lat": "51.535556",
                    "lng": "-0.155833"
                },
                {
                    "name": "leadenhall-market",
                    "lat": "51.5128111",
                    "lng": "-0.0835194"
                },
                {
                    "name": "king's-cross-station",
                    "lat": "51.5309",
                    "lng": "-0.1233"
                },
                {
                    "name": "embajada-australia",
                    "lat": "51.512889",
                    "lng": "-0.115722"
                },
                {
                    "name": "estacion-westminster",
                    "lat": "51.501",
                    "lng": "-0.125"
                }
            ]
        };
	}

	mostrarPunto() {
		this.mapa = new google.maps.Map(document.getElementById('mapa'), {zoom: 15,center: this.punto});
        var puntos = this.ruta.points;
        for(var i = 0; i<puntos.length; i++){
            var latLng = new google.maps.LatLng(puntos[i].lat,puntos[i].lng);
            new google.maps.Marker({
                position: latLng,
                map: this.mapa
            });
        }
	}
}

var mapa = new Mapa(51.5309, -0.1233); //centro en king's cross