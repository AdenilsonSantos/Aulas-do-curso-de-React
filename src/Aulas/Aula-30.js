import React, { Component } from 'react'

class Main extends Component{

    constructor() {
        super()

        this.state = {
            username: '',
            password: ''
        }
    }

    enviarUsername = event => {
        this.setState({username: event.target.value}) 
    }

    enviarPassword = event => {
        this.setState({password: event.target.value})
    }

    submeter = event => {
        console.log(this.state.username)
        console.log(this.state.password)
        event.preventDefault()
    }

    render(){
        return (
            <div style = {{padding: "40px"}}>
                <form onSubmit = {this.submeter}>
                    <input
                        type = "text"
                        value = {this.state.username}
                        placeholder = "username" 
                        onChange = {this.enviarUsername} />
                    <input
                        type = "password"
                        value = {this.state.password}
                        placeholder = "password"
                        onChange = {this.enviarPassword} />
                    <br />
                    <input type = "submit" value = {`Entrar`} />
                </form>
            </div>
        )
    }
}

export default Main