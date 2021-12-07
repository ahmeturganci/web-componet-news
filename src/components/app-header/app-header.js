const headerTemplate = document.createElement("template");
headerTemplate.innerHTML = `
<style>
@import url('http://${location.host}/src/components/app-header/app-header.css')
</style>
<header>
news app | ahmeturganci
</header>
`;
class AppHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(headerTemplate.content.cloneNode(true));
  }
}

window.customElements.define("app-header", AppHeader);