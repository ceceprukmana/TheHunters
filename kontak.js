const form = document.getElementById("contactForm");
const statusMessage = document.getElementById("statusMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);
  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      statusMessage.textContent = "Pesan berhasil dikirim!";
      form.reset();
    } else {
      statusMessage.textContent = "Terjadi kesalahan. Coba lagi.";
    }
  })
  .catch(error => {
    statusMessage.textContent = "Gagal mengirim pesan.";
  });
});
