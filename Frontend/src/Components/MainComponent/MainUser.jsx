import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { update } from '../../libs/reducers/user/userProfil';
import { updateToken } from '../../libs/reducers/user/userToken';
import EditName from "./MainUserComponent/EditName";

const MainUser = () => {
    const [profil, setProfil] = useState(null);
    const [editName, setEditName] = useState(false)
    const userProfilState = useSelector((state) => state.userProfil)
    const userTokenState = useSelector((state) => state.userToken);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        getProfile();
    }, []);

    useEffect(() => {
        if (profil) {
            dispatch(update(profil));
        }
    }, [profil, dispatch]);

    const getProfile = async () => {
        const apiGetProfile = "http://localhost:3001/api/v1/user/profile";
        try {
            const res = await fetch(apiGetProfile, {
                method: "POST",
                headers: { Authorization: `Bearer ${userTokenState.token}`},
            });

            const data = await res.json();

            if (res.status === 200) {
                setProfil(data.body);
            } else {
                console.log("Error profile is:", data.message);
                navigate("/sign-in");
            }
        } catch (error) {
            console.error("Error connecting to the API:", error);
        }
    };

    return (
        <main className="main bg-dark">
            <div className={editName ? "header-userEdit" : "header-user"}>
            {editName ?
                <EditName func={setEditName} />
            :
                <>
                    {userProfilState && userProfilState.profil ? (
                        <h1>Welcome back<br />{`${userProfilState.profil.firstName} ${userProfilState.profil.lastName}!`}</h1>
                    ) : (
                        <h1>Welcome back<br />{`Username loading...`}</h1>
                    )}
                    <button onClick={() => setEditName(!editName)} className="edit-button">Edit Name</button>
                </>
            }
            </div>
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
        </main>
    );
};

export default MainUser;
