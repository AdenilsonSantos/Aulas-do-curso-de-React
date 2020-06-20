import React, { Component } from 'react'

class Main extends Component{

    render(){
        /**
         * Trabalhando com o mecanismo interno do javascript (index) para tornar os objetos únicos
         */

        const nomes = ["Ana", "Carlos","José", "Ana"]

        const nomesList = nomes.map((nome, index) => <h4 key = {index}>{nome}</h4>)

        return (
            <div>
                {nomesList}
            </div>
        )
    }
}

export default Main