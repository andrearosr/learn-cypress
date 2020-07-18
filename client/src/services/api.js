import store from './store';

const api = {
  login: (email, password) => {
    fetch('http://localhost:9000/login', {
      method: 'post',
      body: JSON.stringify({ email, password }),
    })
    .then(response => {
      if (response.ok) {
        store.update('loggedin', true);
      }
    });
  },
};

export default api;