let contactos = [
    {
        nombre: 'Maria Camila Gomez',
        email: 'mcamila@ejemplo.com',
        telefono: '123456'
    },
    {
        nombre: 'Pepe Rodriguez',
        email: 'test@ejemplo.com',
        telefono: '1234567'
    }

];

function mostrarContanctos() {
    const tbody = document
        .getElementById('contactosTable')
        .getElementsByTagName('tbody')[0];
    tbody.innerHTML='';
    for (let index in contactos) {
        const contacto = contactos[index];
        const id = parseInt(index) + 1;
        let fila = '<tr>';
        fila += '   <td>' + id + '</td>';
        fila += '   <td>' + contacto.nombre + '</td>';
        fila += '   <td>' + contacto.email + '</td>';
        fila += '   <td>' + contacto.telefono + '</td>';
        fila += '</tr>';
        tbody.innerHTML += fila;
    }
}
mostrarContanctos();

function cerrarModal() {
    document.getElementById('formularioModal')
        .classList.remove('ocultarModal');
        const formulario = document.forms['formContacto'];
        formulario.reset();
}

document.getElementById('cerrarModalBtn').addEventListener('click', () => {
    document.getElementById('formularioModal')
        .classList.add('ocultarModal');
});

document.getElementById('registrarBtn').addEventListener('click', () => {
    cerrarModal();
});

document.getElementById('formularioContacto').addEventListener('submit', (ev) => {
    ev.preventDefault();
    const formulario = document.forms['formContacto'];
    const contacto = {
        nombre: document.forms['formContacto']['nombre'].value,
        email: document.forms['formContacto']['email'].value,
        telefono: document.forms['formContacto']['telefono'].value
    };
    contactos.push(contacto);
    cerrarModal();
    mostrarContanctos();
    });



