const form_nombre = document.getElementById('form_nombre');
const container_task = document.getElementById('container_task');
const list_container = document.getElementById('list_container');


form_nombre.addEventListener('submit', function(e){
    e.preventDefault();
    const input_nombre = document.getElementById('input_nombre').value;
    console.log(typeof input_nombre);
    if(input_nombre != ""){
        const nombre_principal = document.getElementById('nombre_principal');
        nombre_principal.innerHTML = `Hola! ${input_nombre}`;
        form_nombre.reset();
        form_nombre.classList.add('d-none');
        const container_principal = document.getElementById('container_principal');
        container_principal.classList.remove('d-none');
    }
});

container_task.addEventListener('submit', function(e){
    e.preventDefault();
    const input_task = document.getElementById('input_task').value;
    if(input_task != ""){
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.innerHTML = `
            <input type="checkbox">
            <p>${input_task}</p>
        `;
        list_container.appendChild(li);
        container_task.reset();
    }
});


list_container.addEventListener('click', function(e){
    if(e.target.tagName === 'INPUT'){
        e.target.nextElementSibling.classList.toggle('decoration_p');
    }
});


