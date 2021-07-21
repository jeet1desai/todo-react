import React from 'react';
import AllOutIcon from '@material-ui/icons/AllOut';
import AppleIcon from '@material-ui/icons/Apple';
import { green } from '@material-ui/core/colors';

export default function IconApp() {
    return (
        <div>
            <AllOutIcon/>
            <AppleIcon />
            <AppleIcon color="secondary"/>
            <AppleIcon style={{ color: green[500] }}/>
            <AppleIcon color="action"/>
            <AppleIcon color="disabled"/>
        </div>
    )
}

