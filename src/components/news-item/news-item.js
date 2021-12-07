const newItem = document.createElement("template");
newItem.innerHTML = `
<style>
@import url('http://${location.host}/src/components/news-item/news-item.css')
</style>
<div class="article-wrapper">
    <h1 class="title"></h1>
  <p class="content"></p>
    <div class="description"></div>
    <div class="publishedAt"></div>
    <div class="source"></div>
    <a target="_blank" class="url">IMDb</a>
    <img src="" class="urlToImage" alt="" height="100">
</div>
`;
class NewsItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(newItem.content.cloneNode(true));
        setTimeout(() => {
            this.shadowRoot.querySelector(".article-wrapper .title").innerHTML = this.getAttribute("title");

               this.shadowRoot.querySelector(".article-wrapper .content").innerHTML = this.getAttribute("content");
               this.shadowRoot.querySelector(".article-wrapper .description").innerHTML = this.getAttribute("description").substring(0, this.getAttribute("description").indexOf('...'));
               this.shadowRoot.querySelector(".article-wrapper .publishedAt").innerHTML = this.getAttribute("publishedAt");
               this.shadowRoot.querySelector(".article-wrapper .source").innerHTML = this.getAttribute("source");
               this.shadowRoot
               this.shadowRoot.querySelector(".article-wrapper .url")
               .setAttribute(
                 "href",
                 this.getAttribute("url")
               );
               this.shadowRoot.querySelector(".article-wrapper .urlToImage").src = this.getAttribute("urlToImage");
            
        }, 100);

    }
}

window.customElements.define("news-item", NewsItem);