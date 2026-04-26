const form = document.querySelector("#bookingForm");
const note = document.querySelector("#bookingNote");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const arrival = data.get("arrival");
  const departure = data.get("departure");
  const guests = data.get("guests");

  note.textContent = `Заявка собрана: ${arrival} - ${departure}, ${guests}. Теперь нужно подключить реальный телефон, WhatsApp или форму бронирования.`;
  document.querySelector("#contacts").scrollIntoView({ behavior: "smooth", block: "start" });
});
