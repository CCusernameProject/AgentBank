import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import LogoHeader from '../../assets/img/argentBankLogo.png';
import { update } from '../../libs/reducers/user/userProfil';
import { updateToken } from '../../libs/reducers/user/userToken';

const Header = () => {
    const userProfilState = useSelector((state) => state.userProfil);
    const userTokenState = useSelector((state) => state.userToken);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const disconnectUser = () => {
        console.log("Okay")
        dispatch(update(null))
        dispatch(updateToken(null))
        localStorage.clear()
        navigate("/sign-in");
    }

    return (
        <header className='header'>
            <nav className="main-nav">
                <Link className="main-nav-logo" to="/">
                    <img className="main-nav-logo-image" src={LogoHeader} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div className={userProfilState && userProfilState.profil ? "main-nav-content" : ""}>
                    <Link className="main-nav-item" to={userProfilState && userProfilState.profil ? "/user" : "/sign-in"}>
                        <i className="fa fa-user-circle"></i>
                        {userProfilState && userProfilState.profil ? (
                            <>
                                <p>{`${userProfilState.profil.firstName} ${userProfilState.profil.lastName}`}</p>
                            </>
                        ) : (
                            "Sign In"
                        )}
                    </Link>
                    {userProfilState && userProfilState.profil ?
                        <button onClick={() => disconnectUser()} className="disconnect-button">Disconnect</button>
                    :
                        <></>
                    }
                </div>
            </nav>
        </header>
    );
};

export default Header;
