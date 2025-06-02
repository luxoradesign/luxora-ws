// src/components/journal.js
import { sanity } from '../utils/sanity.js'
import { urlFor } from '../utils/imageBuilder.js'

const container = document.getElementById('journal-posts')

const loadJournal = async () => {
  const posts = await sanity.fetch(`*[_type == "post"] | order(publishedAt desc)[0...6] {
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt
  }`)

  container.innerHTML = posts
    .map(
      (post) => `
      <article class="bg-white rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col">
        <a href="/journal/${post.slug.current}.html" class="block mb-4">
          <img src="${urlFor(post.mainImage).width(800)}" class="rounded mb-4" alt="${post.title}" />
        </a>
        <h3 class="font-serif text-2xl mb-2">${post.title}</h3>
        <p class="text-sm text-gray-600 mb-2">${new Date(post.publishedAt).toLocaleDateString()}</p>
        <p class="text-base text-luxBlack/80">${post.excerpt}</p>
      </article>
    `
    )
    .join('')
}

loadJournal()
