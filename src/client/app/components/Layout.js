import React from 'react';
import Header from './Header';

export default class Layout extends React.Component {

    constructor() {
        super();
        this.state = {
            title: "welcome from state"
        }
    }

    changeTitle(title) {
        this.setState({title});
    }

    render() {
        return (
            <div>
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
            </div>

        );
    }
}
