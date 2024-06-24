import * as React from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

const MainVerify = ({ element }) => {
    const userTokenState = useSelector((state) => state.userToken);
    const token = userTokenState.token

    if (!token) {
        return <Navigate to="/sign-in" replace />;
    }

    return element;
}

export default MainVerify