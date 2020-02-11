export const fetching_Posts = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  return fetch(url).then(data => {
    return data.json();
  });
};

export const fetching_LinkPosts = id => {
  const url = "https://jsonplaceholder.typicode.com/posts/" + id;
  return fetch(url).then(data => {
    return data.json();
  });
};

export const fetching_Comments = id => {
  const url = "https://jsonplaceholder.typicode.com/posts/" + id + "/comments";
  return fetch(url).then(data => {
    return data.json();
  });
};

export const fetching_Albums = () => {
  const url = "https://jsonplaceholder.typicode.com/albums";
  return fetch(url).then(data => {
    return data.json();
  });
};

export const fetching_Photos = id => {
  const url = "https://jsonplaceholder.typicode.com/photos/" + id;
  return fetch(url).then(data => {
    return data.json();
  });
};

export const addPosts = data => {
  data.userId = Math.floor(Math.random() * 10);
  const url = "https://jsonplaceholder.typicode.com/posts";
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(json => console.log(json));
};

export const editPost = data => {
  data.userId = Math.floor(Math.random() * 10);
  const url = "https://jsonplaceholder.typicode.com/posts/" + data.id;
  return fetch(url, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(json => console.log(json));
};

export const deletePost = data => {
  return fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE"
  })
    .then(response => response.json())
    .then(json => console.log(json));
};
