function sendMessage() {
  const input = document.getElementById('user-input');
  const chatBox = document.getElementById('chat-box');
  const message = input.value.trim();
  if (!message) return;
  chatBox.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
  input.value = '';
  setTimeout(() => {
    const response = 'My AI is thinking... 🌐 (Full version coming soon)';
    chatBox.innerHTML += `<p><strong>My AI:</strong> ${response}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 500);
}