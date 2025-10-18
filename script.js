// === 1️⃣ Проверка ответа на вопрос ===
document.getElementById("checkBtn").addEventListener("click", function() {
  const answer = document.getElementById("answer").value.trim().toLowerCase();
  const messageEl = document.getElementById("message");

  if (answer === "завтра") {
    messageEl.textContent = "Правильно! Добро пожаловать 👍🏻";
    messageEl.style.color = "green";

    setTimeout(() => {
      document.getElementById("quiz").style.display = "none";
      document.getElementById("main").style.display = "block";
    }, 1000);
  } else {
    messageEl.textContent = "Неверно 👎🏻 попробуй снова!";
    messageEl.style.color = "red";
  }
});


// === 2️⃣ Отправка формы в WhatsApp ===
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const msg = document.getElementById("userMessage").value.trim(); // <-- другое id
  if (!msg) return;

  const phone = "994509941519"; // твой номер без +
  const text = encodeURIComponent(msg);
  window.open(`https://wa.me/${phone}?text=${text}`, "_blank");

  document.getElementById("userMessage").value = "";
});
