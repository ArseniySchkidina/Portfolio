$(".slider-review").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    prevArrow: 
    `
    <button class="slider__arrow slider__arrow--left">
    <svg width="306" height="306" viewBox="0 0 306 306" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M58.65 267.75L175.95 153L58.65 35.7L94.35 0L247.35 153L94.35 306L58.65 267.75Z" fill="#fff"/>
    </svg>
    </button>
    `
    ,
    nextArrow: 
    `
    <button class="slider__arrow slider__arrow--right">
    <svg width="306" height="306" viewBox="0 0 306 306" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M58.65 267.75L175.95 153L58.65 35.7L94.35 0L247.35 153L94.35 306L58.65 267.75Z" fill="#fff"/>
    </svg>
    </button>
    `
    ,
});