import postTemplate from '../templates/posts.hbs';
const containerPost = document.querySelector('#postsContainer');
function renderPost() {
  const html = postTemplate({
    post: {
      title: 'test',
      content: 'content',
      comments: [
        {
          id: 1,
          text: 'comment 1',
        },
        {
          id: 2,
          text: 'comment 2',
        },
      ],
    },
  });
  containerPost.innerHTML = html;
}

renderPost();
