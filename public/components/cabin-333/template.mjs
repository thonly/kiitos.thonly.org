const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="public/components/cabin-333/shadow.css">
    <fieldset>
        <legend><h2>Intranet</h2></legend>
        <nav>
            <button onclick="this.getRootNode().host.startTimer(this)">Start Timer</button>
            <button onclick="this.getRootNode().host.startRouter(this, 'reset')">Reset Router</button>
            <button onclick="this.getRootNode().host.startRouter(this, 'rescan')">Rescan for Devices</button>
            <button onclick="this.getRootNode().host.startRouter(this, 'restart')">Restart Broadband</button>
        </nav>
    </fieldset>
`;

export default template;