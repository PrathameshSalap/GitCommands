import React from 'react';
export class ParentClass extends React.Component{
    handleChildClass=()=>{
        this.props.history.push("/parent/child")
    }
    render(){
        return(
            <div>
            <div>
                This is Parent Class
            </div>
            <button onClick={this.handleChildClass}>Click Here for Child Routing</button>
            </div>

            ) 
        } 
}