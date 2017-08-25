import React, {Component} from 'react'
import Header from '../../components/header'
import * as e from './elements'
import Cards from 'react-credit-cards'

class Donations extends Component {

    state = {
        frequency: 0, //0: One Time, 1:Monthly, 2:Yearly
        currency: 0, //0: USD, 1:EUR,
        amount: 0,
        step: 1, //1:Amount, 2:Details
        number: '',
        name: '',
        exp: '',
        cvc: '',
        focused: ''
    }

    getFrequencyState(type) {
        return this.state.frequency === type
    }

    setFrequencyState(type) {
        this.setState({frequency: type})
    }
    setCurrencyState(type) {
        this.setState({currency: type})
    }
    getCurrencyState(type) {
        return this.state.currency === type
    }
    setStepState(_step) {
        this.setState({step: _step})
    }
    getStepState(_step) {
        return this.state.step === _step
    }

    handleInputFocus = (e) => {
        const target = e.target;

        this.setState({focused: target.name});
    };

    handleInputChange = (e) => {
        const target = e.target;

        if (target.name === 'number') {
            this.setState({
                [target.name]: target
                    .value
                    .replace(/ /g, '')
            });
        } else if (target.name === 'expiry') {
            this.setState({
                [target.name]: target
                    .value
                    .replace(/ |\//g, '')
            });
        } else {
            this.setState({
                [target.name]: target.value
            });
        }
    };

    handleCallback(type, isValid) {
       // console.log(type, isValid); //eslint-disable-line no-console
    }

    render() {
        const {name, number, expiry, cvc, focused} = this.state;
        return (
            <e.Container>
                <e.LeftPanel>
                    <p>
                        With your<strong> donation</strong>, the critical back-end infrastructure may be scaled to
                        unite the world’s scientific data repos in one open access database, to help
                        scientists push the boundaries of human knowledge, and solve the most urgent
                        problems of our age.
                    </p>
                </e.LeftPanel>
                <e.Circle>
                    {this.state.step === 1 && <div>
                        <h2>DONATION AMOUNT</h2>
                        <div
                            style={{
                            paddingLeft: '80px'
                        }}>
                            <p>Frequency</p>
                            <e.Button
                                onClick={() => this.setFrequencyState(0)}
                                selected={this.getFrequencyState(0)}>One Time</e.Button>
                            <e.Button
                                center
                                onClick={() => this.setFrequencyState(1)}
                                selected={this.getFrequencyState(1)}>Monthly</e.Button>
                            <e.Button
                                onClick={() => this.setFrequencyState(2)}
                                selected={this.getFrequencyState(2)}>Yearly</e.Button>
                        </div>
                        <div
                            style={{
                            paddingLeft: '80px'
                        }}>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>
                                            <p>Currency</p>
                                        </th>
                                        <th>
                                            <p>Amount</p>
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <e.Button
                                                onClick={() => this.setCurrencyState(0)}
                                                selected={this.getCurrencyState(0)}>$</e.Button>
                                            <e.Button
                                                center
                                                onClick={() => this.setCurrencyState(1)}
                                                selected={this.getCurrencyState(1)}>€</e.Button>
                                        </td>
                                        <td><input type="number" placeholder="Enter amount"/></td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
}

                    {this.state.step === 2 && <div>
                        <h2>ACCOUNT DETAILS</h2>
                        <div
                            style={{
                            paddingLeft: '80px'
                        }}>
                            <Cards
                                number={number}
                                name={name}
                                expiry={expiry}
                                cvc={cvc}
                                focused={focused}
                                callback={this.handleCallback}/>
                            <form>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>
                                                <input
                                                    style={{
                                                    marginRight: '5px'
                                                }}
                                                    type="tel"
                                                    name="number"
                                                    placeholder="Card Number"
                                                    onKeyUp={this.handleInputChange}
                                                    onFocus={this.handleInputFocus}/>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Name"
                                                    onKeyUp={this.handleInputChange}
                                                    onFocus={this.handleInputFocus}/>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th>
                                                <input
                                                    style={{
                                                    marginRight: '5px'
                                                }}
                                                    type="tel"
                                                    name="expiry"
                                                    placeholder="Valid Exp. Date"
                                                    onKeyUp={this.handleInputChange}
                                                    onFocus={this.handleInputFocus}/>
                                                <input
                                                    type="tel"
                                                    name="cvc"
                                                    placeholder="CVC"
                                                    onKeyUp={this.handleInputChange}
                                                    onFocus={this.handleInputFocus}/>
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                                <e.Button
                                    style={{
                                    margin: '3px'
                                }}
                                    selected>Send</e.Button>
                            </form>

                        </div>
                    </div>
}

                    <e.nav>
                        <table>
                            <tbody>
                                <tr>
                                    <th>
                                        <e.Button onClick={() => this.setStepState(1)} selected={this.getStepState(1)}>1</e.Button>
                                    </th>
                                    <th>
                                        <e.Button onClick={() => this.setStepState(2)} selected={this.getStepState(2)}>2</e.Button>
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        <span>Amount</span>
                                    </td>
                                    <td>
                                        <span>Details</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </e.nav>
                </e.Circle>

                <Header/>
            </e.Container>
        )
    }

}

export default Donations