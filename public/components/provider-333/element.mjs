import template from './template.mjs';

class Provider333 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.shadowRoot.querySelector("slot").assignedElements().find(component => component.tagName === "CABIN-333").style.display = "block";
    }

    router(select) {
        this.shadowRoot.querySelector("slot").assignedElements().forEach(component => component.style.display = "none");
        this.shadowRoot.querySelector("slot").assignedElements().find(component => component.tagName === select.value.toUpperCase() + "-333").style.display = "block";
    }
}

customElements.define("provider-333", Provider333);