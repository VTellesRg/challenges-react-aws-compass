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

    if(location.state){
        user = location.state.user as UserType;
    }
    const isAuthenticated = user !== null;

    if (isAuthenticated) {
        return children;
    }
    return <Navigate to="/login"/>
}

export const VerifyAuth = async ({ email, pass }: VerifyProps) => {
    let url = 'https://my-api-nodejs.vercel.app/api/v1/user';
    try {
        let response = await fetch(url).then(res => res.json()).catch(err => console.log(err));
        if (Object.keys(response).length === 1){
            let usersArray = response.users;
            //console.log(usersArray);
            let res = usersArray.find((e: { email: string; password: string; }) => {
               return e.email === email && e.password === pass;
            });
            return res;
        }
    }
    catch (e) {
        console.log("error", e)
    }
}