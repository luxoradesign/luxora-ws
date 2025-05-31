import { fetchJournalPosts } from "./getPosts";

async function renderPosts() {
  console.log("Blog script is working");

  const container = document.getElementById("journal-posts");

  container.innerHTML = "<p>This is a test blog post container.</p>";
}

renderPosts();