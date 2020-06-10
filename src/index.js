import React from 'react'
import ReactDom from 'react-dom'

class App extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div>
                <h1>Hola</h1>
                <h2>Mundo</h2>
            </div>
        )
    }
}

ReactDom.render(
    <App/>,
    document.querySelector('#root')
)
