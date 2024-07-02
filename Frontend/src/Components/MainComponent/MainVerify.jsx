import * as React from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

const MainVerify = ({ element }) => {
    const userTokenState = useSelector((state) => state.userToken);
    const tokenState = userTokenState.token
    const tokenLStorage = localStorage.getItem('token')

    if (!tokenState && !tokenLStorage) {
        return <Navigate to="/sign-in" replace />;
    }

    return element;
}

export default MainVerify