const newItem = document.createElement("template");
newItem.innerHTML = `
    <style>
      @import url("http://${location.host}/src/components/news-item/news-item.css");
    </style>

    <div class="article-wrapper card" >
      <div class="wrapper">
        <div class="publishedAt">
        </div>
        <div class="data">
          <div class="content">
            <span class="author"></span>
               <h1 class="title"></h1>
            <p class="description"></p>
          </div>
        </div>
      </div>
  </div>

`;
class NewsItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(newItem.content.cloneNode(true));
    setTimeout(() => {
      this.shadowRoot.querySelector("div .publishedAt").innerHTML = (new Date(this.getAttribute("publishedAt"))).toLocaleTimeString(); //new Date(Date.parse(this.getAttribute("publishedAt")));
      this.shadowRoot.querySelector("div .title").innerHTML = this.getAttribute("title");
      this.shadowRoot.querySelector("div .description").innerHTML = this.getAttribute("description");
      this.shadowRoot.querySelector("div .wrapper").style.background = `url(${this.getAttribute("urlToImage")}) center / cover no-repeat`;      
    }, 100);
  }
    goDetail() {
      window.open(
        this.getAttribute("url"),
        '_blank'
      );
    }

  connectedCallback() {
    this.shadowRoot
      .querySelector(".card")
      .addEventListener("click", () => this.goDetail());
  }

  disconnectedCallback() {
    this.shadowRoot
      .querySelector(".card")
      .removeEventListener("click", () => this.goDetail());
  }
 
}



window.customElements.define("news-item", NewsItem);