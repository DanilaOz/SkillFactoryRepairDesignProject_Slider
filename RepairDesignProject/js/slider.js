const entities = [
    {
        city: 'Rostov-on-Don<br>LCD Admiral',
        apartArea: '81 m2',
        repairTime: '3.5 months',
        img: './images/rostov-admiral-slider-photo.png' 
    },
    {
        city: 'Sochi<br>Thieves',
        apartArea: '105 m2',
        repairTime: '4 months',
        img: './images/sochi-thieves-slider-photo.png' 
    },
    {
        city: 'Rostov-on-Don<br>Patriotic',
        apartArea: '93 m2',
        repairTime: '3 months',
        img: './images/rostov-patriotic-slider-photo.png'
    }
]

const projectCity = document.querySelector('.project__city');
const projectApartArea = document.querySelector('.project__apart__area');
const projectRepairTime = document.querySelector('.project__repair__time');
const projectImage = document.querySelector('.project-image');

const sliderDots = document.querySelectorAll('.slider__dot');
const sliderLinks = document.querySelectorAll('.slider_menu__link');
const prevSlide = document.querySelector('.prev__slide');
const nextSlide = document.querySelector('.next__slide');

let currentIndex = 0,
    dotIndex = 0,
    linkIndex = 0;

const initSlider = (index) => {
    projectCity.innerHTML = entities[index].city;
    projectApartArea.innerHTML = entities[index].apartArea;
    projectRepairTime.innerHTML = entities[index].repairTime;
    projectImage.style.backgroundImage = `url(${entities[index].img})`;
}

const activeDot = (index) => {
    for (let dot of sliderDots) {
        dot.classList.remove('dot__active');
    }
    sliderDots[index].classList.add('dot__active');
}

const activeLink = (index) => {
    for (let link of sliderLinks) {
        link.classList.remove('link__active');
    }
    sliderLinks[index].classList.add('link__active');
}

// Переключение стрелками

nextSlide.addEventListener('click', () => {
    if (currentIndex === sliderDots.length - 1) {
        currentIndex = 0;
        dotIndex = 0;
        linkIndex = 0;
    } else { 
        currentIndex += 1;
        dotIndex += 1;
        linkIndex += 1;
    }
    initSlider(currentIndex);
    activeDot(dotIndex);
    activeLink(linkIndex);
});

prevSlide.addEventListener('click', () => {
    if (currentIndex === 0) {
        currentIndex = sliderDots.length - 1;
        dotIndex = sliderDots.length - 1;
        linkIndex = sliderDots.length - 1;
    } else {
        currentIndex -= 1;
        dotIndex -= 1;
        linkIndex -= 1;
    }
    initSlider(currentIndex);
    activeDot(dotIndex);
    activeLink(linkIndex);
});

// Переключение кружочками

sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        dotIndex = index;
        linkIndex = dotIndex;
        initSlider(currentIndex);
        activeDot(dotIndex);
        activeLink(linkIndex);
    });
});

// Переключение ссылками

sliderLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
        currentIndex = index;
        linkIndex = index;
        dotIndex = linkIndex;
        initSlider(currentIndex);
        activeLink(linkIndex);
        activeDot(dotIndex);
    });
});


// SetInterval
/*
setInterval(() => {
    nextSlide.click();
}, 5000);
*/