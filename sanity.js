import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: 'fbog0kgj',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2024-01-01'
});