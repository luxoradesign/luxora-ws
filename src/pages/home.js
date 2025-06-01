// src/pages/home.js
import { sanity } from '../utils/sanity.js'
import { urlFor } from '../utils/imageBuilder.js'

const postContainer = document.getElementById('journal-posts')

const renderPosts = async () => {
  const posts = await sanity.fetch(`*[_type == "post"] | order(publishedAt desc)[0...4] {
    title,
    slug,
    mainImage,
    publishedAt,
    excerpt
  }`)

  postContainer.innerHTML = posts
    .map(
      (post) => `
    <article class="bg-white p-6 rounded-lg shadow-md transition hover:shadow-xl">
      <img src="${urlFor(post.mainImage).width(600)}" alt="${post.title}" class="mb-4 rounded" />
      <h3 class="text-2xl mb-2 font-serif">${post.title}</h3>
      <p class="text-sm text-gray-600 mb-4">${new Date(post.publishedAt).toDateString()}</p>
      <p>${post.excerpt}</p>
    </article>
  `
    )
    .join('')
}

renderPosts()
