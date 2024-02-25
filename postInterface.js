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
let isCommented = false;

function toggleComment() {
  isCommented = !isCommented;
  const commentIcon = document.getElementById('comment-icon');
  if (isCommented) {
    commentIcon.src = 'assets/Icons/Comment_O.png';
  } else {
    commentIcon.src = 'assets/Icons/Comment_C.png';
  }
}
