import React from 'react';
import Header from './Header';
import {Link} from 'react-router';

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
                <Link to="/about">About</Link>
                <Link to="/repos">Repos</Link>

                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>

                {this.props.children}
            </div>
        );
    }
}
