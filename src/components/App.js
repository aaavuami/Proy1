import React from 'react'
import Regards from './Regards'

class App extends React.Component{
    constructor(){
        super();

        this.state={
            name: 'Manuel'
        }
    }

    ChangeState(objectName){
        this.setState(objectName)
    }

    render(){
        return (
            <div>
                <Regards objectName={this.state}/>
                <h1>Hola {this.state.name}</h1>
                <h2>Mundo</h2>
                <button onClick={()=>this.ChangeState({name:'dslks'})}>Cambio</button>
            </div>
        )
    }
}

export default App;