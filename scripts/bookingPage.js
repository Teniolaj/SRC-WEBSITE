const menuBtn = document.querySelector(".ham-menu")
const navBar = document.querySelector(".menu")
const overlay = document.getElementById('overlay')
const form = document.getElementById("bookingForm")


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

form.addEventListener("submit", (e) => {
    e.preventDefault()


    const captchaRes = grecaptcha.getResponse();
    if(!captchaRes.length > 0){
        alert("Please verify the captcha")
        return false
    }
    // console.log(password)
})