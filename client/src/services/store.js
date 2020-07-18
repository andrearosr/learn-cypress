const store = {
  loggedin: false,
  jobs: [],
  update: function(field, value) {
    this[field] = value;
  },
};

window._store = store;

export default store;