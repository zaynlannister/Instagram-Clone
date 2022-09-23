import { renderComments } from "./post-comments";
import { commentsButton } from "./post-comments";
import {postMaterials} from "./post-content";

const commentsMenu = document.querySelector('.comments');
export const commentsContainer = document.querySelector('.comments__content');
const postsContainer = document.querySelector('.presentation-section');
const commentMenuUsername = document.querySelector('.user-post__username');

postsContainer.addEventListener('click', (event) => {
    toggleCommentMenu(event);
});

function toggleCommentMenu(event) {
    const target = event.target;

    if (target.classList.contains('comment-btn')) {
        commentsMenu.classList.toggle('active');
        renderComments(target.getAttribute('data-id'));

        const id = parseInt(target.getAttribute('data-id'));

        commentsButton.setAttribute('data-id', id);

        const desiredPost = postMaterials.find(item => item.id === id);
        renderCommentUsername(desiredPost);
    }
}

function renderCommentUsername(post) {
    commentMenuUsername.innerHTML = post.username;
}