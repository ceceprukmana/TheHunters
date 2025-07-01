window.onload = function () {
  loadMessages();
};

function loadMessages() {
  const messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
  const chatBox = document.getElementById("chatBox");
  chatBox.innerHTML = "";

  messages.forEach(msg => {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message", "user");
    msgDiv.textContent = msg;
    chatBox.appendChild(msgDiv);
  });

  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
  const input = document.getElementById("messageInput");
  const message = input.value.trim();

  if (message !== "") {
    const messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    messages.push(message);
    localStorage.setItem("chatMessages", JSON.stringify(messages));

    loadMessages();
    input.value = "";
  }
}

function handleEnter(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
}
