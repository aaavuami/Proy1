import React from 'react'

class Regards extends React.Component{

    constructor(props){
        super();
    }

    render(){
        return(
            <div>
                <h1>Hola</h1>
                <h1>Nombre {this.props.objectName.name}</h1>
            </div>
        )

    }
}


export default Regards;