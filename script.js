// script.js
const seats = document.querySelectorAll('.seat:not(.occupied)');
const countEl = document.getElementById('count');
const totalEl = document.getElementById('total');
const showtimeSelects = document.querySelectorAll('.showtime');
let ticketPrice = 0;

showtimeSelects.forEach(sel => sel.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  updateCount();
}));

document.querySelector('.seat-selection').addEventListener('click', e => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
    updateCount();
  }
});

function updateCount() {
  const selectedSeats = document.querySelectorAll('.selected');
  const selectedCount = selectedSeats.length;
  countEl.innerText = selectedCount;
  totalEl.innerText = selectedCount * ticketPrice;
}

document.getElementById('bookingForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const count = countEl.innerText;
  const total = totalEl.innerText;
  document.getElementById('confirmation').innerHTML =
    `<p>Thanks, ${name}! You've booked ${count} seat(s). Total: ₹${total}. A confirmation is sent to ${email}.</p>`;
});
