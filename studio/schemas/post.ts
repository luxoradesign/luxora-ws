// /studio/schemas/post.ts
export default {
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
        { name: 'title', type: 'string' },
        { name: 'slug', type: 'slug', options: { source: 'title', maxLength: 96} },
        { name: 'excerpt', type: 'text' },
        { name: 'mainImage', type: 'image', options: { hotspot: true } },
        { name: 'publishedAt', type: 'datetime' },
        { name: 'body', type: 'array', of: [{ type: 'block' }] },
    ],
}