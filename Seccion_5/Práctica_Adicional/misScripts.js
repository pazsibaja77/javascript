function recomendar() {
   
    let presupuestoTexto = document.getElementById("presupuesto").value;
    let personasTexto = document.getElementById("personas").value;
    let tipoActividad = document.getElementById("actividad").value;
    let divResultado = document.getElementById("resultado");

    if (presupuestoTexto === "" || personasTexto === "" || tipoActividad === "") {
        divResultado.innerHTML = "Por favor, complete todos los campos obligatorios.";
        return;
    }

    let presupuesto = Number(presupuestoTexto);
    let personas = Number(personasTexto);

    if (presupuesto <= 0 || personas <= 0) {
        divResultado.innerHTML = "El presupuesto y la cantidad de personas deben ser mayores a cero.";
        return;
    }

    let actividadRecomendada = "";

    switch (tipoActividad) {
        case "Deportes":
            if (presupuesto < 8000) {
                actividadRecomendada = "Caminata recreativa";
            } else if (presupuesto <= 15000) {
                actividadRecomendada = "Alquiler de cancha";
            } else {
                actividadRecomendada = "Actividad deportiva especializada";
            }
            break;

        case "Entretenimiento":
            if (presupuesto < 8000) {
                actividadRecomendada = "Actividad económica";
            } else if (presupuesto <= 15000) {
                actividadRecomendada = "Entrada al cine";
            } else {
                actividadRecomendada = "Concierto o espectáculo";
            }
            break;

        case "Turismo":
            if (presupuesto < 8000) {
                actividadRecomendada = "Visita a parque público";
            } else if (presupuesto <= 15000) {
                actividadRecomendada = "Tour local";
            } else {
                actividadRecomendada = "Excursión de día completo";
            }
            break;

        case "Familiares":
            if (presupuesto < 8000) {
                actividadRecomendada = "Picnic familiar";
            } else if (presupuesto <= 15000) {
                actividadRecomendada = "Salida recreativa";
            } else {
                actividadRecomendada = "Parque temático o actividad especial";
            }
            break;
    }

    let porcentajeDescuento = 0;
    if (personas >= 5 && personas <= 8) {
        porcentajeDescuento = 10;
    } else if (personas >= 9) {
        porcentajeDescuento = 15;
    }

    let montoDescuento = (presupuesto * porcentajeDescuento) / 100;
    let presupuestoFinal = presupuesto - montoDescuento;

    divResultado.innerHTML = `
        <p><strong>Actividad recomendada:</strong> ${actividadRecomendada}</p>
        <p><strong>Cantidad de personas:</strong> ${personas}</p>
        <p><strong>Descuento grupal:</strong> ${porcentajeDescuento} %</p>
        <p><strong>Monto del descuento:</strong> ₡${montoDescuento}</p>
        <p><strong>Presupuesto final:</strong> ₡${presupuestoFinal}</p>
    `;
}

function reiniciar() {
    document.getElementById("presupuesto").value = "";
    document.getElementById("personas").value = "";
    document.getElementById("actividad").value = "";
    document.getElementById("resultado").innerHTML = "";
}