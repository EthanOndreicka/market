document.getElementById('scrollLeft').onclick = function() {
    document.querySelector('.container').scrollBy({
        left: -160, // Adjust this value as needed
        behavior: 'smooth'
    });
};

document.getElementById('scrollRight').onclick = function() {
    document.querySelector('.container').scrollBy({
        left: 160, // Adjust this value as needed
        behavior: 'smooth'
    });
};