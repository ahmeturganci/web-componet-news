const newItem = document.createElement("template");
newItem.innerHTML = `
<style>
@import url('http://${location.host}/src/components/news-item/news-item.css')
</style>
<div class="article-wrapper">
    <div class="fill">
        <img src="" class="urlToImage" alt="" height="250">
    </div>
    <div class="new-header">
        <h1 class="title"></h1>
        <span class="publishedAt"></span>
        <span class="author"></span>
    </div>
    <p class="description">
        <a href="" class="url"> Devamını oku...</a>
    </p>
</div>

`;
class NewsItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(newItem.content.cloneNode(true));
        setTimeout(() => {
            this.shadowRoot.querySelector(".article-wrapper .new-header .title").innerHTML = this.getAttribute("title");
            this.shadowRoot.querySelector(".article-wrapper .description").innerHTML = this.getAttribute("description");
            this.shadowRoot.querySelector(".article-wrapper .publishedAt").innerHTML = this.getAttribute("publishedAt");
            this.shadowRoot.querySelector(".article-wrapper .author").innerHTML = this.getAttribute('author');
            // this.shadowRoot.querySelector(".article-wrapper .description .url")
            // .setAttribute(
            //     "href",
            //     this.getAttribute("url")
            //   );
            this.shadowRoot.querySelector(".article-wrapper .fill .urlToImage").src = this.getAttribute("urlToImage");
        }, 100);

    }
}

window.customElements.define("news-item", NewsItem);