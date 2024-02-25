
// // Making comment button in post functional
let commentBtns = document.querySelectorAll('.comment-icon');

commentBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        let commentCount = parseInt(this.nextElementSibling.innerText);
        
        if (!this.classList.contains('commented')) {
            this.src = './assets/Icons/Comment_O.png';
            this.alt = 'comment';
            this.classList.add('commented');
            // commentCount++;
        } else {
            this.src = './assets/Icons/Comment_C.png';
            this.alt = 'Like';
            this.classList.remove('commented');
            // commentCount--;
        }
        
        this.nextElementSibling.innerText = commentCount;
    });
});

// Making like button in post functional
let likeBtns = document.querySelectorAll('.like-icon');

likeBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        let likeCount = parseInt(this.nextElementSibling.innerText);
        
        if (!this.classList.contains('liked')) {
            this.src = './assets/Icons/Like.png';
            this.alt = 'Liked';
            this.classList.add('liked');
            likeCount++;
        } else {
            this.src = './assets/Icons/Unlike.png';
            this.alt = 'Like';
            this.classList.remove('liked');
            likeCount--;
        }
        
        this.nextElementSibling.innerText = likeCount;
    });
});

