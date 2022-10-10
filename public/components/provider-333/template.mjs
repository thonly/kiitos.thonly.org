const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="public/components/provider-333/shadow.css">
    <select onchange="this.getRootNode().host.router(this)">
        <option>Treehouse</option>
        <option selected>Cabin</option>
        <option>Orchard</option>
        <option>Airbnb</option>
    </select>
    <slot></slot>
`;

export default template;