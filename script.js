const comments = document.querySelectorAll('#list-comment .item');
const nextBtn = document.querySelector('.next a');
const prevBtn = document.querySelector('.prev a');
let currentIndex = 0;

function showComment(index) {
    comments.forEach((comment, i) => {
        comment.classList.remove('active');
        if (i === index) {
            comment.classList.add('active');
        }
    });
}

showComment(currentIndex);

nextBtn.addEventListener('click', function (event) {
    event.preventDefault();
    currentIndex = (currentIndex + 1) % comments.length;
    showComment(currentIndex);
});

prevBtn.addEventListener('click', function (event) {
    event.preventDefault();
    currentIndex = (currentIndex - 1 + comments.length) % comments.length;
    showComment(currentIndex);
});
