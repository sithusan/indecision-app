class VisibillityToggle extends React.Component{
    constructor(props){
        super(props);
        this.showHideDetail = this.showHideDetail.bind(this);
        this.state = {
            checkToShow : false
        }
    }
    showHideDetail(){
        this.setState((prevState) => {
            return{
                checkToShow : !prevState.checkToShow
            }
        })
    }
    render(){
        return(
            <div>
                <h1>Visibility Toogle</h1>
                <button onClick={this.showHideDetail}>{ this.state.checkToShow ? 'Hide Deatil' : 'Show Deatil'}</button>
                <p> { this.state.checkToShow ? 'There are Deatils' : ''} </p>
            </div>
        )
    }
}

ReactDOM.render(<VisibillityToggle/>,document.getElementById('app'));

// let checkToShow = false;
// const showDetail = () => {
//      checkToShow = !checkToShow;
//      render();
// }
// const appRoot = document.getElementById('app');

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={showDetail}>{ checkToShow ? 'Hide Deatil' : 'Show Detail'}</button>
//             <p>{checkToShow === true && 'There are the Deatils'}</p>
//         </div>
//     )
    
//     ReactDOM.render(template, appRoot);

// }
// render();
