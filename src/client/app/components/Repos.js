import React from 'react';

export default class Repos extends React.Component {
    constructor(){
        super()
    }

    render(){
        console.log(this.props.params);
        return (
            <div>
                <div>user name {this.props.params.userName}</div>
                <div>user name {this.props.params.repo}</div>
                <div>Repos</div>
            </div>

        );
    }

}