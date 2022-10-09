import template from './template.mjs';

class Logo333 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.onclick = () => document.location.href = "https://thonly.org";
    }
}

customElements.define("logo-333", Logo333);