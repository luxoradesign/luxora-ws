import { createClient } from '@sanity/client'

export const sanity = createClient({
    projectId: 'fbog0kgj',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2024-06-01',
})