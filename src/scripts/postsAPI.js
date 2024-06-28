const URL_POSTS = 'http://localhost:3000/posts';

class PostsAPI {
  async getAllStudents() {
    try {
      const res = await fetch(`${URL_POSTS}`);

      if (!res.ok) {
        return console.log('some error');
      }

      if (res.status === '401') {
        return console.error('не авторизований');
      }

      const parsedData = await res.json();
      return parsedData;
    } catch (e) {
      console.error(e);
    }
  }

  async getById(id) {
    try {
      const res = await fetch(`${URL_POSTS}/${id}`);
      const parsedData = await res.json();
      return parsedData;
    } catch (e) {
      console.error(e);
    }
  }

  async addStudent(student) {
    try {
      const answer = await fetch(`${URL_POSTS}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(student),
      });

      const parsedData = await answer.json();
      return parsedData;
    } catch (e) {
      console.error(e);
    }
  }

  async deleteStudent(id) {
    try {
      const res = await fetch(`${URL_POSTS}/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        throw new Error(res.status);
      }

      return await res.json();
    } catch (e) {
      console.error(e);
    }
  }
}

const postsAPI = new PostsAPI();
export default postsAPI;
