import React, {useEffect} from 'react';
import Header from '../components/Header';
import RegisterForm from '../components/RegisterForm';

import AOS from "aos";

const Register = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <Header isblack />
            <RegisterForm />
        </>
    )
}

export default Register;