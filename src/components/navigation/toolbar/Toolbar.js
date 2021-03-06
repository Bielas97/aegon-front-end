import React from 'react';
import logo from '../../../assets/logo.png';

import NavigationItems from "../navigation-items/NavigationItems";

const toolbar = props => {

    const icon = (
        <span>
                <img src={logo} height="45" width="45" alt="text here"/>
        </span>
    );

    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <a href="/" className="navbar-brand">{icon}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <NavigationItems isAuth={props.isAuth}/>
            </div>
        </nav>
    );
};

export default toolbar;
