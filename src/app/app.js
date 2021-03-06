
import { topHeadlinesUrl } from './config/articleApi.js';

const loader = document.querySelector("app-loader");

window.addEventListener('load', () => {
    loader.style.visibility = "hidden";
    getArticles();
});

async function getArticles() {
    const main = document.querySelector('#news');
    displayLoading();
    const res = await fetch(topHeadlinesUrl);
    const json = await res.json();
    hideLoading();
    main.innerHTML = "";
    json.articles.forEach(article => {
        const el = document.createElement('news-item');
        el.article = article;
        el.setAttribute('description', article.description);
        el.setAttribute('publishedAt', article.publishedAt);
        el.setAttribute('title', article.title);
        el.setAttribute('url', article.url);
        let defaultUrl = `http://${location.host}/web-componet-news/assets/images/default.png`;
        defaultUrl = validateUrl(article.urlToImage)? article.urlToImage: defaultUrl;
            el.setAttribute('urlToImage',defaultUrl )
        
        
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


function validateUrl(value) {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
  }


