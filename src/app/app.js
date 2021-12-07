
import { topHeadlinesUrl } from './config/newsApi.js';

window.addEventListener('load', () => {
    getNews();
});

async function getNews() {
    const main = document.querySelector('#news');
    main.innerHTML = "";

    const res = await fetch(topHeadlinesUrl);
    const json = await res.json();

    json.articles.forEach(article => {
        const el = document.createElement('news-item');
        el.article = article;
        el.setAttribute('author',article.author);
        el.setAttribute('content', article.content);
        el.setAttribute('description', article.description);
        el.setAttribute('publishedAt', article.publishedAt);
        el.setAttribute('source', article.source);
        el.setAttribute('title', article.title);
        el.setAttribute('url', article.url);
        el.setAttribute('urlToImage', article.urlToImage);
        main.appendChild(el);
    });
}


