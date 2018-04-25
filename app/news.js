const url =
  'https://newsapi.org/v2/top-headlines?country=us&apiKey=79af8a0825ba4443adf9c1f76f8913cb';

export async function getNews() {
  try { 
    return await fetch(url).then(respones => response.json()).articles;
  } catch (error) {
    throw error;
  }
}
