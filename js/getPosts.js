const projectId = 'fbog0kgj';
const dataset = 'production';
const query = encodeURIComponent(`*[_type == "journalPost"] | order(publishedAt desc){
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  "imageUrl": mainImage.asset->url
}`);

const url = `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}?query=${query}`;

export async function fetchJournalPosts() {
  const res = await fetch(url);
  const { result } = await res.json();
  return result
}