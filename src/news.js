// Change YOUR_API_KEY_HERE to your apiKey
const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY_HERE";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}
