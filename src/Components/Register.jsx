import { useState, useEffect } from 'react';

function Register(props) {
    return (
        <form action='/register' method='POST' className="register">
            <p>register</p>
            <div>
                <label htmlFor="display_name">display name</label>
                <input type="text" name="display_name" id="display_name" required/>
            </div>
            <div>
                <label htmlFor="username">username</label>
                <input type="text" name="username" id="username" required/>
            </div>
            <div>
                <label htmlFor="email">email</label>
                <input type="email" name="email" id="email" required/>
            </div>
            <div>
                <label htmlFor="password">password</label>
                <input type="password" name="password" id="password" required/>
            </div>
            <button type="submit">register</button>
            <p>already have an account? <a href="/login">Log in</a></p>
        </form>
    )
}

export default Register;