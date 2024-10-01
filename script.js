// preloader
window.onload = function() {
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');
    setInterval(function() {
          preloader.classList.add('preloader-hidden');
          let headerAnim = document.querySelector('.nav-header__list-deadpool');
          headerAnim.classList.add('header-animation');
          let headerAnima = document.querySelector('.nav-header__list-logo');
          headerAnima.classList.add('header-animation-logo');
    }, 990);

}


// header
let headerBtn = document.querySelector('.header-btn');
let imgPool = false; 

headerBtn.addEventListener('click', function(){
    let navHeaderListDeadpool = document.getElementById('imgClickAndChange');
    if(!imgPool) {
        navHeaderListDeadpool.src = './img/jirny.png';
        imgPool = true;
    }
    else{
        navHeaderListDeadpool.src = './img/Main-image.png';
        imgPool = false;
    }
});


// characterinfo
const clas = new IntersectionObserver(entries => {
// перебор записей
    entries.forEach(entry => {
    // если элемент появился
    if (entry.isIntersecting) {
        // добавить ему CSS-класс
        entry.target.classList.add('characterinfo-animation');
    }
    });
});

clas.observe(document.querySelector('.characterinfo'));


let characterinfo = document.querySelector('.characterinfo');
let characterinfoImg = document.querySelector('.characterinfo__img');
characterinfo.onmousemove = (e) => {
    const rect = characterinfo.getBoundingClientRect();
    const x = e.clientX - rect.left; // Положение мыши относительно контейнера
    const y = e.clientY - rect.top; // Положение мыши относительно контейнера

    const moveX = ((x / rect.width) * 20) - 5; // Измените значение для регулировки движения
    const moveY = ((y / rect.height) * 20) - 5; // Измените значение для регулировки движения

    characterinfoImg.style.transform = `translate(${moveX}px, ${moveY}px)`;

    };
characterinfo.onmouseleave = () => {
    characterinfoImg.style.transform = 'translate(0, 0)'; // Возвращаем в начальное положение
};


// gallery
const observer = new IntersectionObserver(entries => {
    // перебор записей
    entries.forEach(entry => {
      // если элемент появился
      if (entry.isIntersecting) {
        // добавить ему CSS-класс
        entry.target.classList.add('gallery-animation');
      }
    });
  });
  observer.observe(document.querySelector('.gallery'));


// footer
let footer = document.querySelector('.footer');
let footerContainer = document.querySelector('.footer__container');
let footerContainerList = document.querySelector('.footer__container-list');

footer.onmousemove = (e) => {
    const rect = footer.getBoundingClientRect();
    const x = e.clientX - rect.left; // Положение мыши относительно контейнера
    const y = e.clientY - rect.top; // Положение мыши относительно контейнера

    const moveX = ((x / rect.width) * 5) - 1; // Измените значение для регулировки движения
    const moveX2 = ((x / rect.width) * 5) - 1; 

    const moveY = ((y / rect.height) * 20) - 50; // Измените значение для регулировки движения

    footerContainer.style.transform = `translate(${moveX}px)`;

    footerContainerList.style.transform = `translate(${moveX2}px)`;
};
footer.onmouseleave = () => {
    footerContainer.style.transform = 'translate(0, 0)'; // Возвращаем в начальное положение
    footerContainerList.style.transform = 'translate(0, 0)';
};

let deadpoolClick = document.querySelector('.footer__list-items__img-deadpool');
let dialogClick = document.querySelector('.footer-click');
let clickCount = 0;

  deadpoolClick.addEventListener('click', () => {
    clickCount++;
    if (clickCount === 5) {
        dialogClick.style.opacity = 1;
    }
    if (clickCount === 10) {
        deadpoolClick.src = './img/footer-img2.png';
    }
    if (clickCount === 15) {
        deadpoolClick.src = './img/footer-img3.png';
    }
  });
//  для жирни
// function changeImage() {
//     if (document.getElementById("imgClickAndChange").src == "http://www.userinterfaceicons.com/80x80/minimize.png"){
//         document.getElementById("imgClickAndChange").src = "http://www.userinterfaceicons.com/80x80/maximize.png";
//     } else {
//         document.getElementById("imgClickAndChange").src = "http://www.userinterfaceicons.com/80x80/minimize.png";
//     }
// }
