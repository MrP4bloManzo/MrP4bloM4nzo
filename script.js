document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('fileInput');
    const messageDiv = document.getElementById('message');

    if (fileInput.files.length > 0) {
        messageDiv.textContent = '¡Trabajo subido exitosamente!';
        messageDiv.style.color = 'green';
        fileInput.value = ''; // Limpiar el input
    } else {
        messageDiv.textContent = 'Por favor, selecciona un archivo.';
        messageDiv.style.color = 'red';
    }
});