import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoHeader from '../../assets/img/argentBankLogo.png';

const Header = () => {
    const userProfilState = useSelector((state) => state.userProfil);

    return (
        <header className='header'>
            <nav className="main-nav">
                <Link className="main-nav-logo" to="/">
                    <img className="main-nav-logo-image" src={LogoHeader} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    <Link className="main-nav-item" to={userProfilState && userProfilState.profil ? "/user" : "/sign-in"}>
                        <i className="fa fa-user-circle"></i>
                        {userProfilState && userProfilState.profil ? (
                            `${userProfilState.profil.firstName} ${userProfilState.profil.lastName}`
                        ) : (
                            "Sign In"
                        )}
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
