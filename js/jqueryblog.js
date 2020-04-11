const posts = ["https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@barisdng26"];

function posttamplate(post) {
  return `
            <div class="jumbotron">
              <img src="${post.thumbnail}">
              <h1 id="title" class="display-4">${post.title}</h1>
              <p>${post.description}</p>
              <hr class="my-4">
              <p>${post.pubDate}</p>
              <a class="btn btn-info btn-lg" href="#" role="button">Yazıyı oku...</a>
            </div>
  `;
}


document.getElementById("app").innerHTML = `
  ${posts.map(posttamplate).join("")}
`;
