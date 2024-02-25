// Making like button in post functional
let isLiked = false;

function toggleLike() {
  isLiked = !isLiked;
  const likeIcon = document.getElementById('like-icon');
  if (isLiked) {
    likeIcon.src = 'assets/Icons/Like.png';
  } else {
    likeIcon.src = 'assets/Icons/Unlike.png';
  }
}
// Making comment button in post functional
let commentOpen = false;

function toggleComments() {
  commentOpen = !commentOpen;
  const commentIcon = document.getElementById('like-icon');
  if (isLiked) {
    likeIcon.src = 'assets/Icons/Like.png';
  } else {
    likeIcon.src = 'assets/Icons/Unlike.png';
  }
}
