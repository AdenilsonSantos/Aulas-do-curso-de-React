import React, { Component } from 'react'

class Main extends Component{

    render(){

        /** 
         * Pratica de como trabalhar com o mapeamento de listas no React usando Javascript puro,
         * abordando também temas de como trabalhar com as Keys para não gerar erro de unicidade
        */

        const sociosList = [
            {
                id: 1,
                nome: "Joao",
                idade: 45
            },
            {
                id: 2,
                nome: "Joao",
                idade: 32
            }

        ]

        const mostrarSocios = sociosList.map(socio => <Socios key = {socio.id} socio = {socio}/>)

        return (
            <div style = {{padding: "50px"}}>
                {mostrarSocios}
            </div>
        )
    }
}

class Socios extends Component{

    render(){
        return(
            <div>
                <p>{this.props.socio.id}</p>
                <p>{this.props.socio.nome}</p>
                <p>{this.props.socio.idade}</p>
            </div>
        )
    }
}

export default Main