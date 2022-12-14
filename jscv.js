/**
 * Dibujo de circulos
 * Nombre de la función GrafCripto
 * @param {GrafCripto}  - Declaracion de la funcion
 * @param  finalAngle -   Variable Contador de la secuencia circular
 * Tamaño de letra en canvas
 */
function GrafCripto() {
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    let finalAngle = 0;

    setInterval(function () {
        context.beginPath();
        context.arc(180, 200, 96, 0, Math.PI * 2);
        context.lineWidth = 2;
        context.strokeStyle = "#faf7f7";
        context.stroke();
    })

    setInterval(function () {
        finalAngle += 0.001;
        context.beginPath();
        context.arc(180, 200, 100, 0, Math.PI * finalAngle);
        context.strokeStyle = "#dcc217";
        context.stroke();
    }, 1000 / 0.5)

    setInterval(function () {
        finalAngle += 0.01;
        context.beginPath();
        context.arc(400, 200, 100, 0, Math.PI * finalAngle);
        context.strokeStyle = "#008000";
        context.stroke();
    }, 1000 / 5)
    setInterval(function () {
        context.beginPath();
        context.arc(400, 200, 96, 0, Math.PI * 2);
        context.lineWidth = 2;
        context.strokeStyle = "#faf7f7";
        context.stroke();
    })

    setInterval(function () {
        finalAngle += 0.001;
        context.beginPath();
        context.arc(620, 200, 100, 0, Math.PI * finalAngle);
        context.strokeStyle = "#cb1c3c";
        context.stroke();
    }, 1000 / 1)
    setInterval(function () {
        context.beginPath();
        context.arc(620, 200, 96, 0, Math.PI * 2);
        context.lineWidth = 2;
        context.strokeStyle = "#faf7f7";
        context.stroke();
    })

    context.font = "40px American Catain";
    context.fillStyle = "silver";
    context.fillText("BTC", 145, 205)

    context.font = "40px American Catain";
    context.fillStyle = "silver";
    context.fillText("LTC", 365, 205)

    context.font = "40px American Catain";
    context.fillStyle = "silver";
    context.fillText("ETH", 585, 205)

    context.font = "40px American Catain";
    context.fillStyle = "silver";
    context.fillText("Mineria de Cripto", 250, 80)

}

/**
 * Boton para realizar la mineria nuevamente
 * Nombre de la función reclamarcripto
 * @param {reclamarcripto}  - Declaracion de la funcion
 * Reclama recompensas y vuelve a generar ganancias
 */

async function reclamarcripto() {        //async permite estructurar una funcion asincronica sin bloqueo

    await Swal.fire({
        title: "RECLAMASTE TUS CRIPTOMONEDAS",
        text: "Seran enviadas a tu Wallet automaticamente",
        icon: "success",
        confirmButtonText: '<a href="mineria.html">Empecemos otra vez!</a>'
    });

}

/**
 * Rellena el formulario con la informacion del usuario
 * @param {registristrarse} - Declaracion de la funcion
 */

function registristrarse() {
    let nombre, apellido, correo, password;

    //Creo 4 variables...Y luego debo obtener el valor de los campos, y guardarlo en variables
    nombre = document.getElementById("nombres").value;
    apellido = document.getElementById("apellido").value;
    correo = document.getElementById("correo").value;
    password = document.getElementById("password").value;
    //hacer lo mismo con el resto de las variables

    //Si el nombre esta vacio, debe visualizarse un mensaje de error
    if (!nombre) {
        alert("Debe completar el nombre para continuar!")
    } else if (!apellido) {
        alert("Debe completar el apellido para continuar!")
    } else if (!correo) {
        alert("Debe completar el correo para continuar!")
    } else if (!password) {
        alert("Debe completar el password para continuar!")
    } else {
        localStorage.setItem("storageNombre", nombre);      //setitem crea una clave, en este caso storageNombre
        localStorage.setItem("storageApellido", apellido);
        localStorage.setItem("storageCorreo", correo);
        localStorage.setItem("storagePassword", password);
    }

    if (nombre || apellido || correo || password) { //y apellido y correo y pass están completos
        location.href = "mineria.html";
    }

}

/**
 * Muestro los datos que ingreso el usuario
 * @param {cargarDatos} - Declaracion de la funcion
 *
 */
function cargarDatos() {
    let nombre, apellido, correo, password;
    nombre = localStorage.getItem("storageNombre");       //getitem devuelve el alor creado por setitem
    document.getElementById("nombre").innerHTML = nombre;
    apellido = localStorage.getItem("storageApellido");
    document.getElementById("apellido").innerHTML = apellido;
    correo = localStorage.getItem("storageCorreo");
    document.getElementById("correo").innerHTML = correo;
    password = localStorage.getItem("storagePassword");
    document.getElementById("password").innerHTML = password;
}