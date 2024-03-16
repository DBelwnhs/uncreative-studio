function animateDivs() {
    var divs = document.querySelectorAll('div');

    function animate(index) {
        if (index < divs.length) {
            divs[index].classList.add('animated');
            divs[index].addEventListener('animationend', function() {
                animate(index + 1);
            });
        }
    }

    animate(0);
}