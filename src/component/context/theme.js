import React from 'react';
export const ThemeContext = React.createContext();
class Theme extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'rgb(18, 8, 81,0.8)',
            toggle: this.toglemode
        }
    }
    componentDidMount(e) {
        var divs = document.querySelectorAll('input'), i;

        for (i = 0; i < divs.length; ++i) {
            divs[i].addEventListener('click', this.toglemode);
        }
       

    }
    toglemode = (e) =>{
        let color = e.target.value;
        console.log(color);
        this.setState({ mode: this.state.mode=color})
    } 
    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}
export default Theme;
