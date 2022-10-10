const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="public/components/orchard-333/shadow.css">
    <fieldset>
        <legend><h2>Power Panel</h2></legend>
        <nav>
            <button>panels: main, basement, cabin</button>
            <button>label breakers</button>
        </nav>
    </fieldset>
`;

export default template;