


const burgerButton = document.querySelector('.header .burger');
const header = document.querySelector('.header__inner');
const siteContainer = document.querySelector('.site-container');
burgerButton.addEventListener('click', function(e){
    e.preventDefault();
    header.classList.toggle('open');
    this.classList.toggle('open');
})




const productSlider = document.querySelector('.products__slider-wrapper');
if(productSlider){
    const swiper = new Swiper(productSlider, {
        spaceBetween: 30,
        slidesPerView: 3,
        wrapperClass: 'products__slider',
        slideClass: 'products-slide',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        allowTouchMove: false,
        breakpoints:{
            0:{
                slidesPerView: 1,
                spaceBetween: 10,
                allowTouchMove: true,
            },
            
            768:{
                slidesPerView: 3,
                spaceBetween: 30,
                allowTouchMove: true,

            },
            991:{
                allowTouchMove: false,
            }
            
        }
    });
}


const mediaSlider = document.querySelector('.media-slider');
if(mediaSlider){
    const mediaSwiper = new Swiper(mediaSlider, {
        spaceBetween: 50,
        slidesPerView: 3,
        wrapperClass: 'media-slider-wrapper',
        slideClass: 'media-slider-slide',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        allowTouchMove: false,
        breakpoints:{
            0:{
                slidesPerView: 1,
                spaceBetween: 10,
                allowTouchMove: true,
            },
            
            768:{
                slidesPerView: 3,
                spaceBetween: 50,
                allowTouchMove: true,

            },
            991:{
                allowTouchMove: false,
            }
            
        }
    });
}


const historySlider = document.querySelector('.history-slider');
if(historySlider){
    const historySwiper = new Swiper(historySlider, {
        spaceBetween: 30,
        slidesPerView: 1,
        wrapperClass: 'history-slider-wrapper',
        slideClass: 'history-slider-slide',
        allowTouchMove: false,
        autoplay: {
            delay: 5000,
        },

  
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true

        },

        breakpoints:{
            0:{
                allowTouchMove: true,
            },

            991:{
                allowTouchMove: false,
            }
        }
    });
}


const contactLangSelect = document.querySelector('#social-lang');
if(contactLangSelect){
    document.querySelector('#english').classList.add('active');
    document.querySelector('#hindi').classList.remove('active');
    contactLangSelect.addEventListener('change', function(){
        console.log(contactLangSelect.value);
        if(contactLangSelect.value == 'english'){
            document.querySelector('#english').classList.add('active');
            document.querySelector('#hindi').classList.remove('active');
            contactLangSelect.style.width = "76px"
        }else{
            document.querySelector('#english').classList.remove('active');
            document.querySelector('#hindi').classList.add('active');
            contactLangSelect.style.width = "55px"
        }
        
    })
}


const popupBtns = document.querySelectorAll('.popup-link');
if(popupBtns){
    popupBtns.forEach((link) => {
        link.addEventListener('click', function(e){
            e.preventDefault();
            console.log(link.getAttribute('data-popup'))
            document.querySelector(link.getAttribute('data-popup')).classList.add('active');
        })
    })
    
}

const popupCloseLinks = document.querySelectorAll('.close-popup');
if(popupCloseLinks){
    popupCloseLinks.forEach((link) => {
        link.addEventListener('click', function(e){
            e.preventDefault();
            link.parentElement.parentElement.classList.remove('active');
        })
    })
    
}


MediaBox('.play-btn');