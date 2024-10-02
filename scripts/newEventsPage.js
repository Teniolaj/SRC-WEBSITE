const menuBtn = document.querySelector(".ham-menu")
const navBar = document.querySelector(".menu")
const overlay = document.getElementById('overlay')
const panels = document.querySelectorAll('.panel')


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

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClass();
        panel.classList.add('active-panel');
    })
})

function removeActiveClass() {
    panels.forEach(panel => {
        panel.classList.remove('active-panel');
    })
}