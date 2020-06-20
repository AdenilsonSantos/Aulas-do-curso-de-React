import React, { Component } from 'react'

class Main extends Component{
    constructor(){
        super()

        this.state = {
            texto: "Esse é o texto que aparece."
        }
    }

    alterarTexto = (event) => {
        this.setState({texto: event.target.value})
    }

    render(){

        /**
         * Trabalhando com Textarea no react utilizando reação.
         */

        return (
            <div style = {{padding: "40px"}}>
                <textarea col = "30" rows = "5" 
                value = {this.state.texto} 
                onChange = {this.alterarTexto} ></textarea>
                <p>Texto: {this.state.texto}</p>
            </div>
        )
    }
}

export default Main