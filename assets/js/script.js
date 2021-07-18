
const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel__button-right");
const prevButton = document.querySelector(".carousel__button-left");
const dotsNav = document.querySelector(".carousel__nav");
const dot = Array.from(dotsNav.children);




const slidesWidth = slides[0].getBoundingClientRect().width;

const setSlidesPosition = (slide,index) => {
    slide.style.left = slidesWidth * index + 'px';
}

slides.forEach(setSlidesPosition);








const moveToSlide = (track,currentSlide,targetSlide) => {
   
    track.style.transform = 'translateX(-'+ targetSlide.style.left +')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');

}

const hideShowArrow = (slides,nextButton,prevButton,targetIndex) =>{

    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden')
    }else if (targetIndex === slides.length -1){
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    }else{
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

const updateDot = (currentDot,targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}



nextButton.addEventListener("click", (e)=> {

    const currentSlide = document.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    const currentDot = dotsNav.querySelector(".current-slide");
    const nextDot = currentDot.nextElementSibling;
 
    moveToSlide(track,currentSlide,nextSlide);
    hideShowArrow(slides,nextButton,prevButton,nextIndex);
    updateDot(currentDot,nextDot);
    
})

prevButton.addEventListener("click", (e)=> {

    const currentSlide = document.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);
    const currentDot = dotsNav.querySelector(".current-slide");
    const prevDot = currentDot.previousElementSibling;
    
    moveToSlide(track,currentSlide,prevSlide);
    hideShowArrow(slides,nextButton,prevButton,prevIndex);
    updateDot(currentDot,prevDot);
    
})


dotsNav.addEventListener("click", (e) => {

    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = track.querySelector(".current-slide");
    const currentDot = dotsNav.querySelector(".current-slide");
    const targetIndex = dot.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track,currentSlide,targetSlide);
    hideShowArrow(slides,nextButton,prevButton, targetIndex)
    updateDot(currentDot,targetDot);
    
})


