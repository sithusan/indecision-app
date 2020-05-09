import React from 'react';
import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {
    state = {
        options: this.props.options,
        selectedOption: undefined
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
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }
    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }
    handlePick = () => {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNumber];
        this.setState(() => ({ selectedOption: option }))
    }
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter Valid Value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Option is already exit';
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }
    handleDeleteOption = (optionToRemove) => {
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
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                    <div className="widget">
                        <Options options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption handleAddOption={this.handleAddOption} />
                        <OptionModal
                            selectedOption={this.state.selectedOption}
                            handleClearSelectedOption={this.handleClearSelectedOption}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
IndecisionApp.defaultProps = {
    options: []
}
export default IndecisionApp;