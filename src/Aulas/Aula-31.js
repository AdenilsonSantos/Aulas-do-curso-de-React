import React, { Component } from 'react'

class Main extends Component{

    /**
     * Entandendo um pouco ciclo de vidade componente React
     */

    constructor(){
        super()

        console.log('Constructor')
    }

    componentDidMount(){
        console.log('Montando')
    }

    render(){
        console.log('Render')
        return(
            <div>

            </div>
        )
    }
}

export default Main