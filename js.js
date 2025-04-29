const ua = navigator.userAgent;

let clicked = null;

if (/mobile/i.test(ua)) {
    console.log("Пользователь зашел с телефона 📱");
} else if (/tablet/i.test(ua)) {
    console.log("Пользователь зашел с планшета 📲");
} else {
    console.log("Пользователь зашел с компьютера 🖥️");
}
$(document).ready(function() {
    $("#home-image").click(function() {
        $('html, body').animate({
            scrollTop: $(".menu").offset().top
        }, 1000);
    });
});
// main code!!!
$(document).ready(function () {
    // меню
    if (/mobile/i.test(ua)) {
        $('#menu-image').css({
            'position:': 'fixed',
            'width': '70px',
            'height': '70px',
            'top': '10px',
            'left': '785px',
        });
    }
    // Обработчик клика выносим за пределы scroll
    $('#arrow-image').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 500); // плавный скролл вверх
        $(this).fadeOut(); // скрываем стрелку после нажатия
    });

    // Отдельно обрабатываем скролл
    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();

        if (scrollPosition > 100) {
            $('#arrow-image').fadeIn();
        } else {
            $('#arrow-image').fadeOut();
        }
    });

    // home
    $('.home').click(function (e) {
        e.stopPropagation();
        e.preventDefault();

        if (clicked === 'products') {
            $('#products-image').css({
                'position': 'fixed',
                'left': '820px',
                'top': '0px',
                'width': '120px',
                'height': '100px',
                'z-index': '1'
            }).attr('src', 'IMAGES/cup_1.png');
        }

        if (clicked === 'categories') {
            $('#categories-image').css({
                'position': 'fixed',
                'left': '910px',
                'top': '8px',
                'width': '90px',
                'height':'70px',
                'z-index': '1'
            }).attr('src', 'IMAGES/categories_1.png');
        }
        if (clicked === 'why_us') {
            $('#why-us_image').css({
                'position': 'fixed',
                'left': '1000px',
                'top': '23px',
                'width': '50px',
                'height': '40px',
            }).attr('src', 'IMAGES/why-us_1.png');
        }
        if (clicked === 'reviews') {
            $('#reviews-image').css({
                'position': 'fixed',
                'left': '1090px',
                'top': '25px',
                'width': '50px',
                'height': '30px', 
            }).attr('src', 'IMAGES/reviews_1.png');
        }
        if (clicked === 'contact') {
            $('#contact-image').css({
                'position': 'fixed',
                'left': '1140px',
                'top': '10px',
                'width': '130px',
                'height': '65px',
            }).attr('src', 'IMAGES/contact_1.png');
        }

        $('#home-image').css({
            'position': 'fixed',
            'left': '775px',
            'top': '7px',
            'width': '75px',
            'height': '75px',
            'z-index': '10'
        }).attr('src', 'IMAGES/home_1.png');

        clicked = 'home';
    });

    // products
    $('.products').click(function (e) {
        e.stopPropagation();
        e.preventDefault();

        if (clicked === 'home') {
            $('#home-image').css({
                'position': 'fixed',
                'left': '795px',
                'top': '20px',
                'width': '40px',
                'height': '40px',
                'z-index': '10'
            }).attr('src', 'IMAGES/home_2.png');
        }

        if (clicked === 'categories') {
            $('#categories-image').css({
                'position': 'fixed',
                'left': '910px',
                'top': '8px',
                'width': '90px',
                'height':'70px',
                'z-index': '1'
            }).attr('src', 'IMAGES/categories_1.png');
        }
        if (clicked === 'why_us') {
            $('#why-us_image').css({
                'position': 'fixed',
                'left': '1000px',
                'top': '23px',
                'width': '50px',
                'height': '40px',
            }).attr('src', 'IMAGES/why-us_1.png');
        }
        if (clicked === 'reviews') {
            $('#reviews-image').css({
                'position': 'fixed',
                'left': '1090px',
                'top': '25px',
                'width': '50px',
                'height': '30px', 
            }).attr('src', 'IMAGES/reviews_1.png');
        }
        if (clicked === 'contact') {
            $('#contact-image').css({
                'position': 'fixed',
                'left': '1140px',
                'top': '10px',
                'width': '130px',
                'height': '65px',
            }).attr('src', 'IMAGES/contact_1.png');
        }

        $('#products-image').css({
            'position': 'fixed',
            'left': '855px',
            'top': '20px',
            'width': '45px',
            'height': '45px',
            'z-index': '10'
        }).attr('src', 'IMAGES/cup_2.png');

        clicked = 'products';
    });

    // categories
    $('.categories').click(function (e) {
        e.stopPropagation();
        e.preventDefault();

        // сброс всего, если активно
        if (clicked === 'products') {
            $('#products-image').css({
                'position': 'fixed',
                'left': '820px',
                'top': '0px',
                'width': '120px',
                'height': '100px',
                'z-index': '1'
            }).attr('src', 'IMAGES/cup_1.png');
        }

        if (clicked === 'home') {
            $('#home-image').css({
                'position': 'fixed',
                'left': '795px',
                'top': '20px',
                'width': '40px',
                'height': '40px',
                'z-index': '10'
            }).attr('src', 'IMAGES/home_2.png');
        }
        if (clicked === 'why_us') {
            $('#why-us_image').css({
                'position': 'fixed',
                'left': '1000px',
                'top': '23px',
                'width': '50px',
                'height': '40px',
            }).attr('src', 'IMAGES/why-us_1.png');
        }
        if (clicked === 'reviews') {
            $('#reviews-image').css({
                'position': 'fixed',
                'left': '1090px',
                'top': '25px',
                'width': '50px',
                'height': '30px', 
            }).attr('src', 'IMAGES/reviews_1.png');
        }
        if (clicked === 'contact') {
            $('#contact-image').css({
                'position': 'fixed',
                'left': '1140px',
                'top': '10px',
                'width': '130px',
                'height': '65px',
            }).attr('src', 'IMAGES/contact_1.png');
        }

        $('#categories-image').css({
            'position': 'fixed',
            'left': '910px',
            'top': '10px',
            'width': '90px',
            'height': '70px',
            'z-index': '1'
        }).attr('src', 'IMAGES/categories_2.png');

        clicked = 'categories';
    });
    
    // why_us
    $('.why_us').click(function (e) {
        e.stopPropagation()
        e.preventDefault()

        // сброс всего, есл активно
        if (clicked === 'home') {
            $('#home-image').css({
                'position': 'fixed',
                'left': '795px',
                'top': '20px',
                'width': '40px',
                'height': '40px',
                'z-index': '10'
            }).attr('src', 'IMAGES/home_2.png');
        }
        if (clicked === 'products') {
            $('#products-image').css({
                'position': 'fixed',
                'left': '820px',
                'top': '0px',
                'width': '120px',
                'height': '100px',
                'z-index': '1'
            }).attr('src', 'IMAGES/cup_1.png');
        }
        if (clicked === 'categories') {
            $('#categories-image').css({
                'position': 'fixed',
                'left': '910px',
                'top': '8px',
                'width': '90px',
                'height':'70px',
                'z-index': '1'
            }).attr('src', 'IMAGES/categories_1.png');
        }
        if (clicked === 'reviews') {
            $('#reviews-image').css({
                'position': 'fixed',
                'left': '1090px',
                'top': '25px',
                'width': '50px',
                'height': '30px', 
            }).attr('src', 'IMAGES/reviews_1.png');
        }
        if (clicked === 'contact') {
            $('#contact-image').css({
                'position': 'fixed',
                'left': '1140px',
                'top': '10px',
                'width': '130px',
                'height': '65px',
            }).attr('src', 'IMAGES/contact_1.png');
        }
        $('#why-us_image').css({
            'position': 'fixed',
            'left': '1000px',
            'top': '25px',
           'width': '45px',
            'height': '35px',
        }).attr('src', 'IMAGES/why-us_2.png')
        clicked = 'why_us';
    });
    
    // reviews
    $('.reviews').click(function (e) {
        e.stopPropagation();
        e.preventDefault();

        // сброс всего, если активно
        if (clicked === 'home') {
            $('#home-image').css({
                'position': 'fixed',
                'left': '795px',
                'top': '20px',
                'width': '40px',
                'height': '40px',
                'z-index': '10'
            }).attr('src', 'IMAGES/home_2.png');
        }
        if (clicked === 'products') {
            $('#products-image').css({
                'position': 'fixed',
                'left': '820px',
                'top': '0px',
                'width': '120px',
                'height': '100px',
                'z-index': '1'
            }).attr('src', 'IMAGES/cup_1.png');
        }
        if (clicked === 'categories') {
            $('#categories-image').css({
                'position': 'fixed',
                'left': '910px',
                'top': '8px',
                'width': '90px',
                'height':'70px',
                'z-index': '1'
            }).attr('src', 'IMAGES/categories_1.png');
        }
        if (clicked === 'why_us') {
            $('#why-us_image').css({
                'position': 'fixed',
                'left': '1000px',
                'top': '23px',
                'width': '50px',
                'height': '40px',
            }).attr('src', 'IMAGES/why-us_1.png');
        }
        if (clicked === 'contact') {
            $('#contact-image').css({
                'position': 'fixed',
                'left': '1140px',
                'top': '10px',
                'width': '130px',
                'height': '65px',
            }).attr('src', 'IMAGES/contact_1.png');
        }
        $('#reviews-image').css({
            'position': 'fixed',
            'left': '1060px',
            'top': '20px',
            'width': '110px',
            'height': '50px',
        }).attr('src', 'IMAGES/reviews_2.png');

        clicked = 'reviews';
    });

    // contact
    $('.contact').click(function (e) {
        e.stopPropagation();
        e.preventDefault();

        // сброс всего, если активно
        if (clicked === 'home') {
            $('#home-image').css({
                'position': 'fixed',
                'left': '795px',
                'top': '20px',
                'width': '40px',
                'height': '40px',
                'z-index': '10'
            }).attr('src', 'IMAGES/home_2.png');
        }
        if (clicked === 'products') {
            $('#products-image').css({
                'position': 'fixed',
                'left': '820px',
                'top': '0px',
                'width': '120px',
                'height': '100px',
                'z-index': '1'
            }).attr('src', 'IMAGES/cup_1.png');
        }
        if (clicked === 'categories') {
            $('#categories-image').css({
                'position': 'fixed',
                'left': '910px',
                'top': '8px',
                'width': '90px',
                'height':'70px',
                'z-index': '1'
            }).attr('src', 'IMAGES/categories_1.png');
        }
        if (clicked === 'why_us') {
            $('#why-us_image').css({
                'position': 'fixed',
                'left': '1000px',
                'top': '23px',
                'width': '50px',
                'height': '40px',
            }).attr('src', 'IMAGES/why-us_1.png');
        }
        if (clicked === 'reviews') {
            $('#reviews-image').css({
                'position': 'fixed',
                'left': '1090px',
                'top': '25px',
                'width': '50px',
                'height': '30px', 
            }).attr('src', 'IMAGES/reviews_1.png');
        }
        $('#contact-image').css({
            'position': 'fixed',
            'left': '1140px',
            'top': '13px',
            'width': '120px',
            'height': '55px',
        }).attr('src', 'IMAGES/contact_2.png');

        clicked = 'contact';
    });

    // Сброс по клику все
    $(window).click(function () {
        if (clicked === 'home') {
            $('#home-image').css({
                'position': 'fixed',
                'left': '790px',
                'top': '19px',
                'width': '40px',
                'height': '40px',
                'z-index': '1'
            }).attr('src', 'IMAGES/home_2.png');
        }

        if (clicked === 'products') {
            $('#products-image').css({
                'position': 'fixed',
                'left': '820px',
                'top': '0px',
                'width': '120px',
                'height': '100px',
                'z-index': '1'
            }).attr('src', 'IMAGES/cup_1.png');
        }

        if (clicked === 'categories') {
            $('#categories-image').css({
                'position': 'fixed',
                'left': '910px',
                'top': '8px',
                'width': '90px',
                'height':'70px',
                'z-index': '1'
            }).attr('src', 'IMAGES/categories_1.png');
        }
        if (clicked === 'why_us') {
            $('#why-us_image').css({
                'position': 'fixed',
                'left': '1000px',
                'top': '23px',
                'width': '50px',
                'height': '40px',
            }).attr('src', 'IMAGES/why-us_1.png');
        }
        if (clicked === 'reviews') {
            $('#reviews-image').css({
                'position': 'fixed',
                'left': '1090px',
                'top': '30px',
                'width': '50px',
                'height': '30px', 
            }).attr('src', 'IMAGES/reviews_1.png');
        }
        if (clicked === 'contact') {
            $('#contact-image').css({
                'position': 'fixed',
                'left': '1140px',
                'top': '10px',
                'width': '130px',
                'height': '65px',
            }).attr('src', 'IMAGES/contact_1.png');
        }

        clicked = null;
    });
    // COFFEE ANIMATION!!!
    $(document).ready(function(){
        let coffeeImages = [
            'IMAGES/arabica.png',
            'IMAGES/robusta.png',
            'IMAGES/liberica.png',
            'IMAGES/excelsa.png'
        ];
    
        let container = $('.coffee-animation');
        let index = 0;
    
        function animateNextPack() {
            if (index >= coffeeImages.length) index = 0;
    
            let $img = $('<img>')
                .attr('src', coffeeImages[index])
                .addClass('coffee-pack')
                .css({ left: '100%' }) // начальная позиция — справа за экраном
                .appendTo(container);
    
            $img.animate({ left: '35%' }, 1000, 'swing', function() {
                setTimeout(function() {
                    $img.animate({ left: '-40%' }, 1000, 'swing', function() {
                        $img.remove(); // удаляем картинку после выхода
                        index++;
                        setTimeout(animateNextPack, 500); // пауза перед следующей
                    });
                }, 1000); // пауза в центре
            });
        }
    
        animateNextPack(); // запуск
    });
      
});





