import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { update } from '../../../libs/reducers/user/userProfil';

const EditName = (props) => {
    const [changeProfil, setChangeProfil] = useState(null);
    const [error, setError] = useState(null)
    const apiChangeProfile = "http://localhost:3001/api/v1/user/profile"
    const userTokenState = useSelector((state) => state.userToken);
    const userProfilState = useSelector((state) => state.userProfil)
    const dispatch = useDispatch();
    
    const saveEditProfil = async () => {
        const username = document.getElementById('Username').value
        if(username === '') {
            setError("Field cannot be empty !")
        } else if(username === userProfilState.profil.userName) {
            setError(`Your username is already ${username}`)
            document.getElementById('Username').value = ''
        } else {
            try {
                const res = await fetch(apiChangeProfile, {
                    method: "PUT",
                    headers: { Authorization: `Bearer ${userTokenState.token}`, "Content-Type": "application/json"},
                    body: JSON.stringify({"userName": username})
                });
    
                const data = await res.json();
    
                if (res.status === 200) {
                    setChangeProfil(data.body);
                } else {
                    cancelEditName()
                    navigate("/sign-in");
                }
            } catch (error) {
                console.error("Error connecting to the API:", error);
            }
        }
    }

    const cancelEditName = () => {
        props.func(false)
    }

    useEffect(() => {
        if (changeProfil) {
            dispatch(update(changeProfil));
            document.getElementById('Username').value = ''
            cancelEditName()
        }
    }, [changeProfil]);

    return (
        <div className="edit-profil-container">
            <h1>Edit user info</h1>
            <div className="edit-profil-input-container">
                <label className="edit-profil-text" htmlFor="Username">User name:</label>
                <input className="edit-profil-input" id="Username" type="text" placeholder={userProfilState.profil.userName} />
            </div>
            <div className="edit-profil-input-container">
                <label className="edit-profil-text" htmlFor="Firstname">First name:</label>
                <input disabled className="edit-profil-input" id="Firstname" type="text" placeholder={userProfilState.profil.firstName} />
            </div>
            <div className="edit-profil-input-container">
                <label className="edit-profil-text" htmlFor="Lastname">Last name:</label>
                <input disabled className="edit-profil-input" id="Lastname" type="text" placeholder={userProfilState.profil.lastName} />
            </div>
            { error ?
                <p className="error-message">{error}</p>
            :
                <></>
            }
            <div className="edit-profil-button-container">
                <button onClick={() => saveEditProfil()} className="edit-profil-button">Save</button>
                <button onClick={() => cancelEditName()} className="edit-profil-button">Cancel</button>
            </div>
        </div>
    )
}

export default EditName