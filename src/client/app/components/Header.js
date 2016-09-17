import React from 'react';
import Title from './Titile';

export default class Header extends React.Component {
    constructor(){
        super()
    }

    handleChange(e) {
        this.props.changeTitle(e.target.value);
    }

    render(){
        return (
            <div>
                <Title title={this.props.title}/>
                <input value={this.props.title} onChange={this.handleChange.bind(this)} type="text"/>
            </div>
        );
    }

}