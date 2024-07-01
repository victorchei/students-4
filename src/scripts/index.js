import postTemplate from '../templates/posts.hbs';
import postsAPI from './postsAPI.js';

const containerPost = document.querySelector('#postsContainer');
function renderPost(posts) {
  const html = postTemplate({
    post: posts,
  });
  containerPost.innerHTML = html;
}

async function getPosts() {
  try {
    const posts = await postsAPI.getAllPosts();
    renderPost(posts);
  } catch (e) {
    containerPost.innerHTML = 'Помилка';
    console.error('getAllPosts', e);
  }
}

async function startApp() {
  const posts = await getPosts();

  renderPosts(posts);
}

startApp();

renderPost();
