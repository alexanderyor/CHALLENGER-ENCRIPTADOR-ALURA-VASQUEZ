const textArea = document.querySelector(".text-area");
const textMensaje = document.querySelector(".mensaje");
const warning = document.getElementById("warning");


function validarEntrada() {
    const valor = textArea.value;
    const regex = /^[a-z\s]*$/; 

    if (!regex.test(valor)) {
        warning.style.display = "block";
        warning.textContent = "* El texto contiene mayúsculas, números o caracteres especiales.";
    } else {
        warning.style.display = "none";
    }
}


function btnEncriptar() {
    const valor = textArea.value;
    const regex = /^[a-z\s]*$/; 

    if (!regex.test(valor)) {
        // Si hay caracteres inválidos, mostrar advertencia
        warning.textContent = "* El texto contiene mayúsculas, números o caracteres especiales.";
        warning.style.display = "block";
    } else {
        // Si todo está bien, encriptar el texto
        warning.style.display = "none"; // Ocultar cualquier mensaje previo
        const textoEncriptado = encriptar(valor);
        textMensaje.value = textoEncriptado;
    }
}


function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    matrizCodigo.forEach(par => {
        stringEncriptada = stringEncriptada.split(par[0]).join(par[1]);
    });

    return stringEncriptada;
}


function btnDesencriptar() {
    const valor = textArea.value;
    const textoDesencriptado = desencriptar(valor);
    textMensaje.value = textoDesencriptado;
}


function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    matrizCodigo.forEach(par => {
        stringDesencriptada = stringDesencriptada.split(par[1]).join(par[0]);
    });

    return stringDesencriptada;
}


function copiarTexto() {
    const textoCopiar = textMensaje.value; 

    navigator.clipboard.writeText(textoCopiar)
        .then(() => {

            alert("Texto copiado al portapapeles");
        })
        .catch(err => {
            console.error('Error al copiar al portapapeles:', err);
            alert("Hubo un error al copiar el texto. Inténtalo de nuevo.");
        });
}



/*

*/

