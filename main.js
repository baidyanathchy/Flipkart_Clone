let slideBtnLeft = document.getElementById("slide-btn-left")
let slideBtnRight = document.getElementById("slide-btn-right")
let imgItem = document.querySelectorAll(".sliderImg")


console.log(imgItem.length - 1)

let startSlider = 0
let endSlider = (imgItem.length - 1) * 100

slideBtnLeft.addEventListener("click", handleLeftBtn)
function handleLeftBtn() {
    if (startSlider < 0) {
        startSlider = startSlider + 100;
    }
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    })

}
slideBtnRight.addEventListener("click", handleRightBtn)
function handleRightBtn() {
    if (startSlider >= -endSlider + 100) {
        startSlider = startSlider - 100;
    }
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    })
}

// render function

function renderSlideAuto() {

    if (startSlider >= -endSlider + 100) {
    handleRightBtn()
    }
    else (startSlider=0)


}
setInterval(renderSlideAuto, 3000)





const leftBtn = document.getElementById("product-btn-left")
const rightBtn = document.getElementById("product-btn-right")

rightBtn.addEventListener('click',function(event) {
    const conent =document.querySelector('.product-row');
    conent.scrollLeft += 1100;
})


leftBtn.addEventListener('click',function(event) {
    const conent = document.querySelector('.product-row');
    conent.scrollLeft -= 1100;
    
})





const leftBtn1 = document.getElementById("product-btn-left1l");
const rightBtn1 = document.getElementById("product-btn-right1r");

rightBtn1.addEventListener('click',function(event) {
      const conent = document.querySelector(".product-row1");
      conent.scrollLeft += 1100;
})


leftBtn1.addEventListener('click',function(event){
    const conent = document.querySelector(".product-row1")
    conent.scrollLeft -= 1100;
})


// leftBtn1 conent = document.guerySelector(".product-row1")