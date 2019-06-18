import React, { Component } from 'react';

export default class Footer extends Component{

    
    render(){
        let { types, active } = this.props;
        let typesURLS = types.map( (value, idx) => {
            if(value === active){
                return (<span key={idx} onClick={() => this.props.handleClick(value)}>{value} {idx < types.length - 1 ? ',' : '' } </span>)
            }
            return (<a href="javascript:void(0)" key={idx} onClick={() => this.props.handleClick(value)}>{value} {idx < types.length - 1 ? ',' : '' } </a>)
        })
        return(
            <div>
                {typesURLS}
            </div>
        )
    }
}