import React from 'react';
import {useContext} from "react";

import classes from './Header.module.css';
import AuthContext from "../../store/auth-context";
import {useNavigate} from "react-router-dom";

const Header = () => {
    let navigate = useNavigate();
    const authCtx = useContext(AuthContext);

    return (
        <header className={classes.header}>
            <h1>Agro-AI</h1>
            {authCtx.isVerified && <button id="btn_1" className="bkg_Color1 o_btn o_btnM m1 btn_left" onClick={() => {
                navigate("/");
            }} type="button">
                <b>Home</b>
            </button>}
            {authCtx.isVerified && <button id="btn_2" className="bkg_Color1 o_btn o_btnM m1 btn_left" onClick={() => {
                navigate("/train");
            }} type="button">
                <b>Train</b>
            </button>}
            {authCtx.isVerified && <button id="btn_2" className="bkg_Color1 o_btn o_btnM m1 btn_left" onClick={() => {
                navigate("/view");
            }} type="button">
                <b>View</b>
            </button>}
            {authCtx.isLoggedIn && <button id="btn_2" className="bkg_ColorUnhealthy o_btn o_btnM m1 btn_left" onClick={() => {
                authCtx.logout();
            }} type="button">
                <b>Logout</b>
            </button>}
        </header>
    );
};

export default Header;