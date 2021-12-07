
import { topHeadlinesUrl } from './config/newsApi.js';

window.addEventListener('load', () => {
    getNews();
});

async function getNews() {
    const main = document.querySelector('#news');

    main.innerHTML = ""; // empty div inside 

    const res = await fetch(topHeadlinesUrl);
    const json = await res.json();

    json.articles.forEach(article => {
        const el = document.createElement('news-item');
        el.article = article;

        //content: "Benjamin Weiser, Danielle Ivory, Steve Eder, Matthew Goldstein, Rebecca Davis OBrien, Lola Fadulu, Colin Moynihan and Chelsia Rose Marcius contributed reporting.\r\nThe Daily is made by Lisa Tobin, Rac… [+869 chars]"
        //description: "After the death of Jeffrey Epstein, what kind of justice is possible without him?"
        //publishedAt: "2021-12-07T08:25:23Z"
        //source: {id: null, name: "New York Times"}
        //title: "The Trial of Ghislaine Maxwell - The New York Times"
        //url: "https://www.nytimes.com/2021/12/06/podcasts/the-daily/maxwell-trial.html"
        //urlToImage: "https://static01.nyt.com/images/2021/12/06/nyregion/06maxwell-strategy-01/06maxwell-strategy-01-facebookJumbo.jpg"

        el.setAttribute('content',article.content);
        el.setAttribute('description',article.description);
        el.setAttribute('publishedAt',article.publishedAt);
        el.setAttribute('source',article.source);
        el.setAttribute('title',article.title);
        el.setAttribute('url',article.url);
        el.setAttribute('urlToImage',article.urlToImage);
        

        main.appendChild(el);
    });
}


