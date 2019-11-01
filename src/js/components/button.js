import React, {Component} from 'react';

class Button extends Component {
    openMap () {
        let level = 'new ' + this.props.level;

        this.props.ws.send(level);
        this.props.ws.send('map');
    };

    render () {
        return (
            <button className='button' onClick={() => this.openMap()}>Level {this.props.level}</button>
        );
    }
}

export default Button;