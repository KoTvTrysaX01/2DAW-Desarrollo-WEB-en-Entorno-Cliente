
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
             <button id="btn-eliminar" class="buttons" onclick="eliminarReserva('${reserva.id}')">Eliminar</button>
          </td>
        `;
        tablaUsuarios.appendChild(fila);
    });
}

function salir() {
    localStorage.clear();
    location.href = "../html/login.html";
}

function reservar() {
    location.href = "../html/form.html";
}

async function eliminarReserva(id) {
    if (confirm('¿Seguro que deseas eliminar este usuario?')) {
        await fetch(`http://localhost:3000/reservas/${id}`, { method: 'DELETE' });
        cargarData();
    }
}


document.getElementById("formulario").addEventListener('submit', async (e) => {
    e.preventDefault();
    const errores = document.getElementById("errores");
    const username = localStorage.getItem("username");
    const aula = document.getElementById("aulaInput").value;
    const dia = document.getElementById("diaInput").value;
    const horaInicio = document.getElementById("horaInicioInput").value;
    const horaFin = document.getElementById("horaFinInput").value;

    if (comprobarHora(horaInicio, horaFin)) {
        if (await comprobarData(dia, aula, horaInicio, horaFin)) {
            const reserva = { username, aula, dia, horaInicio, horaFin };
            API_URL = `http://localhost:3000/reservas`;
            await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(reserva)
            });

            document.getElementById("formulario").reset();
            cargarData();
            errores.innerHTML = "";
        } else {
            errores.innerHTML = "Aula ya reservada en esta hora"
            console.log("hora incorrecta 2");
        }
    } else {
        errores.innerHTML = "Hora fin debe ser mayor que hora inicio"
        console.log("hora incorrecta 1");
    }
});

function comprobarHora(horaInicio, horaFin) {
    var inicio = new Date("1970-01-01T" + horaInicio);
    var fin = new Date("1970-01-01T" + horaFin);
    if (inicio < fin) {
        return true;
    } else {
        return false;
    }
}

async function comprobarData(dia, aula, horaInicio, horaFin) {
    fetch('http://localhost:3000/reservas')
        .then(response => response.json())
        .then(data => {
            [...data].some(function (element) {
                if (element["dia"] == dia && element["aula"] == aula) {
                    var old_horaInicio = new Date("1970-01-01T" + element["horaInicio"]);
                    var new_horaInicio = new Date("1970-01-01T" + horaInicio);

                    var old_horaFin = new Date("1970-01-01T" + element["horaFin"]);
                    var new_horaFin = new Date("1970-01-01T" + horaFin);

                    if (new_horaInicio < old_horaInicio && new_horaFin < old_horaInicio) {
                        console.log("situacion 1");
                        return true;

                    } else if (new_horaInicio > old_horaFin && new_horaFin > old_horaFin) {
                        console.log("situacion 2");
                        return true;
                    } else {
                        console.log("Hora inicio is not valid");
                        return false;
                    }
                } else {
                    return true;
                }
            })
        })
        .catch(error => console.error('Error al obtener reservas:', error));
}




cargarData();

