const commentsMenu = document.querySelector('.comments');
const postsContainer = document.querySelector('.presentation-section');

postsContainer.addEventListener('click', (event) => {
    toggleCommentMenu(event);
});

function toggleCommentMenu(event) {
    const target = event.target;

    if (target.classList.contains('comment-btn')) {
        commentsMenu.classList.toggle('active');
    }
}