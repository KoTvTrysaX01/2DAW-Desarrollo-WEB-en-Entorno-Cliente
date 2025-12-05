let username = localStorage.getItem("username");
let API_URL = "";

if (username != "admin") {
    API_URL = `http://localhost:3000/reservas?username=${username}`;

} else {
    API_URL = `http://localhost:3000/reservas`;
}

async function cargarUsuarios() {
    const tablaUsuarios = document.getElementById('tablaUsuarios');


    document.getElementById("welcome-msg").textContent = `Bienvenido ${username}`;


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
        cargarUsuarios();
    }
}


cargarUsuarios();