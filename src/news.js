const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=79af8a0825ba4443adf9c1f76f8913cb";

export async function getNews() {
  let result = await fetch(url).then(response => response).then(response => response.json());
  return result.articles;
}
