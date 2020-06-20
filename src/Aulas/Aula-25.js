import React, { Component } from 'react'

class Main extends Component{

    render(){

        /**
         * Inserindo CSS no React com suas diversas formas.
         */

        const estilo = {
            color: 'red', fontSize: '45px'
        }

        return (
            <div>
                <p style = {estilo}>Estilo</p>
                <p style = {{color:'blue', fontSize: 45}}>Estilo</p>
            </div>
        )
    }
}

export default Main