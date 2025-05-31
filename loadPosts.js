import { fetchJournalPosts } from './getPosts.js';

async function renderPosts() {
    const posts = await fetchJournalPosts();
      const container = document.getElementById("journal-posts");

        posts.forEach((post) => {
        const div = document.createElement("div");
        div.className = "blog-post";
        div.innerHTML = '
          <img src="${post.imageUrl}" alt="${post.title}" />
          <h2>${post.title}</h2>
          <p>${post.excerpt}</p>
          <small>${new Date(post.publishedAt).toLocaleDateString()}</small>
        ';
        container.appendChild(div);
  });
}

renderPosts();