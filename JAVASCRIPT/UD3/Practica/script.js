// Dar de alta un usuario
fetch('http://localhost:3000/usuarios', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        nombre: 'María López',
        email: 'maria@example.com'
    })
})
    .then(response => response.json())
    .then(data => console.log('Usuario creado:', data))
    .catch(error => console.error('Error al crear usuario:', error));

// Obtener todos los usuarios
fetch('http://localhost:3000/usuarios')
    .then(response => response.json())
    .then(data => {
        console.log('Usuarios:', data);
    })
    .catch(error => console.error('Error al obtener usuarios:', error));
// Obtener un usuario específico por ID
fetch('http://localhost:3000/usuarios/1')
    .then(response => response.json())
    .then(usuario => console.log('Usuario con ID 1:', usuario))
    .catch(error => console.error('Error al obtener usuario:', error));


// Actualizar un registro completo
fetch('http://localhost:3000/usuarios/2', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        id: 2,
        nombre: 'Luis Pérez Actualizado',
        email: 'luis.actualizado@example.com'
    })
})
    .then(response => response.json())
    .then(data => console.log('Usuario actualizado completamente:', data))
    .catch(error => console.error('Error al actualizar usuario:', error));


// Actualizar un registro parcialmente
fetch('http://localhost:3000/usuarios/1', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        email: 'ana.actualizado@example.com'
    })
})
    .then(response => response.json())
    .then(data => console.log('Usuario modificado parcialmente:', data))
    .catch(error => console.error('Error al modificar usuario:', error));


// Borrar un registro
fetch('http://localhost:3000/usuarios/1', {
    method: 'DELETE'
})
    .then(() => console.log('Usuario eliminado correctamente'))
    .catch(error => console.error('Error al eliminar usuario:', error));