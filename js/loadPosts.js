import { client } from './sanity.js';

function getSlugFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('slug');
}

async function fetchPost(slug) {
  return await client.fetch(`*[_type == "journalPost" && slug.current == $slug][0]{
    title,
    body,
    publishedAt,
    "imageUrl": mainImage.asset->url
  }`, { slug });
}

function renderPost(post) {
  const container = document.getElementById("post-content");
  if (!post) {
    container.innerHTML = "<p>Post not found.</p>";
    return;
  }

  const date = new Date(post.publishedAt).toLocaleDateString();
  container.innerHTML = `
    <h1>${post.title}</h1>
    <p class="date">${date}</p>
    ${post.imageUrl ? `<img src="${post.imageUrl}" alt="${post.title}" />` : ''}
    <div class="post-body">${blockToHTML(post.body)}</div>
  `;
}

// Optional: Convert Sanity Portable Text blocks into HTML
function blockToHTML(blocks) {
  return blocks.map(block => {
    if (block._type === 'block' && block.children) {
      return `<p>${block.children.map(child => child.text).join('')}</p>`;
    }
    return '';
  }).join('');
}

// Load it!
document.addEventListener("DOMContentLoaded", async () => {
  const slug = getSlugFromURL();
  const post = await fetchPost(slug);
  renderPost(post);
});
