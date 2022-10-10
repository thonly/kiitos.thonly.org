import template from './template.mjs';

/* TODO: 
- research how to communicate with smart devices connected to intranet
*/

class Cabin333 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async startRouter(button, action) {
        button.disabled = true;
        const response = await fetch('https://kiitos.333.eco/cabin', { 
            headers: { 'Content-Type': 'application/json' },
            method: 'POST', 
            body: JSON.stringify({ action }) 
        });
        
        const data = await response.json();
        if (data.status === 'success') {
            button.disabled = false;
            console.info("Successful!");
        }
    }
    
    startTimer(button) {
        button.disabled = true;
        setInterval(() => {
            const date = new Date()
            console.info(date.toLocaleString());
            if (date.getDay() === 4) this.startRouter(this.shadowRoot.querySelector('button:first-of-type'), "reset");
        }, 1000*60*60*24);
    }
}

customElements.define("cabin-333", Cabin333);