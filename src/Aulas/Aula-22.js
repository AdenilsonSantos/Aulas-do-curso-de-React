import React, { Component } from 'react'

class Main extends Component{

    render(){
        /**
         * Aprendendo a trabalhar com listas de objetos com React
         */
        const noticias = [
            {
                tituto: "Noticia 01",
                texto: "Texto da noticia 01",
                autor: "Autor da noticia 01"
            },
            {
                tituto: "Noticia 02",
                texto: "Texto da noticia 02",
                autor: "Autor da noticia 02"
            },
            {
                tituto: "Noticia 03",
                texto: "Texto da noticia 03",
                autor: "Autor da noticia 03"
            }
        ]

        const noticiasList = noticias.map(noticia => <Noticia n = {noticia}/>)

        return (
            <div>
                <h3>Notícias</h3>
                <hr/>
                {noticiasList}
            </div>
        )
    }
}


class Noticia extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <h3>{this.props.n.tituto}</h3>
                <p>{this.props.n.texto}</p>
                <p><i>{this.props.n.autor}</i></p>
            </div>
        )
    }
}

export default Main