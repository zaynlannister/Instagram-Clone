import { renderComments } from "./post-comments";
import { commentsButton } from "./post-comments";

const commentsMenu = document.querySelector('.comments');
export const commentsContainer = document.querySelector('.comments__content');
const postsContainer = document.querySelector('.presentation-section');

postsContainer.addEventListener('click', (event) => {
    toggleCommentMenu(event);
});

function toggleCommentMenu(event) {
    const target = event.target;

    if (target.classList.contains('comment-btn')) {
        commentsMenu.classList.toggle('active');
        renderComments(target.getAttribute('data-id'));

        commentsButton.setAttribute('data-id', target.getAttribute('data-id'))
    }
}