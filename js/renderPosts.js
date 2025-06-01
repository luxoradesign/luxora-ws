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
    div.className = "journal-post-card";
    div.innerHTML = `
  <a href="/journal/${post.slug.current}.html">
    ${post.imageUrl ? `<img src="${post.imageUrl}" alt="${post.title}" />` : ''}
    <h2>${post.title}</h2>
    <p>${post.excerpt}</p>
    <p class="date">${
      post.publishedAt
        ? new Date(post.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        : "Date not set"
    }</p>
  </a>
`;

    container.appendChild(div);
  });
});

