import sanityClient from "https://esm.sh/@sanity/client@5.3.2";

export const client = sanityClient({
  projectId: "fbog0kgj", // Replace with your actual project ID if different
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});
