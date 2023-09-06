import * as React from "react";
import { AppBar } from "@mui/material"; 
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";


const NavBar = () => {
    return (
        <AppBar SX={{flexGrow: 1}}>
            <Toolbar>
                <Typography variant="h6" component="div" SX={{flexGrow: 1}}>
                    Trail Dashboard
                </Typography>
            </Toolbar>
        </AppBar>
    )

}


export default NavBar;