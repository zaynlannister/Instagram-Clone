import { postMaterials } from "./post-content";
import { commentsContainer } from "./comments-menu";

export class Comment {
    constructor(props) {
        this.text = props.text;
        this.likes = 0;
    }

    getTemplate() {
        return `
            <div class="comments__content-comment">
              <div class="comments__content-image"><img src="src/images/user__image.png"></div>
              <div class="comments__content-wrapper">
                <div class="comments-user">
                  <div class="comments-user__details">
                    <div class="comments-user__name">username</div>
                    <div class="comments-user__text">${this.text}</div>
                  </div>
                  <div class="comments-user__info">
                    <div class="comments-user__data">2 ч.</div>
                    <div class="comments-user__likes">Нравится: <span>${this.likes}</span></div>
                    <div class="comments-user__reply-btn">
                      <button class="btn">Ответить</button>
                    </div>
                  </div>
                  <div class="comments-user__reply-answers">
                    <button class="btn">Посмотреть ответы (0)</button>
                  </div>
                </div>
                <div class="comments-like">
                  <svg height="12" role="img" viewBox="0 0 24 24" width="12"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>
                </div>
              </div>
            </div>
        `
    }
}


// UI

const commentsInput = document.querySelector('.comments__action-input input');
export const commentsButton = document.querySelector('.comments__action-button button');

export function renderComments(id) {
    const desiredPost = postMaterials.find(item => item.id === parseInt(id));

    commentsContainer.innerHTML = ''

    desiredPost.comments.forEach(item => {
        commentsContainer.innerHTML += item.getTemplate()
    })
}

commentsButton.addEventListener('click', addCommentThroughInput);

function addCommentThroughInput() {
    const value = commentsInput.value;
    const id = parseInt(commentsButton.getAttribute('data-id'));
    const desiredPost = postMaterials.find(item => item.id === id);

    postMaterials[id - 1].comment(value);

    renderComments(id);
    renderCommentsLength(`.comments-quantity-${id}`, desiredPost)

    commentsInput.value = '';
}

function renderCommentsLength(element, post) {
    const content = document.querySelector(`${element} span`);

    content.innerHTML = post.comments.length;
}