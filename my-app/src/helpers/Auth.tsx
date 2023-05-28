import { Navigate, useLocation } from 'react-router-dom';
import { UserType } from '../types/type';
// authentication functions
type Props = {
    children: JSX.Element
}

type VerifyProps = {
    email: string
    pass: string
}

export const Auth = ({ children }: Props) => {
    const location = useLocation();
    let user = null;

    if (location.state) {
        user = location.state.user as UserType;
    }
    const isAuthenticated = user !== null;

    if (isAuthenticated) {
        return children;
    }
    return <Navigate to="/login" />
}

export const VerifyAuth = async ({ email, pass }: VerifyProps) => {
    let url = 'http://localhost:3001/api/v1/users/login';
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, password: pass })
    };

    try {
        let response = await fetch(url, requestOptions)
            .then(response => response.json());
        response.email = email;

        return response;
    }

    catch (e) {
        console.log("error", e)
    }
}

export const RegisterUser = async (user: UserType) => {
    let url = 'http://localhost:3001/api/v1/users';
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: user.email,
            password: user.password,
            name: user.name,
            user: user.user,
            birth: user.birthdate,
            profile_photo: user.profile_photo ? user.profile_photo : '',
        })

    };

    try {
        let response = await fetch(url, requestOptions)
            .then(response => response.json());
        console.log(response);
        
        return response;
    }

    catch (e) {
        console.log("error", e)
    }
}