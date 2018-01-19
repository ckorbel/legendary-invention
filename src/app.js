console.log('Apps.js is running');

const app = {
    title: 'Indecision App',
    subtitle: 'text goes here',
    options: ['One', 'Two']
};

const template = ( 
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
 
