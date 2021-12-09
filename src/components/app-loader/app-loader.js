const loaderTemplate = document.createElement("template");
loaderTemplate.innerHTML = `
<style>
@import url('https://${location.host}/web-componet-news/src/components/app-loader/app-loader.css');
</style>
<div class="loader"></div>
`
class AppLoader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(loaderTemplate  .content.cloneNode(true));

    }
}
window.customElements.define("app-loader", AppLoader);
