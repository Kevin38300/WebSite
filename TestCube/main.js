var swiper = new Swiper(".swiper", {
    effect: "cube",
    allowTouchMove:false,
    grabCursor: false,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale:0.94,
    },
    mouseWheel:true
});
swiper.sliderMove = function (s,e){
    console.log(s)
}
function Navigate(idx){
    for (let i of document.querySelectorAll(".Links li")) i.classList.remove("activeLink")
    Array.from(document.querySelectorAll(".Links li"))[idx].classList.add("activeLink")
    swiper.slideTo(idx, 1000, true)
}