import React, {Component} from 'react';
import Square from './square';

function GenerateBoard(props) {
    const arr = props.map;
    const Board = arr.map((elements, y, arr) => {
            return <div key={y} className='row'>
                {elements.map((element, x) =>
                    <Square map={arr} ws={props.ws} y={y} x={x} key={x + 'y' + y} element={element} />
                )}
            </div>
        }
    );
    return (
        <div>{Board}</div>
    );
}

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ws: null,
            map: []
        }
    }

    componentWillReceiveProps (props) {
        this.setState({
            ws: this.props.ws,
            map: props.map
        });
    }

    render() {
        return (
            <div>
                <GenerateBoard ws={this.state.ws} map={this.state.map} />
            </div>
        );
    }
}

export default Board;