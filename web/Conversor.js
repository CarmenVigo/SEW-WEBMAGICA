class Conversor {
	constructor() {
        this.url = "http://www.apilayer.net/api/live?access_key=df7291f0e1f666df4d861605c4fb40c4&source=USD&currencies=EUR,GBP,JPY,CHF,SEK";
		Conversor.conversiones = {
			"USD": 1,
			"EUR": 2,
			"GBP": 3,
			"JPY": 4,
			"CHF": 5,
			"SEK": 6
		}
	}

	pedirConversiones() {
		$.ajax({
			dataType: "json", 
			url: this.url,
			method: 'GET',
			success: this.cargarConversiones.bind(this),
			error: function() {
				alert("Error de conexión al obtener los valores de conversion");
			}
		});
	}

	cargarConversiones(datos) {
		if (!datos.success) {
			alert("Error de conexión al obtener los valores de conversion");
			return;
		}
		Conversor.conversiones["EUR"] = datos.quotes.USDEUR;
		Conversor.conversiones["GBP"] = datos.quotes.USDGBP;
		Conversor.conversiones["JPY"] = datos.quotes.USDJPY;
		Conversor.conversiones["CHF"] = datos.quotes.USDCHF;
		Conversor.conversiones["SEK"] = datos.quotes.USDSEK;

		this.ejecutarConversion();
	}

	convertir() {
		this.campos = $(".conversor input");
		if (this.campos.length != 2) {
			alert("Algo va mal. Solo se ha encontrado un sitio para poner monedas. Habla con el dueño de la web.");
			return;
		}
		this.selectores = $(".conversor select");
		if (this.selectores.length != 2) {
			alert("Esta página esta muy mal hecha, solo hay un selector de tipo de moneda.");
			return;
		}

		this.pedirConversiones();
	}

	ejecutarConversion() {
		var valor = $(this.campos[0]).val();
		if (valor != 0)
			valor = this._convertir(valor, $(this.selectores[0]).val(), $(this.selectores[1]).val());
		$(this.campos[1]).val(valor);
	}

	_convertir(valor, monedaFrom, monedaTo) {
		return valor / Conversor.conversiones[monedaFrom] * Conversor.conversiones[monedaTo];
	}
}

var conversor = new Conversor();