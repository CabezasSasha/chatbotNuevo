function sendQuestion() {
    var question = document.getElementById('user-input').value;
    
    // Enviar la pregunta al servidor utilizando AJAX o cualquier otro método
    // Aquí se asume que se envía una solicitud POST al servidor Python

    // Código de ejemplo de solicitud AJAX utilizando Fetch API
    fetch('/process', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question: question })
    })
    .then(response => response.text())
    .then(data => displayResponse(data));
}

function displayResponse(response) {
    var chatLog = document.getElementById('chat-log');
    var responseElement = document.createElement('div');
    responseElement.textContent = response;
    chatLog.appendChild(responseElement);
}
