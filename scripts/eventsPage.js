const calendarDays = document.querySelectorAll('.calendar-day');
const eventInfo = document.getElementById('event-info');
menuBtn = document.querySelector(".ham-menu")
navBar = document.querySelector(".menu")
overlay = document.getElementById('overlay')


menuBtn.addEventListener("click", () => {
    navBar.classList.toggle("active")
    overlay.classList.toggle('show-overlay');
    document.body.classList.toggle('no-scroll');
})

overlay.addEventListener('click', () => {
    console.log("overlay clicked")
    navBar.classList.remove('active');
    overlay.classList.remove('show-overlay');
    document.body.classList.remove('no-scroll');
});

calendarDays.forEach(day => {
  day.addEventListener('click', () => {
    const event = day.getAttribute('data-event');
    const date = day.getAttribute('data-date');
    eventInfo.innerText = `${event} on ${date}`;
  });

  // day.addEventListener('mouseleave', () => {
  //   eventInfo.textContent = 'Hover over a date to see event details.';
  // });
});