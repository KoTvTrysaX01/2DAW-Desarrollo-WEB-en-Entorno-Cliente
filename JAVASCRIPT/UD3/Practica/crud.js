const API_URL = 'http://localhost:3000/usuarios';

const tablaUsuarios = document.getElementById('tablaUsuarios');
const form = document.getElementById('usuarioForm');
const idInput = document.getElementById('usuarioId');
const nombreInput = document.getElementById('nombre');
const passwordInput = document.getElementById('password');

//  Leer (GET) 
async function cargarUsuarios() {
    let username = getCookie("username")
    document.getElementById("welcome").textContent = `Welcome ${username}`;
    const respuesta = await fetch(API_URL);
    const usuarios = await respuesta.json();

    tablaUsuarios.innerHTML = '';
    usuarios.forEach(usuario => {
        const fila = document.createElement('tr');
        fila.innerHTML = ` 
          <td>${usuario.id}</td> 
          <td>${usuario.nombre}</td> 
          <td>${usuario.password}</td> 
          <td class='acciones'> 
            <button id="btn-editar" onclick="editarUsuario('${usuario.id}')">Editar</button> 
            <button id="btn-eliminar" onclick="eliminarUsuario('${usuario.id}')">Eliminar</button> 
          </td> 
        `;
        tablaUsuarios.appendChild(fila);
    });
}

// Crear o Actualizar 
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = idInput.value;
    const nombre = nombreInput.value.trim();
    const password = passwordInput.value.trim();

    const usuario = { nombre, password };
    if (id) {
        // Actualizar (PUT) 
        await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: Number(id), ...usuario })
        });
    } else {
        // Crear (POST) 
        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(usuario)
        });
    }
    form.reset();
    idInput.value = '';
    cargarUsuarios();
});

// Editar (Carga los datos en el formulario) 
async function editarUsuario(id) {
    const respuesta = await fetch(`${API_URL}/${id}`);
    const usuario = await respuesta.json();

    idInput.value = usuario.id;
    nombreInput.value = usuario.nombre;
    passwordInput.value = usuario.password;
}

//  Eliminar (DELETE) 
async function eliminarUsuario(id) {
    if (confirm('¿Seguro que deseas eliminar este usuario?')) {
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        cargarUsuarios();
    }
}

function deleteAllCookies() {
    document.cookie.split(';').forEach(cookie => {
        const eqPos = cookie.indexOf('=');
        const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    });
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

document.getElementById("goBack").addEventListener("click", e => {
    deleteAllCookies();
    location.href = 'index.html';
})

// Cargar los usuarios al iniciar 
cargarUsuarios();

console.log(document.cookie);
