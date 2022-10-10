const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="public/components/airbnb-333/shadow.css">
    <fieldset>
        <legend><h2>Smart Home</h2></legend>
        <nav>
            <button>Dad's AC</button>
            <button>Mom's AC</button>
            <button>August => Kasa (ACs and Heaters)</button>
        </nav>
    </fieldset>
`;

export default template;