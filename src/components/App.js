import React from 'react';
import Map from './Map/Map.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { registerNumber } from '../actions/baseball';


class App extends React.Component {
    componentDidMount() {
        console.log(this.state);
    }
    
    handleChange(e) {
        const { gameNumber } = this.props;
        const regPosition = /[0-9]$/g;
        const position = regPosition.exec(e.target.id)[0];
        const value = e.target.value;
        gameNumber[position] = value;
    }
    sendNumber() {
        const { registerNumber, gameNumber } = this.props;
        registerNumber(gameNumber);
    }
    render() {
        return (
            <div>
                <h1>This is HOT!dfs</h1>
                <Map />
                <div className="baseball_input_area">
                    <input type="number" min="0" max="9" className="baseball_input" id="baseball_input0" onChange={(e) => this.handleChange(e)}/>
                    <input type="number" min="0" max="9" className="baseball_input" id="baseball_input1" onChange={(e) => this.handleChange(e)}/>
                    <input type="number" min="0" max="9" className="baseball_input" id="baseball_input2" onChange={(e) => this.handleChange(e)}/>
                </div>
                <div className="baseball_btn_area">
                    <button type="submit" className="baseball_btn" onClick={() => this.sendNumber()}>공격하기</button>
                </div>
                <div className="baseball_record_area">
                    <ul className="baseball_record_list">
                        <li className="baseball_record_item">
                            <span className="baseball_attack">3, 5, 7</span>
                            <span className="baseball_match">1s 1b</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    gameNumber: state.baseball.gameNumber
})

const mapDispatchToProps = (dispatch) => ({
    registerNumber: bindActionCreators(registerNumber, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);