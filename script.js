document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('nav').classList.toggle('open');
});

document.querySelector('nav').addEventListener('click', function() {
    document.querySelector('nav').classList.remove('open');
});