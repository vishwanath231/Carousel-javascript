
const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel__button-right");
const prevButton = document.querySelector(".carousel__button-left");
const dotsNav = document.querySelector(".carousel__nav");
const dot = Array.from(dotsNav.children);
const counter = document.querySelector(".counter__container");
const count = Array.from(counter.children);




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


const slideCounts = (currentCount, targetCount) => {
    currentCount.classList.remove('current-count');
    targetCount.classList.add('current-count');
}



nextButton.addEventListener("click", (e)=> {

    // arrow
    const currentSlide = document.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    //index
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    // dots
    const currentDot = dotsNav.querySelector(".current-slide");
    const nextDot = currentDot.nextElementSibling;
    // count
    const currentCount = document.querySelector(".current-count");
    const nextCount = currentCount.nextElementSibling;

    
 
    moveToSlide(track,currentSlide,nextSlide);
    hideShowArrow(slides,nextButton,prevButton,nextIndex);
    updateDot(currentDot,nextDot);
    slideCounts(currentCount,nextCount);
    
    
})

prevButton.addEventListener("click", (e)=> {
    //arrow
    const currentSlide = document.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;
    // index
    const prevIndex = slides.findIndex(slide => slide === prevSlide);
    //dots
    const currentDot = dotsNav.querySelector(".current-slide");
    const prevDot = currentDot.previousElementSibling;
    // count
    const currentCount = document.querySelector(".current-count");
    const prevCount = currentCount.previousElementSibling;
    
    moveToSlide(track,currentSlide,prevSlide);
    hideShowArrow(slides,nextButton,prevButton,prevIndex);
    updateDot(currentDot,prevDot);
    slideCounts(currentCount,prevCount);

    
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


