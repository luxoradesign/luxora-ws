import { fetchJournalPosts } from './getPosts.js';

document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("journal-posts");
  const posts = await fetchJournalPosts();

  if (!posts.length) {
    container.innerHTML = "<p>No posts found.</p>";
    return;
  }

  posts.forEach(post => {
    const div = document.createElement("div");
    div.className = "post-preview";
    div.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.excerpt}</p>
      ${post.imageUrl ? `<img src="${post.imageUrl}" alt="${post.title}" />` : ''}
      <small>Published on ${new Date(post.publishedAt).toLocaleDateString()}</small>
    `;
    container.appendChild(div);
  });
});
