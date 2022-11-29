import React from 'react';
import { Outlet } from 'react-router-dom'
import classes from './Main.module.css'

const Main = () => {
    return (
        <main className={classes.main}>
            <Outlet />
            {/* this is the part of react router dom all routs will be outleted here  */}
        </main>
    );
};

export default Main;