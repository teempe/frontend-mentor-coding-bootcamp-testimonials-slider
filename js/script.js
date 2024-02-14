const slides = document.querySelectorAll('.slide');

let currentSlideIdx = 0;

const showSlide = n => {
    slides[n].style.display = 'block';
}

const hideSlide = n => {
    slides[n].style.display = 'none';
}

const nextSlide = () => {
    // hide current slide
    hideSlide(currentSlideIdx);
    
    // make currentSLideIdx to point to next slide to show
    // if currently shown slide is the last element in the list, set index to first list element
    currentSlideIdx += 1;
    if (currentSlideIdx >= slides.length) {
        currentSlideIdx = 0;
    }

    // show slide for updated index
    showSlide(currentSlideIdx);
};

const prevSlide = () => {
    // hide current slide
    hideSlide(currentSlideIdx);

    // make currentSLideIdx to point to previous slide to show
    // if currently shown slide is the first element in the list, set index to last list element
    currentSlideIdx -= 1;
    if (currentSlideIdx < 0) {
        currentSlideIdx = slides.length - 1;
    }

    // show slide for updated index
    showSlide(currentSlideIdx);
};

const handleClick = (event) => {
    const targetParent = event.target.parentElement; // tag "a"
 
    if (targetParent.classList.contains('slide__button-next')) {
        nextSlide()
    }

    if (targetParent.classList.contains('slide__button-prev')) {
        prevSlide()
    }
}

const handleKeyPress = (event) => {
    if (event.key === 'ArrowRight') {
        nextSlide()
    }

    if (event.key === 'ArrowLeft') {
        prevSlide()
    }
}

slides.forEach(slide => slide.addEventListener('click', handleClick));
document.body.addEventListener('keydown', handleKeyPress);

showSlide(currentSlideIdx); // by default all slides are hidden (css slide), show first item on reload
