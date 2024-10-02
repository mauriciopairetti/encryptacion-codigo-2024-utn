const messageInput = document.getElementById("message");
const keyInput = document.getElementById("key");
const resultDiv = document.getElementById("result");
const toggleBtn = document.getElementById("toggleBtn");

let isEncrypting = true; // Estado inicial: encriptar

toggleBtn.addEventListener("click", () => {
    const message = messageInput.value;
    const key = keyInput.value;

    if (key === "prueba-utn") {
        if (isEncrypting) {
            // Encriptar
            resultDiv.textContent="";
            const encryptedMessage = btoa(message);
           // resultDiv.textContent = encryptedMessage; // Muestra el mensaje encriptado en el div
            messageInput.value =encryptedMessage;
            toggleBtn.textContent = "DESENCRIPTAR"; // Cambia el texto del botón
            //messageInput.value = ""; // Limpia el textarea después de encriptar
        } else {
            // Desencriptar
            try {
                resultDiv.textContent="";
                //const decryptedMessage = atob(resultDiv.textContent); // Desencripta el mensaje
                const decryptedMessage = atob(messageInput.value); // Desencripta el mensaje
                messageInput.value = decryptedMessage; // Muestra el mensaje desencriptado en el textarea
                toggleBtn.textContent = "ENCRIPTAR"; // Cambia el texto del botón
                //messageInput.value = "";
            } catch (error) {
                resultDiv.textContent = "Error al desencriptar el mensaje.";
            }
        }
        isEncrypting = !isEncrypting; // Cambia el estado
    } else {
        resultDiv.textContent = "Clave incorrecta.";
    }
});
