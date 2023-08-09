const form_nombre = document.getElementById('form_nombre');
//const container_task = document.getElementById('container_task');
const list_container = document.getElementById('list_container');
const fondo_popup = document.getElementById('fondo_popup');
const popup = document.getElementById('popup');

form_nombre.addEventListener('submit', function(e){
    e.preventDefault();
    const input_nombre = document.getElementById('input_nombre');
    if(input_nombre.value != ""){
        const nombre_principal = document.getElementById('nombre_principal');
        nombre_principal.innerHTML = `Hola! <span id="nombre">${input_nombre.value}</span>`;
        form_nombre.reset();
        form_nombre.classList.add('d-none');
        const container_principal = document.getElementById('container_principal');
        container_principal.classList.remove('d-none');
    }
});

// container_task.addEventListener('submit', function(e){
//     e.preventDefault();
//     const input_task = document.getElementById('input_task').value;
//     if(input_task != ""){
//         const li = document.createElement('li');
//         li.innerHTML = `
//             <input type="checkbox">
//             <p>${input_task}</p>
//         `;
//         list_container.appendChild(li);
//         container_task.reset();
//     }
// });

list_container.addEventListener('click', function(e){
    if(e.target.tagName === 'INPUT'){
        console.log("aaaa")
        const nextSibling = e.target.nextElementSibling;
        nextSibling.classList.toggle('decoration_p');
        if(e.target.checked){
            fondo_popup.classList.toggle('d-none');
            popup.classList.toggle('d-none');
            const nombre = document.getElementById('nombre');
            popup.innerHTML = `<h3>Muy bien, ${nombre.innerHTML}!</h3>
            <p>Has completado la tarea "${nextSibling.innerHTML}"!</p>
            `
        }
    }
});

fondo_popup.addEventListener('click', function(e){
    e.preventDefault();
    fondo_popup.classList.toggle('d-none');
    popup.classList.toggle('d-none');
});
