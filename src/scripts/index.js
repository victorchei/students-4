import postTemplate from '../templates/posts.hbs';
import postsAPI from './postsAPI.js';

const containerPost = document.querySelector('#postsContainer');

function renderPosts(posts) {
  const html = postTemplate({
    post: posts,
  });
  containerPost.innerHTML = html;
}

async function getPosts() {
  try {
    const posts = await postsAPI.getAllPosts();
    return posts;
  } catch (e) {
    containerPost.innerHTML = 'Помилка';
    console.error('getAllPosts', e);
  }
}

function submitHandler(event) {
  console.log(event);
  event.preventDefault;
  if (event.target.id === 'createPostForm') {
    createNewPost(event.target);
  }
}

function createNewPost(form) {
  //отримати данні
  const title = form.title.value;
  const content = form.content.value;

  //передати данні в API
  postsAPI.addPost({ title, content });
}

async function startApp() {
  const posts = await getPosts();

  await renderPosts(posts);
}

startApp();

document.addEventListener('submit', submitHandler);
