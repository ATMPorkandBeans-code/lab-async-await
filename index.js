// Write your code here!

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     displayPosts(data);
//   })
//   .catch(function (error) {
//     console.error("Error fetching data: ".error);
//   });

const displayPosts = (data) => {
  data.forEach((post) => {
    const listItem = document.createElement("li");
    const title = document.createElement("h1");
    const body = document.createElement("p");
    const list = document.getElementById("post-list");

    title.textContent = post.title;

    body.textContent = post.body;

    listItem.appendChild(title);
    listItem.appendChild(body);
    list.appendChild(listItem);
  });
};

const fetchPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    displayPosts(data);
  } catch (error) {
    console.error("Error fetching data: ".error);
  }
};

fetchPosts();
