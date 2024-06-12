import { Link } from 'react-router-dom'
import LogoHeader from '../../assets/img/argentBankLogo.png'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { update } from '../../libs/reducers/user'

const Header = () => {
    const userState = useSelector((state) => state.user);
    const dispatch = useDispatch()
    return (
        <header className='header'>
            <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img className="main-nav-logo-image" src={LogoHeader} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <Link className="main-nav-item" to="/sign-in">
                    <i className="fa fa-user-circle"></i>
                    {/* {userState.firstName */}
                    Sign In
                </Link>
            </div>
            {/* <button onClick={() => dispatch(update("Someone else"))}>Click</button> */}
            </nav>
        </header>
    )
}

export default Header