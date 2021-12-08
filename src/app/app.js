
import { topHeadlinesUrl } from './config/newsApi.js';

const loader = document.querySelector("app-loader");

window.addEventListener('load', () => {
    loader.style.visibility = "hidden";
    getNews();
});

async function getNews() {
    const main = document.querySelector('#news');
    displayLoading();
    const res = await fetch(topHeadlinesUrl);
    const json = await res.json();
    hideLoading();
    main.innerHTML = "";
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


// showing loading
function displayLoading() {
    loader.style.visibility = "inherit";

    setTimeout(() => {
     loader.style.visibility = "inherit";
    }, 5000);
}

function hideLoading() {
    loader.style.visibility = "hidden";
    
}


