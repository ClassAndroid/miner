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
            map: [],
            prevState: ''
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

            if (event.data.indexOf('You win.') !== -1) {
                alert(event.data);
            }

            if (event.data.indexOf('map:') !== -1) {
                if (this.state.prevState === event.data) return;

                let result = this.conversionToArray(event.data);
                this.save(result, event.data);
            }
        };

        ws.onerror = err => {
            alert(err);
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

        return assignProbabilitiesAround(result, this.state.ws);
    }

    save(result, prevState) {
        this.setState({
            map: result,
            prevState: prevState
        });
    }

    render() {
        return (
            <div>
                <div className='levels'>
                    <Button level={1} ws={this.state.ws} />
                    <Button level={2} ws={this.state.ws} />
                    <Button level={3} ws={this.state.ws} />
                    <Button level={4} ws={this.state.ws} />
                </div>
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