import React, { Component } from "react";

class Main extends Component{

    metodoA(texto){
        console.log(texto)
    }

    render(){
        return(
            <Child evento = {this.metodoA} />
        )
    }
}


class Child extends Component{
    render(){
        return(
            <div>
                <p>-----------------Texto Filho-----------------</p>
                <button onClick = {() => {this.props.evento("Escutando melhor")}}>Clique</button>
                <input type="text"/>
            </div>
        )
    }
}

export default Main