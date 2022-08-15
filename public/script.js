const navbar = document.querySelector(".navbar");

window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("custom-black") : navbar.classList.remove("custom-black");
}

var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});