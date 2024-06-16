import { useState } from "react"
import { Link } from "react-router-dom"

const MainSignIn = () => {
    const [loginAccepted, setLoginAccepted] = useState(false)
    const apiLogin = "http://localhost:3001/api/v1/user/login"

    const connectUser = async () => {
        const email = "tony@stark.com"
        const password = "$2b$12$y.QC5WzpA/J3dW.fswkPKecgjySF58raC7el/OLQC2njXhKv/cJma"
        try {
            const res = await fetch(apiLogin, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (res.status === 200) {
                setLoginAccepted(true);
                console.log("Login successful:", data);
            } else {
                console.log("Login failed:", data.message);
            }
        } catch (error) {
            console.error("Error connecting to the API:", error);
        }
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <Link onClick={() => connectUser()} to={loginAccepted ? "/user" : "/sign-in"} className="sign-in-button">
                        Sign In
                    </Link>
                </form>
            </section>
        </main>
    )
}

export default MainSignIn