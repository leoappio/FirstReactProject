import './styles.css';
import { Component } from 'react';

export class Button extends Component {
    render(){
        const {text, whenClicked} = this.props;
        return(
            <button className = "button" onClick = {whenClicked}>
                {text}
            </button>
        );
    }
}