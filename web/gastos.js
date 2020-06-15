class Total {
    constructor() { }

    calcular() {
        var sumas = [0, 0, 0, 0];
        var num = 0;
        $("#tabla").find("tr").each(function (i) {
            var fila = $(this);
            if (i != 0) {
                var sum = 0;
                fila.find("td").each(function (j) {
                    if (j != 0) {
                        num = parseInt($(this).text());
                        sumas[j - 1] += num;
                        sum += num;
                    }
                });
                sumas[3] += sum;
                fila.append("<td class='totales'>" + sum + "</td>");
            } else
                fila.append("<th class='totales'> Totales € </th>");
        });
        $("#tabla").append("<tr class='totales'><td>Totales €</td><td>"
            + sumas[0] + "</td><td>"
            + sumas[1] + "</td><td>"
            + sumas[2] + "</td><td>"
            + sumas[3] + "</td></tr>");
            $("gastos a").addClass('enlace_desactivado');
        $("#gastos a").remove();
    }
}

var total = new Total();