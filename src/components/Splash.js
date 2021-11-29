import React, { useEffect } from "react";
import Header from "./header/Header";
import styled from "styled-components";
import Main from "./main/Main";
import Second from "./second/Second";
import Foot from "./foot/Foot";
import DatabaseController from "../database/DatabaseController";
// import AnimatedCursor from "react-animated-cursor";

import "../styles/appStyles.css";

/* Header styles */
import "../styles/headerStyles.css";

/* Container styles */
import "../styles/mainStyles.css";
import "../styles/secondStyles.css"

/* Queries */
import "../styles/_queries.css";

/* Foot & Footer */
import "../styles/foot.css";

import { THEME_TOGGLE_SPEED } from "../assets/constants";
import { useState } from "react/cjs/react.development";

const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    transition: all ${THEME_TOGGLE_SPEED}s;
    background: ${props => props.theme.pageBackground}
`

export default function Splash(props) {

    const [databaseController, setDatabaseController] = useState(null);
    const {theme} = props;

    function changeTheme() {
        if(theme === 'light') props.setTheme('dark');
        else props.setTheme('light');
    }
    
    useEffect(() => {
        setDatabaseController(new DatabaseController());
    }, []);

    return (
        <Page>
            <Header 
                changeTheme={changeTheme}
                databaseController={databaseController}
            />
            <Main/>
            <Second/>
            <Foot
                // Key forces a rerender of child, in this case Foot.
                key={props.theme}
                theme={theme}
                initialIconColor={theme === "dark" ? "grey" : "grey"}
                animatedIconColor={theme === "dark" ? "#1b71c2" : "#1b71c2"}
            />
        </Page>
    );
}