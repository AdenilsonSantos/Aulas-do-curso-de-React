import React, { Component } from 'react'

class Main extends Component {

    constructor() {
        super()

        this.state = {
            item: "item02"
        }
    }

    alterarOpcao = (event) => {
        this.setState({item: event.target.value})
    }

    render() {

        /**
         * Aplicando o React em campos de seleção
         */

        return (
            <div style={{padding:"40px"}} >
                <select value={this.state.item} onChange = {this.alterarOpcao}>
                    <option>item01</option>
                    <option>item02</option>
                    <option>item03</option>
                </select>
                <p>Item: {this.state.item}</p>
            </div>
        )
    }
}

export default Main