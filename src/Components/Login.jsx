import { useState, useEffect } from 'react';

function Login(props) {
    return (
        <form action='/login' method='POST' className="login">
            <p>login</p>
            <div>
                <label htmlFor="username">username</label>
                <input type="text" name="username" id="username" required/>
            </div>
            <div>
                <label htmlFor="password">password</label>
                <input type="password" name="password" id="password" required/>
            </div>
            <button type="submit">login</button>
            <p>don't have an account? <a href="/register">Register</a></p>
        </form>
    )
}

export default Login;