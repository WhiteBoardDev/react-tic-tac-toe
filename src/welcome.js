import React from 'react';
import { Link } from 'react-router-dom'
import Auth from './auth'
export default class Welcome extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            auth: Auth.isLoggedIn() ? "Logged in" : " Not logged in",
        };
    }

    render() {
        return <div>
            <h2>Hello world! welcome to tic tac toe</h2>
            <Link to="/game">START GAME </Link>
            <br/> Logged In: { this.state.auth }
            </div>
    }
}
