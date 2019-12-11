import React from 'react';
export class MainClass extends React.Component{
    handleChildClass=()=>{
        this.props.history.push("/parent")
    }
    render(){
        return(
            <div>
            <div>
                Main Class
            </div>
            <button onClick={this.handleChildClass}>Click Here for Parent Class</button>
            </div>

            ) 
        } 
}