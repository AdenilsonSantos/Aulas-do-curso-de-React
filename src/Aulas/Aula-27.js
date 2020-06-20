import React, { Component } from'react'

class Main extends Component{

    constructor(){
        super()

        this.state = {
            nome: "João"
        }
    }

    alterarNome = (event) => {
        this.setState({nome: event.target.value})
    }

    render(){

        /**
         * Utilizando o state e fazendo ligações entre as propriedades.
        */

        return (
            <div style = {{padding: "40px"}}>
                <input type="text"
                value = {this.state.nome}
                onChange = {this.alterarNome}/>
                <p>Valor: {this.state.nome}</p>
            </div>
        )
    }
}

export default Main