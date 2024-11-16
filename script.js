let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// animated background 

setInterval(createBox, 400);
const chatContainer = document.getElementById('chat-container');
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');

    // Toggle chat visibility
    chatContainer.style.display = 'flex';

    sendBtn.addEventListener('click', function() {
        const message = userInput.value.trim();
        if (message) {
            // Append user message
            const userMessage = document.createElement('div');
            userMessage.textContent = `Bạn: ${message}`;
            chatMessages.appendChild(userMessage);

            // Simulate AI response (replace with actual logic)
            const aiResponse = document.createElement('div');
            aiResponse.textContent = `AI: ${message.split('').reverse().join('')}`; // Example response
            chatMessages.appendChild(aiResponse);

            // Clear input
            userInput.value = '';

            // Scroll to the bottom
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    });

    userInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendBtn.click();
        }
    });