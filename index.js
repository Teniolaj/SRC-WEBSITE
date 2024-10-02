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

if(localStorage.getItem("visitorCounter")){
    let counter = parseInt(localStorage.getItem("visitorCounter")) + 1
    localStorage.setItem("visitorCounter", counter)
    document.getElementById("visitor-count").textContent = `Number of visitors: ${counter}`
}else{
    localStorage.setItem("visitorCounter", 1)
    document.getElementById("visitor-count").textContent = `Number of visitors: 1`
}