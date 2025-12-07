
// No funciona en Firefox??
async function cargarData() {
    let username = localStorage.getItem("username");
    let API_URL = "";

    if (username != "admin") {
        API_URL = `http://localhost:3000/reservas?username=${username}`;

    } else {
        API_URL = `http://localhost:3000/reservas`;
    }


    const tablaUsuarios = document.getElementById('tablaUsuarios');
    document.getElementById("welcome-msg").textContent = `Bienvenido ${username}`;
    document.getElementById("usuarioNombre").textContent = `${username}`;

    const respuesta = await fetch(API_URL);
    const usuarios = await respuesta.json();

    tablaUsuarios.innerHTML = '';
    usuarios.forEach(reserva => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
          <td>${reserva.id}</td> 
          <td>${reserva.aula}</td>
          <td>${reserva.username}</td>  
          <td>${reserva.dia}</td>
          <td>${reserva.horaInicio}</td> 
          <td>${reserva.horaFin}</td> 
          <td>
            <button id="btn-editar" class="buttons" onclick="editarReserva('${reserva.id}')">Editar</button>
             <button id="btn-eliminar" class="buttons" onclick="eliminarReserva('${reserva.id}')">Eliminar</button>
          </td>
        `;
        tablaUsuarios.appendChild(fila);
    });
}

function salir() {
    localStorage.clear();
    location.href = "../login/login.html";
}

function reservar() {
    document.getElementById("form-wrap").style.visibility = "visible";
}

async function eliminarReserva(id) {
    if (confirm('¿Seguro que deseas eliminar este usuario?')) {
        await fetch(`http://localhost:3000/reservas/${id}`, { method: 'DELETE' });
        cargarData();
    }
}

async function editarReserva(id) {
    document.getElementById("form-wrap").style.visibility = "visible";
    const respuesta = await fetch(`http://localhost:3000/reservas/${id}`);
    const reserva = await respuesta.json();
    document.getElementById("idInput").value = reserva.id;
    document.getElementById("aulaInput").value = reserva.aula;
    document.getElementById("diaInput").value = reserva.dia;
    document.getElementById("horaInicioInput").value = reserva.horaInicio;
    document.getElementById("horaFinInput").value = reserva.horaFin;
}

document.getElementById("formulario").addEventListener('submit', async (e) => {
    e.preventDefault();
    const errores = document.getElementById("errores");
    const username = localStorage.getItem("username");
    const id = document.getElementById("idInput").value;
    const aula = document.getElementById("aulaInput").value;
    const dia = document.getElementById("diaInput").value;
    const horaInicio = document.getElementById("horaInicioInput").value;
    const horaFin = document.getElementById("horaFinInput").value;

    // debugger;
    if (comprobarInput(aula, horaInicio, horaFin, dia)) {
        const reserva = { username, aula, dia, horaInicio, horaFin };
        let sinReserva = true;
        let diaError = false;
        await fetch('http://localhost:3000/reservas')
            .then(response => response.json())
            .then(data => {
                [...data].some(function (element) {
                    debugger;
                    if (id == "") {
                        if (element["dia"] == dia && element["aula"] == aula) {

                            sinReserva = false;
                            var old_horaInicio = new Date("1970-01-01T" + element["horaInicio"]);
                            var new_horaInicio = new Date("1970-01-01T" + horaInicio);

                            var old_horaFin = new Date("1970-01-01T" + element["horaFin"]);
                            var new_horaFin = new Date("1970-01-01T" + horaFin);

                            if (new_horaInicio < old_horaInicio) {
                                if (new_horaFin > old_horaInicio) {
                                    errores.innerHTML = "Aula ya reservada en esta hora"
                                    diaError = true;
                                    return;
                                }
                            } else {
                                if (new_horaInicio < old_horaFin) {
                                    errores.innerHTML = "Aula ya reservada en esta hora"
                                    diaError = true;
                                    return;
                                }
                            }
                        }
                    } else {
                        if (element["dia"] == dia && element["aula"] == aula && element["id"] != id) {

                            sinReserva = false;
                            var old_horaInicio = new Date("1970-01-01T" + element["horaInicio"]);
                            var new_horaInicio = new Date("1970-01-01T" + horaInicio);

                            var old_horaFin = new Date("1970-01-01T" + element["horaFin"]);
                            var new_horaFin = new Date("1970-01-01T" + horaFin);

                            if (new_horaInicio < old_horaInicio) {
                                if (new_horaFin > old_horaInicio) {
                                    errores.innerHTML = "Aula ya reservada en esta hora"
                                    diaError = true;
                                    return;
                                }
                            } else {
                                if (new_horaInicio < old_horaFin) {
                                    errores.innerHTML = "Aula ya reservada en esta hora"
                                    diaError = true;
                                    return;
                                }
                            }
                        }
                    }

                })
            }).then(() => {
                if (sinReserva || !diaError) {
                    if (id != "") {
                        fetch(`http://localhost:3000/reservas/${id}`, {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(reserva)
                        });

                        document.getElementById("formulario").reset();
                        errores.innerHTML = "";
                        cargarData(); // ¿A veces la tabla se actualiza y otras veces no?
                    } else {
                        fetch('http://localhost:3000/reservas', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(reserva)
                        });

                        document.getElementById("formulario").reset();
                        errores.innerHTML = "";
                        cargarData(); // ¿A veces la tabla se actualiza y otras veces no?
                    }

                }
            })
            .catch(error => console.error('Error al obtener reservas:', error));
    }
});

function comprobarInput(aula, horaInicio, horaFin, dia) {
    var inicio = new Date("1970-01-01T" + horaInicio);
    var fin = new Date("1970-01-01T" + horaFin);
    if (aula != "--Selecciona una Aula--") {
        document.getElementById("aulaInput").classList = "correct";
        if (Date.now() < new Date(dia)) {
            document.getElementById("diaInput").classList = "correct";
            if (inicio < fin) {
                document.getElementById("horaInicioInput").classList += "correct";
                document.getElementById("horaFinInput").classList += "correct";
                return true;
            } else {
                document.getElementById("errores").innerHTML = "indique una hora apropiada";
                document.getElementById("horaInicioInput").classList = "incorrect";
                document.getElementById("horaFinInput").classList = "incorrect";
                return false;
            }
        } else {
            document.getElementById("errores").innerHTML = "Proporcione una fecha razonable.";
            document.getElementById("diaInput").classList = "incorrect"
            return false;
        }
    } else {
        document.getElementById("errores").innerHTML = "Selecciona una Aula";
        document.getElementById("aulaInput").classList = "incorrect"
        return false;
    }
}

cargarData();

