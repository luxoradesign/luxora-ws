import { client } from './sanity.js';

export async function fetchJournalPosts() {
  return await client.fetch(`*[_type == "journalPost"] | order(publishedAt desc){
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    "imageUrl": mainImage.asset->url
  }`);
}
