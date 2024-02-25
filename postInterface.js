// Making like button in post functional
let isLiked = false;
let likeCount = parseInt(document.getElementById( 'likeCount' ).innerText);

function toggleLike() {
  isLiked = !isLiked;
  const likeIcon = document.getElementById('like-icon');
  if (isLiked) {
    likeIcon.src = 'assets/Icons/Like.png';
    likeCount++;
    document.getElementById('likeCount').innerHTML = likeCount;
  } else {
    likeIcon.src = 'assets/Icons/Unlike.png';
    likeCount--;
    document.getElementById('likeCount').innerHTML = likeCount;
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
