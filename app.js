// 1- Crear un array para almacenar los datos
let amigos = [];

//2-  Función para agregar amigos
function agregarAmigo() {
    let input = document.getElementById("amigo"); // Obtener el campo de entrada
    let nombre = input.value.trim(); // Obtener el valor del campo de entrada
    //condición para verificar si el campo está vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre");
        return; // Si el campo está vacío, mostrar un mensaje de alerta y salir de la función
    } 

    amigos.push(nombre); // añadir al array, agregar el nombre que vaya digitando el usuario
    console.log(amigos);

    actualizarLista(); // Actualizar la lista en pantalla
    limpiarCampo();  // Limpiar el campo de entrada
}

//  3- Limpiar el campo de entrada
function limpiarCampo() {   
    document.getElementById("amigo").value = ""; // Limpiar el campo de entrada
    document.getElementById("resultado").innerHTML = ""; // Limpiar el resultado del sorteo
}

// 4- Actualizar la lista en pantalla de amigos que se han agregado
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo => { // Iterar sobre el array de amigos, es decir cada amigo que se ha agregado, la => es una función flecha 
    // que se usa para iterar sobre el array y devolver el nombre de cada amigo
        // Crear un elemento de lista para cada amigo y añadirlo a la lista
        lista.innerHTML += `<li>${amigo}</li>`; // Añadir cada amigo a la lista que se muestra en pantalla
    });
}

// 5- Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) { // Verificar si hay amigos en la lista
        alert("No hay amigos para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Generar un índice aleatorio
    let amigoSorteado = amigos[indiceAleatorio]; // Seleccionar un amigo al azar

    document.getElementById("resultado").innerHTML = `<li> El amigo sorteado es: ${amigoSorteado}</li>`; // Mostrar el resultado del sorteo
    document.getElementById("btn-reiniciar").disabled = false; // Habilitar el botón de reiniciar juego
}

//6- funcion para reiniciar el juego
function reiniciarJuego() {
    amigos = []; // Vaciar el array de amigos
    document.getElementById("listaAmigos").innerHTML = ""; // borrar la lista
    document.getElementById("resultado").innerHTML = "";   // borrar el resultado
    alert("Juego reiniciado. Puedes agregar nuevos amigos."); // Mensaje de confirmación
    //deshabilitamos el botón nuevamente
    document.getElementById("btn-reiniciar").disabled ="true";

}
