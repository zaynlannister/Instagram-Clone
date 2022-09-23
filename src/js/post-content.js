import { responseFromServer } from "./server-response";
import { Comment } from "./post-comments";

class Post {
    constructor(props) {
        this.username = props.username;
        this.id = props.id;
        this.src = props.src;
        this.likes = props.likes;
        this.description = props.description;
        this.comments = [];
    }

    like() {
        this.likes++
    }

    dislike() {
        this.likes--
    }

    comment(text) {
        this.comments.push(new Comment({text}))
    }

    getTemplate() {
        return `
            <div class="user-post" data-id="${this.id}">
              <div class="user-post__details">
                <div class="user-post__acc-image"><img src="src/images/user__image.png"></div>
                <div class="user-post__username">${this.username}</div>
                <svg class="user-post__details-additionally" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
              </div>
              <div class="user-post__content">
                <img src="${this.src}" alt="content">
              </div>
              <div class="user-post__actions">
                <div class="user-post__like">
                  <svg class="like-btn like-btn-${this.id}" data-id="${this.id}" like-button fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path data-id="${this.id}" like-button d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>
                  <svg class="dislike-btn dislike-btn-${this.id}" dislike-button data-id="${this.id}" dislike-button color="#ed4956" fill="#ed4956" height="24" role="img" viewBox="0 0 48 48" width="24"><path dislike-button data-id="${this.id}" d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                </div>
                <div class="user-post__comment">
                  <svg data-id="${this.id}" class="comment-btn" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path data-id="${this.id}" class="comment-btn" d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                </div>
                <div class="user-post__share">
                  <svg fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                </div>
                <div class="user-post__save">
                  <svg fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                </div>
              </div>
              <div class="user-post__info">
                <div class="user-post__likes-quantity likes-quantity-${this.id}"><b><span>${this.likes}</span> отметок "Нравится"</b></div>
                <div class="user-post__description"><b><span>${this.username}</span></b> ${this.description}</div>
              </div>
              <div data-id="${this.id}" class="user-post__comments-quantity comments-quantity-${this.id} comment-btn">Посмотреть все комментарии <span>0</span></div>
              <div class="user-post__date">20 часов назад</div>
            </div>
        `
    }
}

// UI

function renderLikes(element, post) {
    const likesContainer = document.querySelector(`${element} span`);

    likesContainer.innerHTML = post.likes;
}

function switchLikeSvg(id) {
    const likeSvg = document.querySelector(`.like-btn-${id}`);
    const likedSvg = document.querySelector(`.dislike-btn-${id}`);

    likeSvg.classList.toggle('hide');
    likedSvg.classList.toggle('active');
}

// Business Logic

export const postMaterials = [];

function getPost(id, data) {
    const post = data.find(item => item.id === id);

    return post;
}

function prepareData(responseFromServer) {
    responseFromServer.forEach(item => {
        postMaterials.push(new Post(item));
    })
}


function renderData(element, data) {
    const container = document.querySelector(element);

    data.forEach(item => {
        container.innerHTML += item.getTemplate();
    })

    // listeners

    container.addEventListener('click', event => {
        const target = event.target;

        if (target.hasAttribute('like-button') || target.hasAttribute('dislike-button')) {
            const id = parseInt(target.getAttribute('data-id'));
            const desiredPost = getPost(id, data)

            if (target.hasAttribute('like-button')) {
                desiredPost.like();
            } else  {
                desiredPost.dislike();
            }

            renderLikes(`.likes-quantity-${id}`, desiredPost);
            switchLikeSvg(id);
        }
    })
}

prepareData(responseFromServer);

renderData('.presentation-publications', postMaterials);