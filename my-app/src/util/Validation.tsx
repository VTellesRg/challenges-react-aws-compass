// import React from "react";
// import { Link } from 'react-router-dom';

export interface ValidateProps {
        name: string;
        email: string;
        username: string;
        birth: string;
        password: string;
        confirmPassword: string;
}

export function validateName(name: string) {

    const nameRegex =  RegExp(/^[a-zA-Z ]{2,30}$/);
    return name.match(nameRegex) !== null;

}

export function validateEmail(email: string) {

    const emailRegex = RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);
    return email.match(emailRegex) !== null;
    
}

export function validatePassword (password: string) {

    const passwordRegex = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/);
    return password.match(passwordRegex) !== null;
  
}