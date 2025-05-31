import { fetchJournalPosts } from './getPosts.js';

const container = document.getElementById('journal-posts');

async function loadPosts() {
  try {
    const posts = await fetchJournalPosts();

    if (posts.length === 0) {
      container.innerHTML = '<p>No journal posts found yet.</p>';
      return;
    }

    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('journal-post');

      postElement.innerHTML = `
        <h2>${post.title}</h2>
        ${post.imageUrl ? `<img src="${post.imageUrl}" alt="${post.title}" />` : ''}
        <p>${post.excerpt}</p>
        <p><em>${new Date(post.publishedAt).toLocaleDateString()}</em></p>
      `;

      container.appendChild(postElement);
    });
  } catch (err) {
    console.error('Error loading posts:', err);
    container.innerHTML = '<p>Failed to load journal posts.</p>';
  }
}

loadPosts();
