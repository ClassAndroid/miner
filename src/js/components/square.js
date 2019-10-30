import React, {Component} from 'react';

class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props.element,
            ws: this.props.ws,
            map: this.props.map
        }
    }

    componentWillReceiveProps (props) {
        this.setState({
            ...props.element,
            map: props.map
        });
    }

    OpenSquare () {
        if (this.state.possibility === 100) return;

        let command = 'open ' + this.state.x + ' ' + this.state.y;

        this.state.ws.send(command);
        this.state.ws.send('map');
    }

    render() {
        let id = this.state.x + 'y' + this.state.y;
        let className = this.props.element.value === 'F' ? 'square red' : 'square';

        return (
            <div onClick={() => this.OpenSquare()} id={id} className={className}>{this.props.element.value}</div>
        )
    }
}

export default (Square);