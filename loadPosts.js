import { fetchJournalPosts } from "./getPosts.js";

async function renderPosts() {
  const posts = await fetchJournalPosts();
  const container = document.querySelector("#journal-posts");

  if (!container) return;

  posts.forEach((post) => {
    const postEl = document.createElement("div");
    postEl.className = "blog-post border-b border-gray-200 pb-8 mb-8";

    postEl.innerHTML = `
      <img src="${post.imageUrl}" alt="${post.title}" class="w-full h-64 object-cover rounded mb-4">
      <h2 class="text-2xl font-semibold mb-2">${post.title}</h2>
      <p class="text-gray-600 mb-4">${post.excerpt}</p>
      <p class="text-sm text-gray-500">${new Date(post.publishedAt).toLocaleDateString()}</p>
    `;

    container.appendChild(postEl);
  });
}

renderPosts();
