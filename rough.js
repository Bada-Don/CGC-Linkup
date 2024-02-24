const likeButton = document.getElementById('like-button');
const unlikedIcon = document.querySelector('.unliked-icon');
const likedIcon = document.querySelector('.liked-icon');

let isLiked = false;

likeButton.addEventListener('click', function() {
    isLiked = !isLiked;
    if (isLiked) {
        unlikedIcon.style.display = 'none';
        likedIcon.style.display = 'inline';
    } else {
        unlikedIcon.style.display = 'inline';
        likedIcon.style.display = 'none';
    }
});
