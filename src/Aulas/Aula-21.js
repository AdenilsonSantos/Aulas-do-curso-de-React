import React, { Component } from 'react'


class Main extends Component{


    render(){
        const array = ['joao', 'Maria', 'Jose']

    const mapArray = array.map((a) => <h4>Bom dia, {a}</h4>)
        return(
            <div>
                {mapArray}
            </div>
        )
    }
}

export default Main