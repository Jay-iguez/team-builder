import { Outlet, Navigate } from "react-router-dom";

const Protected = ({tokenName}) => {
    return (
        tokenName ? <Outlet /> : <Navigate to={'/login'} />
    )
}

export default Protected