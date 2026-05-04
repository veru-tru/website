const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
let activeSlide = document.querySelector("[data-active]");
let idNumber = Number(activeSlide.id)


console.log(idNumber)

nextBtn.addEventListener("click", () => {
    if (idNumber < 3){
        delete activeSlide.dataset.active
        let newSlide = document.getElementById(idNumber)
        delete newSlide.dataset.active
        idNumber++
        newSlide = document.getElementById(idNumber)
        newSlide.dataset.active = true
        console.log(idNumber);
        return idNumber
    }
    else{
        let newSlide = document.getElementById(idNumber)
        delete newSlide.dataset.active
        newSlide = document.getElementById("1")
        newSlide.dataset.active = true
        idNumber = 1
    }
});
prevBtn.addEventListener("click", () => {
    if (idNumber === 3 || idNumber === 2){
        delete activeSlide.dataset.active
        let newSlide = document.getElementById(idNumber);
        delete newSlide.dataset.active
        idNumber--
        newSlide = document.getElementById(idNumber);
        newSlide.dataset.active = true
        console.log(idNumber);
        return idNumber
    }
    else{
        let newSlide = document.getElementById(idNumber)
        delete newSlide.dataset.active
        newSlide = document.getElementById("3")
        newSlide.dataset.active = true
        idNumber = 3
    }
});


const welcome = document.getElementById('welcome');
setTimeout(()=>{
    welcome.style.padding = '20%';
    welcome.style.opacity = '1';
}, 1000);

