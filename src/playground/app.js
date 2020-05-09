class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        }
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }))
            }
        } catch (e) {
            //Do Nothing
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {
        console.log('Componet Will Unmount');
    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }
    handlePick() {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNumber];
        alert(option);
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter Valid Value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Option is already exit';
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }
    render() {
        const title = 'Indecision'
        const subtitle = 'Put Your Life in the hand of computers'
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                <Options options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}
IndecisionApp.defaultProps = {
    options: []
}
const Header = (props) => (
    <div>
        <h1>Testing Testing</h1>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
)

Header.defaultProps = {
    title: 'Indecision'
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && 'Please Enter Some Options to get Started!'}
            {
                props.options.map((option) =>
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />)
            }
        </div>
    )
}


const Option = (props) => (
    <div>
        {props.optionText}
        <button
            onClick={(e) => {
                props.handleDeleteOption(props.optionText)
            }}>
            Remove
        </button>
    </div>
)
class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error }))
        if(!error){
            e.target.elements.option.value = '';
        }

    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input placeholder="Enter Options" name="option" />
                    <button> Add Option </button>
                </form>
            </div>
        )
    }
}

const Action = (props) => (
    <div>
        <button disabled={!props.hasOptions} onClick={props.handlePick}> What Should I do ?</button>
    </div>
)

// const User = (props) => {
//     return (
//         <div>
//             <p>Name : {props.name}</p>
//             <p>Age : {props.age} </p>  
//         </div>
//     )
// }


ReactDOM.render(<IndecisionApp options={['Option One', 'Option Two', 'Option Three']} />, document.getElementById('app'));