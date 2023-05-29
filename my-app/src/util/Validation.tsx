// import React from "react";
// import { Link } from 'react-router-dom';

export interface validateProps {
    name: string;
    email: string;
    username: string;
    birth: string;
    password: string;
    confirmPassword: string;
}

export function validateName(name: string) {

    const nameRegex =  RegExp(/^[a-zA-Z ]{2,30}$/);
    return name.match(nameRegex) === null;

}

export function validateUsername(username: string) {

    const usernameRegex = RegExp(/^[a-zA-Z0-9_]{4,15}$/);
    return username.match(usernameRegex) === null;

}

export function validateBirth(birth: string) {

    const birthRegex = RegExp(/^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])/);
    return birth.match(birthRegex) === null;

}

export function validateEmail(email: string) {

    const emailRegex = RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);
    return email.match(emailRegex) === null;
    
}

export function validatePassword (password: string) {
 

    let errors = [];
    
    if (password.length < 8 ) {
        errors.push("Password must be at least 8 characters");
    }
    if (!/[A-Z]/.test(password)) {
        errors.push("Password must contain at least one uppercase letter");
    }
    if (!/[a-z]/.test(password)) {
        errors.push("Password must contain at least one lowercase letter");
    }
    if (!/\d/.test(password)) {
        errors.push("Password must contain at least one digit");
    }
    if (!/[$@!%*?&]/.test(password)) {
        errors.push("Password must contain at least one special character");
    }
    console.log(errors);
    
    return errors.length;
    // (?=^.{8,}$)((?=.\d)(?=.\W+))(?![.\n])(?=.[A-Z])(?=.[a-z]).*$
}

export const Rafael = {
    name: "Rafael",
    email: "rafael.menegon@compass.com",
    username: "rafaelMenegon",
    birth: "1993-10-11",
    password: "R@fael123",
}