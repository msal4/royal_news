const url =
  'https://newsapi.org/v2/top-headlines?country=us&apiKey=79af8a0825ba4443adf9c1f76f8913cb';

export async function getNews() {
  try {
    let articles = await fetch(url).then(response => response);

    let result = await articles.json();
    articles = null;
    return result.articles;
  } catch (error) {
    throw error;
  }
}
