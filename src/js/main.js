import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../scss/main.scss';
import Board from './components/board';
import Button from './components/button';
import assignProbabilitiesAround from './autoResolution/assignProbabilitiesAround';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ws: null,
            map: []
        }
    }

    componentDidMount() {
        this.connect();
    }

    connect () {
        const ws = new WebSocket("wss://hometask.eg1236.com/game1/");

        ws.onopen = () => {
            this.setState({ws: ws});
        };

        ws.onmessage = (event) => {
            console.log(`[message] newSession: ${event.data}`);

            if (event.data.indexOf('map:') !== -1) {
                let result = this.conversionToArray(event.data);
                this.save(result);
            }
        };

        ws.onerror = err => {
            ws.close();
        };
    };

    conversionToArray (str) {
        let arr = str.split('\n');
        arr.shift();
        let matrix = arr.map((row) => row.split(''));
        let result = matrix.map((row, y) =>
                row.map((element, x) => {
                    let status = (isFinite(element) || element === '*') ? 'open' : 'close';
                    let possibility = isFinite(element)? 0 : null;
                    return {
                        possibility: possibility,
                        x: x,
                        y: y,
                        value: element,
                        status: status
                    }
                })
            ).filter((arr) => arr.length);

        return assignProbabilitiesAround(result);
    }

    save(result) {
        this.setState({map: result});
    }

    render() {
        return (
            <div>
                <Button level={1} ws={this.state.ws} />
                <Button level={2} ws={this.state.ws} />
                <Button level={3} ws={this.state.ws} />
                <Button level={4} ws={this.state.ws} />
                <div>
                    <Board ws={this.state.ws} map={this.state.map} />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Game />,
document.getElementById('root')
);