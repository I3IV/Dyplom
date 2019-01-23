import React from 'react';

import './header.css';
import Logo from '../logo';
import NavigationList from '../navigation-list';


export default class Header extends React.Component {
    componentWillReceiveProps(){
        this.forceUpdate()
    }
    render() {
        console.log('elo', this.props.user)
        return (
            <div className="header">
                <Logo />
                <NavigationList
                    user={this.props.user}
                    handleClose={this.props.handleClose}/>
            </div>
        );
    }
}