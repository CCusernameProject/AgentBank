import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { update } from '../../libs/reducers/user/userToken'

const MainSignIn = () => {
    const apiLogin = "http://localhost:3001/api/v1/user/login";
    const [connectAccepted, setConnectAccepted] = useState(false);
    const [persistLogin, setPersistLogin] = useState(false);
    const [error, setError] = useState(null)
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const connectUser = async () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        try {
            const res = await fetch(apiLogin, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (res.status === 200) {
                console.log("Login successful:", data);
                dispatch(update(data.body.token))
                if(persistLogin){
                    localStorage.setItem('token', data.body.token)
                    console.log(localStorage)
                }
                setConnectAccepted(true)
            } else {
                setError("Email or Password is invalid !")
            }
        } catch (error) {
            setError("An error has occurred. Please try again !")
        }
    };

    useEffect(() => {
        if (connectAccepted) {
            navigate("/user");
        }
    }, [connectAccepted, navigate]);

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={(e) => { e.preventDefault(); connectUser(); }}>
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input onClick={() => setPersistLogin(!persistLogin)} type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <p className="error-message2">{error}</p>
                    <button type="submit" className="sign-in-button">
                        Sign In
                    </button>
                </form>
            </section>
        </main>
    );
};

export default MainSignIn;
