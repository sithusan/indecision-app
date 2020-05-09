console.log('App.JS is running');

// const template = <p> This is JSX from app.js</p>;

const app = {
    title: 'This is Title',
    subtitle: 'This is SubTitle',
    options: [],
}
const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted');
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
}
const onRemoveAll = () => {
    app.options = [];
    render();
}
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}
const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle && app.subtitle} </p>
            <p>{app.options.length > 0 ? 'Here are the options' :'No Options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}> What Should I do ?</button>
            <button onClick={onRemoveAll}> Remove All </button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <p> {app.options.length}</p>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Options</button>
            </form>
        </div>
    );
    ReactDOM.render(template,appRoot);

}

render();

