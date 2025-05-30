import { client } from "./sanity.js";

export async function fetchJournalPosts() {
  const query = `*[_type == "journalPost"] | order(publishedAt desc){
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    "imageUrl": mainImage.asset->url
  }`;

  return await client.fetch(query);
}
